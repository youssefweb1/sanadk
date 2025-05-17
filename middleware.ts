import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// هذا الملف يمنع الوصول إلى هيكل الملفات وصفحات المشروع الداخلية
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const path = url.pathname

  // منع الوصول إلى صفحة forgot-password
  if (path.includes("/forgot-password")) {
    url.pathname = "/404"
    return NextResponse.rewrite(url)
  }

  // منع الوصول المباشر إلى صفحات الطبيب إلا بعد تسجيل الدخول
  if (path.startsWith("/doctor/") && !request.cookies.has("auth_token")) {
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  // منع الوصول المباشر إلى صفحات المسؤول إلا بعد تسجيل الدخول
  if (path.startsWith("/admin/") && !request.cookies.has("admin_auth_token")) {
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// تطبيق الـ middleware على المسارات المحددة
export const config = {
  matcher: ["/forgot-password", "/doctor/:path*", "/admin/:path*"],
}
