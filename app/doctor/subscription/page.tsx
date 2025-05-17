"use client"

import { useState } from "react"
import Link from "next/link"
import { CreditCard, FileText, Download, TrendingUp, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DoctorHeader } from "@/components/doctor-header"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DoctorSubscriptionPage() {
  const [isLoading, setIsLoading] = useState(false)

  // Mock subscription data
  const subscriptionData = {
    plan: "basic",
    status: "active",
    startDate: "15/05/2025",
    endDate: "15/05/2026",
    amount: "1,500",
    autoRenew: true,
    paymentMethod: "بطاقة مدى **** 5678",
    invoices: [{ id: "INV-2025-001", date: "15/05/2025", amount: "1,500", status: "مدفوعة" }],
    features: [
      "تغطية المطالبات حتى 20,000 ريال",
      "دعم قانوني متخصص في الأخطاء الطبية",
      "تقييم المخاطر القانونية",
      "مراجعة المستندات القانونية",
      "دعم على مدار الساعة",
    ],
  }

  // Calculate used coverage
  const totalCoverage = 20000
  const usedCoverage = 8000 // 5000 + 3000 (completed claims)
  const remainingCoverage = totalCoverage - usedCoverage
  const coveragePercentage = (usedCoverage / totalCoverage) * 100

  const handleRenewal = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      alert("تم تجديد الاشتراك بنجاح")
    }, 1500)
  }

  // Function to export invoice as PDF
  const exportInvoiceToPDF = () => {
    alert("تم تصدير الفاتورة بنجاح كملف PDF")
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DoctorSidebar />
      <div className="flex-1">
        <DoctorHeader />
        <main className="container p-4 md:p-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">إدارة الاشتراك</h1>
              <p className="text-muted-foreground">عرض وإدارة تفاصيل اشتراكك</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="rounded-xl" onClick={handleRenewal} disabled={isLoading}>
                {isLoading ? "جاري التجديد..." : "تجديد الاشتراك"}
              </Button>
            </div>
          </div>

          <Alert className="mb-6 bg-amber-50 border-amber-200 text-right">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertDescription className="text-amber-700 mr-2">
              <p className="font-semibold">سياسة التجديد:</p>
              <p>
                لا يمكن تجديد الاشتراك إلا بعد انتهاء المدة كاملة (سنة من تاريخ الاشتراك). بعد التجديد، يمكنك تقديم
                مطالبة جديدة.
              </p>
              <p className="mt-2">
                <span className="font-semibold">سياسة الاسترداد:</span> لا يمكن استرداد المبلغ بعد الدفع واكتمال الحد
                الأدنى من المشتركين (1000 مشترك). يتم استرداد المبلغ فقط في حالة عدم اكتمال العدد المطلوب خلال شهر واحد.
              </p>
            </AlertDescription>
          </Alert>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card className="rounded-2xl shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2 justify-end">
                  <span>الباقة الحالية</span>
                  <CreditCard className="h-5 w-5 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end items-center mb-2">
                  <Badge className="mr-2 bg-green-500">فعّال</Badge>
                  <span className="text-xl font-bold text-primary">باقة الحماية القانونية</span>
                </div>
                <div className="space-y-2 text-right">
                  <div className="flex justify-between">
                    <span className="font-medium">{subscriptionData.startDate}</span>
                    <span className="text-muted-foreground">تاريخ البدء</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{subscriptionData.endDate}</span>
                    <span className="text-muted-foreground">تاريخ الانتهاء</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{subscriptionData.amount} ريال</span>
                    <span className="text-muted-foreground">المبلغ المدفوع</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-xl" onClick={handleRenewal} disabled={isLoading}>
                  {isLoading ? "جاري التجديد..." : "تجديد الاشتراك"}
                </Button>
              </CardFooter>
            </Card>

            <Card className="rounded-2xl shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2 justify-end">
                  <span>حالة التغطية</span>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </CardTitle>
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
                    عرض المطالبات
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="rounded-2xl shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2 justify-end">
                  <span>طريقة الدفع</span>
                  <CreditCard className="h-5 w-5 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <div>
                      <p className="font-medium">{subscriptionData.paymentMethod}</p>
                      <p className="text-sm text-muted-foreground">تنتهي في 06/2026</p>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-full">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="autoRenew"
                      className="ml-2"
                      checked={subscriptionData.autoRenew}
                      onChange={() => {}}
                    />
                    <label htmlFor="autoRenew" className="text-sm">
                      تفعيل التجديد التلقائي
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-xl">
                  تعديل طريقة الدفع
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="rounded-2xl shadow-md mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                الفواتير
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="rounded-lg flex items-center gap-2"
                onClick={exportInvoiceToPDF}
              >
                <Download className="h-4 w-4" />
                <span>تصدير</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-right">رقم الفاتورة</th>
                      <th className="py-3 text-right">التاريخ</th>
                      <th className="py-3 text-right">المبلغ</th>
                      <th className="py-3 text-right">الحالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionData.invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b">
                        <td className="py-3">{invoice.id}</td>
                        <td className="py-3">{invoice.date}</td>
                        <td className="py-3">{invoice.amount} ريال</td>
                        <td className="py-3">
                          <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                            {invoice.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
