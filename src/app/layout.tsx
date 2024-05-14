import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Creator's World",
  description: 'It&apos;s the world&apos;s largest Discord app hub also it is the place where creators collab and innovative new ways',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
