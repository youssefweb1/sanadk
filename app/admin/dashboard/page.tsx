import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, TrendingUp, Users, FileText, AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AdminDashboard() {
  // Sample data for claims
  const claims = [
    {
      id: "CLM-001",
      user: "د. محمد أحمد",
      date: "2023-05-15",
      description: "استشارة قانونية حول عقد العيادة",
      status: "قيد المراجعة",
      avatar: "م أ",
    },
    {
      id: "CLM-002",
      user: "د. سارة خالد",
      date: "2023-06-22",
      description: "دعوى قضائية من مريض",
      status: "قيد المراجعة",
      avatar: "س خ",
    },
    {
      id: "CLM-003",
      user: "د. أحمد علي",
      date: "2023-07-10",
      description: "مشكلة مع التأمين الطبي",
      status: "قيد المراجعة",
      avatar: "أ ع",
    },
    {
      id: "CLM-004",
      user: "د. فاطمة محمد",
      date: "2023-07-15",
      description: "نزاع مع شريك في العيادة",
      status: "قيد المراجعة",
      avatar: "ف م",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="container p-4 md:p-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">لوحة تحكم المسؤول</h1>
              <p className="text-muted-foreground">مرحباً بك، عبدالله محمد</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="rounded-xl">تصدير التقارير</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card className="rounded-2xl shadow-md card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  إجمالي المطالبات
                </CardTitle>
                <CardDescription>عدد المطالبات المقدمة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">24</p>
                  <div className="p-2 bg-green-100 rounded-full">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">زيادة 8% عن الشهر الماضي</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  قيد المراجعة
                </CardTitle>
                <CardDescription>المطالبات التي تنتظر المراجعة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">8</p>
                  <div className="p-2 bg-amber-100 rounded-full">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">4 مطالبات جديدة اليوم</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  المطالبات المكتملة
                </CardTitle>
                <CardDescription>المطالبات التي تمت معالجتها</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">16</p>
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">معدل قبول 75%</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  الأعضاء النشطين
                </CardTitle>
                <CardDescription>عدد الأطباء المشتركين</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">128</p>
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">زيادة 12% عن الشهر الماضي</p>
              </CardContent>
            </Card>
          </div>

          {/* Claims Table */}
          <Card className="mt-6 rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                المطالبات الحالية
              </CardTitle>
              <CardDescription>قائمة المطالبات التي تنتظر المراجعة</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم المطالبة</TableHead>
                    <TableHead className="text-right">الطبيب</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">الوصف</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {claims.map((claim) => (
                    <TableRow key={claim.id}>
                      <TableCell className="font-medium">{claim.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/20 text-primary text-xs">
                              {claim.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <span>{claim.user}</span>
                        </div>
                      </TableCell>
                      <TableCell>{claim.date}</TableCell>
                      <TableCell>{claim.description}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">
                          {claim.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 border-green-200"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span className="sr-only">قبول</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border-red-200"
                          >
                            <XCircle className="h-4 w-4" />
                            <span className="sr-only">رفض</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 rounded-lg">
                            التفاصيل
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
