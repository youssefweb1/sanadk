"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DoctorHeader } from "@/components/doctor-header"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { CheckCircle, Download } from "lucide-react"

export default function ClaimSuccess() {
  // Function to export claim as PDF
  const exportClaimToPDF = () => {
    alert("تم تصدير المطالبة بنجاح كملف PDF")
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DoctorSidebar />
      <div className="flex-1">
        <DoctorHeader />
        <main className="container p-4 md:p-6 flex items-center justify-center">
          <Card className="max-w-md w-full rounded-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl">تم إرسال مطالبتك بنجاح!</CardTitle>
              <CardDescription>لقد تم استلام مطالبتك وسيتم مراجعتها في أقرب وقت ممكن</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <p className="text-lg font-medium">رقم المطالبة</p>
                <p className="text-2xl font-bold text-primary">CLM-00125</p>
              </div>
              <div className="bg-muted p-4 rounded-xl mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">خطأ طبي</span>
                  <span className="text-muted-foreground">نوع المطالبة</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">15,000 ريال</span>
                  <span className="text-muted-foreground">المبلغ المطلوب</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">17/05/2025</span>
                  <span className="text-muted-foreground">تاريخ التقديم</span>
                </div>
              </div>
              <p className="text-muted-foreground">يمكنك متابعة حالة مطالبتك من خلال لوحة التحكم الخاصة بك</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Link href="/doctor/dashboard" className="w-full">
                <Button className="w-full rounded-xl">العودة إلى لوحة التحكم</Button>
              </Link>
              <Button variant="outline" className="w-full rounded-xl" onClick={exportClaimToPDF}>
                <Download className="h-4 w-4 ml-2" />
                تصدير كملف PDF
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
