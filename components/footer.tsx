import Link from "next/link"
import { Shield, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-7 w-7 text-white" />
              <span className="text-xl font-bold">سندك</span>
            </div>
            <p className="text-white/80">منصة الدعم القانوني المتكاملة للأطباء في المملكة العربية السعودية</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-white/80 hover:text-white transition-colors">
                  المميزات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/80 hover:text-white transition-colors">
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">الشروط والأحكام</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-white/80 hover:text-white transition-colors">
                  سياسة الاسترداد
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-secondary">•</span>
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li>
                <a href="mailto:yooooussef@yahoo.com" className="text-white/80 hover:text-white transition-colors">
                  yooooussef@yahoo.com
                </a>
              </li>
              <li>
                <a href="mailto:elsaabbahy@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  elsaabbahy@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+966582407507" className="text-white/80 hover:text-white transition-colors">
                  <span dir="ltr">+966 58 240 7507</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966598009081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  واتساب: <span dir="ltr">+966 59 800 9081</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            &copy; <span dir="ltr">{currentYear}</span> منصة سندك للدعم القانوني للأطباء. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <Button variant="link" className="text-white/80 hover:text-white p-0 h-auto">
              <Link href="/terms">الشروط والأحكام</Link>
            </Button>
            <span className="text-white/40">|</span>
            <Button variant="link" className="text-white/80 hover:text-white p-0 h-auto">
              <Link href="/privacy">سياسة الخصوصية</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
