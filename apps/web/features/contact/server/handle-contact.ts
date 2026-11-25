import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "../schema";
import { createSupabaseServer } from "../../../lib/supabase/server";

/* ------------------------------- handler ------------------------------ */

export async function handleContact(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const discordUserId = process.env.DISCORD_USER_ID;

  try {
    const raw = await req.json();
    const validated = await contactSchema.parseAsync(raw);

    // 1. Persist lead in Supabase as primary resilient store
    let supabaseSaved = false;
    try {
      if (
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ) {
        const supabase = await createSupabaseServer();
        const { error: dbError } = await supabase
          .from("contact_submissions")
          .insert({
            first_name: validated.firstName,
            last_name: validated.lastName,
            email: validated.email,
            phone: validated.phone || null,
            country: validated.country,
            company_size: validated.companySize || null,
            plan: validated.plan || null,
            message: validated.message,
          });

        if (dbError) {
          console.warn(
            "Supabase lead insertion warning (table may need migration):",
            dbError.message,
          );
        } else {
          supabaseSaved = true;
        }
      }
    } catch (dbErr) {
      console.warn("Supabase lead capture error:", dbErr);
    }

    // 2. Dispatch Discord Webhook notification
    let discordSent = false;
    if (webhookUrl && discordUserId) {
      try {
        const embed = {
          title: "New Contact Form Submission",
          color: 0x3b82f6,
          description: [
            `**Name:** \`${validated.firstName} ${validated.lastName}\``,
            `**Email:** \`${validated.email}\``,
            validated.phone ? `**Phone:** \`${validated.phone}\`` : null,
            `**Country:** \`${validated.country}\``,
            validated.companySize
              ? `**Company Size:** \`${validated.companySize}\``
              : null,
            validated.plan
              ? `**Selected Plan / Inquiry:** \`${validated.plan}\``
              : null,
            "",
            "**Message:**",
            validated.message,
          ]
            .filter(Boolean)
            .join("\n"),
          timestamp: new Date().toISOString(),
        };

        const payload = {
          content: `<@${discordUserId}>`,
          embeds: [embed],
        };

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(5000),
        });

        if (response.ok) {
          discordSent = true;
        } else {
          console.error(
            "Discord webhook dispatch failed:",
            await response.text(),
          );
        }
      } catch (err) {
        console.error("Discord webhook error:", err);
      }
    }

    if (!supabaseSaved && !discordSent && !webhookUrl) {
      return NextResponse.json(
        { message: "Server communication channels unavailable" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: error.issues.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 },
      );
    }

    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
