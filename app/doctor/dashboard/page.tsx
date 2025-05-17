"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DoctorHeader } from "@/components/doctor-header"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, FileText, Bell, TrendingUp, Calendar, Download } from 'lucide-react'
import Link from "next/link"

export default function DoctorDashboard() {
  // Sample data for claims
  const claims = [
    { id: "CLM-001", date: "2023-05-15", title: "استشارة قانونية حول خطأ طبي", status: "مكتمل", amount: "5,000" },
    { id: "CLM-002", date: "2023-06-22", title: "شكوى من مريض", status: "قيد المراجعة", amount: "8,000" },
    { id: "CLM-003", date: "2023-07-10", title: "نزاع مع شركة تأمين", status: "مرفوض", amount: "12,000" },
    { id: "CLM-004", date: "2023-08-05", title: "مراجعة تقرير طبي", status: "مكتمل", amount: "3,000" },
  ]

  // Sample notifications
  const notifications = [
    { id: 1, title: "تم قبول مطالبتك", date: "منذ 2 ساعة" },
    { id: 2, title: "تحديث في حالة المطالبة CLM-002", date: "منذ يوم واحد" },
    { id: 3, title: "تذكير: تجديد الاشتراك", date: "منذ 3 أيام" },
  ]

  // Calculate used coverage
  const totalCoverage = 20000
  const usedCoverage = 8000 // 5000 + 3000 (completed claims)
  const remainingCoverage = totalCoverage - usedCoverage
  const coveragePercentage = (usedCoverage / totalCoverage) * 100

  // Function to export claims as PDF
  const exportClaimsToPDF = () => {
    alert("تم تصدير المطالبات بنجاح كملف PDF")
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DoctorSidebar />
      <div className="flex-1">
        <DoctorHeader />
        <main className="container p-4 md:p-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">مرحباً، د. الصباحي</h1>
              <p className="text-muted-foreground">آخر تسجيل دخول: اليوم، 10:30 صباحاً</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/doctor/claims/new">
                <Button className="rounded-xl flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>قدّم مطالبة جديدة</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Subscription Status Card */}
            <Card className="rounded-2xl shadow-md card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  حالة الاشتراك
                </CardTitle>
                <CardDescription>تفاصيل اشتراكك الحالي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div>
                      <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                        نشط
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">باقة الحماية القانونية</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">15/05/2026</span>
                    <span className="text-sm text-muted-foreground">تاريخ الانتهاء</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">1,500 ريال</span>
                    <span className="text-sm text-muted-foreground">قيمة الاشتراك</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/doctor/subscription" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl">
                    إدارة الاشتراك
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Coverage Status Card */}
            <Card className="rounded-2xl shadow-md card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  حالة التغطية
                </CardTitle>
                <CardDescription>التغطية المالية المتبقية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usedCoverage > 0 ? (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-red-600">تم استخدام المطالبة السنوية</span>
                        <span className="text-sm text-muted-foreground">حالة المطالبة</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">
                          لقد استخدمت مطالبتك السنوية بقيمة {usedCoverage.toLocaleString()} ريال. يمكنك تقديم مطالبة
                          جديدة بعد تجديد اشتراكك.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-green-600">متاحة للاستخدام</span>
                        <span className="text-sm text-muted-foreground">حالة المطالبة</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">
                          يمكنك تقديم مطالبة واحدة هذا العام بقيمة تصل إلى {totalCoverage.toLocaleString()} ريال
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/doctor/claims" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl">
                    عرض جميع المطالبات
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Notifications Card */}
            <Card className="rounded-2xl shadow-md card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  آخر الإشعارات
                </CardTitle>
                <CardDescription>آخر التحديثات والإشعارات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                      <div className="p-1.5 bg-primary/10 rounded-full">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">{notification.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/doctor/notifications" className="w-full">
                  <Button variant="ghost" className="w-full rounded-xl">
                    عرض جميع الإشعارات
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Calendar Card */}
          <Card className="mt-6 rounded-2xl shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  المواعيد القادمة
                </CardTitle>
                <CardDescription>مواعيد الاستشارات القانونية القادمة</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="rounded-lg">
                حجز موعد جديد
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">استشارة قانونية حول خطأ طبي</p>
                      <p className="text-sm text-muted-foreground">الأحد، 20 مايو 2023 - 10:00 صباحاً</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    تفاصيل
                  </Button>
                </div>
                <div className="text-center py-4">
                  <p className="text-muted-foreground">لا توجد مواعيد أخرى قادمة</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Claims Table */}
          <Card className="mt-6 rounded-2xl shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  المطالبات السابقة
                </CardTitle>
                <CardDescription>سجل المطالبات التي قمت بتقديمها</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-lg flex items-center gap-2"
                onClick={exportClaimsToPDF}
              >
                <Download className="h-4 w-4" />
                <span>تصدير</span>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم المطالبة</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">الموضوع</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">المبلغ</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {claims.map((claim) => (
                    <TableRow key={claim.id}>
                      <TableCell className="font-medium">{claim.id}</TableCell>
                      <TableCell>{claim.date}</TableCell>
                      <TableCell>{claim.title}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            claim.status === "مكتمل"
                              ? "bg-green-50 text-green-600 hover:bg-green-50"
                              : claim.status === "قيد المراجعة"
                                ? "bg-amber-50 text-amber-600 hover:bg-amber-50"
                                : "bg-red-50 text-red-600 hover:bg-red-50"
                          }
                        >
                          {claim.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{claim.amount} ريال</TableCell>
                      <TableCell>
                        <Link href={`/doctor/claims/${claim.id}`}>
                          <Button variant="ghost" size="sm" className="h-8 rounded-lg">
                            عرض التفاصيل
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/doctor/claims">
                <Button variant="outline" className="rounded-xl">
                  عرض جميع المطالبات
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
