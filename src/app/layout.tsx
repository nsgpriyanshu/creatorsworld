import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { generateMetadata } from '@/utils'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { Geist, Geist_Mono } from 'next/font/google'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = generateMetadata()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geist.variable} ${geistMono.variable} text-foreground min-h-screen overflow-x-hidden antialiased dark:bg-[#000000]`,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors theme="dark" position="bottom-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
