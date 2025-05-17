"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DoctorHeader } from "@/components/doctor-header"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { CalendarIcon, Upload, AlertCircle, Info } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

// Import only the locale configuration needed
import { ar } from 'date-fns/locale/ar'

export default function NewClaim() {
  // Create a locale configuration object that won't be serialized
  const locale = {
    ...ar,
    formatLong: ar.formatLong,
    formatRelative: ar.formatRelative,
    localize: ar.localize,
    match: ar.match,
    options: ar.options
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DoctorSidebar />
      <div className="flex-1">
        <DoctorHeader />
        <main className="container p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">تقديم مطالبة جديدة</h1>
          </div>

          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>ملاحظة هامة</AlertTitle>
            <AlertDescription>
              يرجى التأكد من إرفاق جميع المستندات الداعمة لمطالبتك لضمان معالجتها بسرعة. المطالبات المتعلقة بالأخطاء
              الطبية تحظى بالأولوية.
            </AlertDescription>
          </Alert>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>نموذج المطالبة</CardTitle>
              <CardDescription>يرجى تعبئة النموذج التالي لتقديم مطالبة جديدة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">عنوان المطالبة</Label>
                <Input id="title" placeholder="أدخل عنوان المطالبة" className="rounded-xl" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>تاريخ الحادثة</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-between rounded-xl text-right">
                        <span>اختر التاريخ</span>
                        <CalendarIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar locale={locale} mode="single" className="rounded-md border" />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="claimType">نوع المطالبة</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="اختر نوع المطالبة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical_error">خطأ طبي</SelectItem>
                      <SelectItem value="patient_complaint">شكوى من مريض</SelectItem>
                      <SelectItem value="insurance_dispute">نزاع مع شركة تأمين</SelectItem>
                      <SelectItem value="contract_review">مراجعة عقد</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">المبلغ المطلوب (بالريال السعودي)</Label>
                <Input id="amount" type="number" placeholder="أدخل المبلغ المطلوب" className="rounded-xl" />
                <p className="text-xs text-muted-foreground">الحد الأقصى للتغطية هو 20,000 ريال سعودي</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">وصف المطالبة</Label>
                <Textarea
                  id="description"
                  placeholder="اشرح تفاصيل المطالبة بشكل واضح"
                  className="min-h-32 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label>المستندات الداعمة</Label>
                <div className="border-2 border-dashed rounded-xl p-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">اسحب وأفلت الملفات هنا أو انقر للتصفح</p>
                    <Button variant="outline" className="mt-2 rounded-xl">
                      اختر الملفات
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  يمكنك رفع ملفات بصيغة PDF أو JPG أو PNG بحجم أقصى 10 ميجابايت
                </p>
              </div>

              <div className="bg-muted p-4 rounded-xl">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">المستندات المطلوبة للأخطاء الطبية:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>تقرير طبي مفصل عن الحالة</li>
                      <li>نسخة من الشكوى المقدمة (إن وجدت)</li>
                      <li>أي مراسلات مع المريض أو الجهات المعنية</li>
                      <li>تقارير الخبراء (إن وجدت)</li>
                      <li>أي وثائق أخرى داعمة للمطالبة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-xl">
                إلغاء
              </Button>
              <Link href="/doctor/claims/success">
                <Button className="rounded-xl">تقديم المطالبة</Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
