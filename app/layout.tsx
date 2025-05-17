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
  title: "سندك - منصة الدعم القانوني للأطباء",
  description: "منصة الدعم القانوني المتكاملة للأطباء في المملكة العربية السعودية. تغطية قانونية شاملة تصل إلى 20,000 ريال سنوياً",
  generator: "Next.js",
  applicationName: "سندك",
  referrer: "origin-when-cross-origin",
  keywords: ["سندك", "دعم قانوني", "أطباء", "تغطية قانونية", "حماية قانونية", "المملكة العربية السعودية"],
  authors: [{ name: "سندك" }],
  creator: "سندك",
  publisher: "سندك",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sanadk.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "سندك - منصة الدعم القانوني للأطباء",
    description: "منصة الدعم القانوني المتكاملة للأطباء في المملكة العربية السعودية. تغطية قانونية شاملة تصل إلى 20,000 ريال سنوياً",
    url: "https://sanadk.vercel.app/",
    siteName: "سندك",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سندك - منصة الدعم القانوني للأطباء",
    description: "منصة الدعم القانوني المتكاملة للأطباء في المملكة العربية السعودية",
    creator: "@sanadak",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
