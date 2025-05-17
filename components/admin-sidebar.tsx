import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { LayoutDashboard, FileText, Users, Settings, LogOut, BarChart, Bell, HelpCircle } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AdminSidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-l bg-card shadow-md">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-white">ع م</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">عبدالله محمد</span>
              <Badge className="bg-primary">مسؤول</Badge>
            </div>
            <p className="text-xs text-muted-foreground">admin@example.com</p>
          </div>
        </div>
      </div>

      <div className="flex-1 py-4 overflow-auto">
        <nav className="space-y-1 px-2">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>لوحة التحكم</span>
          </Link>

          <Link
            href="/admin/claims"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <FileText className="h-5 w-5" />
            <span>المطالبات</span>
            <Badge className="mr-auto">8</Badge>
          </Link>

          <Link
            href="/admin/users"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Users className="h-5 w-5" />
            <span>المستخدمين</span>
          </Link>

          <Link
            href="/admin/reports"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <BarChart className="h-5 w-5" />
            <span>التقارير</span>
          </Link>

          <Link
            href="/admin/notifications"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Bell className="h-5 w-5" />
            <span>الإشعارات</span>
            <Badge className="mr-auto">5</Badge>
          </Link>

          <div className="pt-4 pb-2">
            <div className="px-3 text-xs font-medium text-muted-foreground">الإعدادات</div>
          </div>

          <Link
            href="/admin/settings"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
            <span>الإعدادات</span>
          </Link>

          <Link
            href="/admin/help"
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
