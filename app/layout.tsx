import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/global/theme-provider";
import { generateMetadata } from "@/utils/metadata";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {/* <Toaster richColors theme="dark" position="bottom-center" /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
