"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DoctorHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">القائمة</span>
          </Button>
        </div>

        <div className="flex-1 md:flex-initial">
          <h1 className="text-lg font-bold md:hidden">لوحة التحكم</h1>
        </div>

        <div className="hidden md:flex items-center gap-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث..." className="pl-3 pr-10 rounded-full bg-muted border-none" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                  3
                </Badge>
                <span className="sr-only">الإشعارات</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>الإشعارات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-auto">
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/10 rounded-full">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">تم قبول مطالبتك</p>
                      <p className="text-xs text-muted-foreground">تمت الموافقة على مطالبتك رقم CLM-001</p>
                      <p className="text-xs text-muted-foreground mt-1">منذ 2 ساعة</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/10 rounded-full">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">تحديث في حالة المطالبة</p>
                      <p className="text-xs text-muted-foreground">تم تحديث حالة المطالبة CLM-002 إلى قيد المراجعة</p>
                      <p className="text-xs text-muted-foreground mt-1">منذ يوم واحد</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/10 rounded-full">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">تذكير: تجديد الاشتراك</p>
                      <p className="text-xs text-muted-foreground">يرجى تجديد اشتراكك قبل انتهاء الفترة الحالية</p>
                      <p className="text-xs text-muted-foreground mt-1">منذ 3 أيام</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="justify-center">
                <Link href="/doctor/notifications">عرض جميع الإشعارات</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-white">م أ</AvatarFallback>
                </Avatar>
                <span className="sr-only">الملف الشخصي</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>د. محمد أحمد</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/doctor/profile">الملف الشخصي</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/doctor/settings">الإعدادات</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">تسجيل الخروج</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t animate-fadeIn">
          <div className="container py-4 flex flex-col gap-2">
            <Link
              href="/doctor/dashboard"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              لوحة التحكم
            </Link>
            <Link
              href="/doctor/claims"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              المطالبات
            </Link>
            <Link
              href="/doctor/profile"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الملف الشخصي
            </Link>
            <Link
              href="/doctor/settings"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الإعدادات
            </Link>
            <div className="relative mt-2 mb-2">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="بحث..." className="pl-3 pr-10 rounded-full bg-muted border-none" />
            </div>
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              تسجيل الخروج
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
