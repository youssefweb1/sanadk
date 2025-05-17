import Link from "next/link"
import { LayoutDashboard, FileText, User, Settings, LogOut, Bell, CreditCard, HelpCircle } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DoctorSidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-l bg-card shadow-md">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-white">د ص</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">د. الصباحي</span>
              <Badge className="bg-red-500">غير نشط</Badge>
            </div>
            <p className="text-xs text-muted-foreground">doctor@sanadak.com</p>
          </div>
        </div>
      </div>

      <div className="flex-1 py-4 overflow-auto">
        <nav className="space-y-1 px-2">
          <Link
            href="/doctor/dashboard"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>لوحة التحكم</span>
          </Link>

          <Link
            href="/doctor/claims"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <FileText className="h-5 w-5" />
            <span>المطالبات</span>
          </Link>

          <Link
            href="/doctor/notifications"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Bell className="h-5 w-5" />
            <span>الإشعارات</span>
            <Badge className="mr-auto">3</Badge>
          </Link>

          <Link
            href="/doctor/subscription"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <CreditCard className="h-5 w-5" />
            <span>الاشتراك</span>
          </Link>

          <div className="pt-4 pb-2">
            <div className="px-3 text-xs font-medium text-muted-foreground">الحساب</div>
          </div>

          <Link
            href="/doctor/profile"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <User className="h-5 w-5" />
            <span>الملف الشخصي</span>
          </Link>

          <Link
            href="/doctor/settings"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
            <span>الإعدادات</span>
          </Link>

          <Link
            href="/doctor/help"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <HelpCircle className="h-5 w-5" />
            <span>المساعدة والدعم</span>
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t">
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          <span>تسجيل الخروج</span>
        </Link>
      </div>
    </aside>
  )
}
