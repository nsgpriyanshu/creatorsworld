import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Define schema for input validation
const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address').max(255),
  message: z.string().min(1, 'Message is required').max(2000),
})

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json({ message: 'Server configuration error' }, { status: 500 })
  }

  try {
    const formData = await req.formData()
    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    }

    const validatedData = await formSchema.parseAsync(rawData)

    const discordMessage = {
      content: `-------------------------------\n\n**New Contact Form Submission**\n\n**Name:** ${validatedData.name}\n**Email:** ${validatedData.email}\n**Message:** ${validatedData.message}\n\n-------------------------------`,
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
      signal: AbortSignal.timeout(5000), // 5-second timeout
    })

    if (!response.ok) {
      throw new Error(`Failed to send message to Discord: ${response.statusText}`)
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 },
      )
    }

    console.error('Error processing contact form:', error)
    return NextResponse.json({ message: 'Failed to process request' }, { status: 500 })
  }
}
