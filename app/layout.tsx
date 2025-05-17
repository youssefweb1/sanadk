import type React from "react"
import type { Metadata } from "next"
import { Cairo, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "سندك - منصة الدعم القانوني لأطباء الأسنان",
  description: "منصة الدعم القانوني المتكاملة لأطباء الأسنان في المملكة العربية السعودية",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${roboto.variable} font-cairo`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
