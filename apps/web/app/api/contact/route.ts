import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "../../../lib/validations/contact";

/* ------------------------------- handler ------------------------------ */

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const discordUserId = process.env.DISCORD_USER_ID;

  if (!webhookUrl || !discordUserId) {
    return NextResponse.json(
      { message: "Server misconfigured" },
      { status: 500 },
    );
  }

  try {
    const raw = await req.json();
    const validated = await contactSchema.parseAsync(raw);

    /* --------------------------- discord embed --------------------------- */

    const embed = {
      title: "New Contact Form Submission",
      color: 0xf10a0a,
      description: [
        `**Name:** \`${validated.firstName} ${validated.lastName}\``,
        `**Email:** \`${validated.email}\``,
        validated.phone ? `**Phone:** \`${validated.phone}\`` : null,
        `**Country:** \`${validated.country}\``,
        validated.companySize
          ? `**Company Size:** \`${validated.companySize}\``
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

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
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
