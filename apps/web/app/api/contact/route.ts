import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/* ----------------------------- validation ----------------------------- */

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or less"),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email must be 255 characters or less"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message must be 2000 characters or less"),
});

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

    const validated = await formSchema.parseAsync(raw);

    /* --------------------------- discord embed --------------------------- */

    const embed = {
      title: "New Contact Form Submission",
      color: 0xf10a0a, //f10a0a
      description: [
        `**Name:** \`${validated.name}\``,
        `**Email:** \`${validated.email}\``,
        "",
        "**Message:**",
        validated.message,
      ].join("\n"),
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
