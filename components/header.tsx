"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold">سندك</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            الرئيسية
          </Link>
          <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
            المميزات
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            من نحن
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            الأسئلة الشائعة
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            اتصل بنا
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="rounded-2xl">
              تسجيل الدخول
            </Button>
          </Link>
          <Link href="/subscription/basic">
            <Button className="rounded-2xl">اشترك الآن</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">القائمة</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t animate-fadeIn">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/features"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              المميزات
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              الأسئلة الشائعة
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full rounded-2xl">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link href="/subscription/basic" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-2xl">اشترك الآن</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
