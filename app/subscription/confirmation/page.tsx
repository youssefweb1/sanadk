"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Download, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "basic"

  const [orderNumber, setOrderNumber] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [expiryDate, setExpiryDate] = useState("")

  useEffect(() => {
    // Generate random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)

    // Set current date
    const now = new Date()
    setCurrentDate(now.toLocaleDateString("ar-SA"))

    // Set expiry date (1 year from now)
    const expiry = new Date()
    expiry.setFullYear(expiry.getFullYear() + 1)
    setExpiryDate(expiry.toLocaleDateString("ar-SA"))
  }, [])

  const planDetails = {
    basic: {
      title: "باقة الحماية القانونية",
      amount: "1,500",
      features: [
        "تغطية المطالبات حتى 20,000 ريال",
        "دعم قانوني متخصص في الأخطاء الطبية",
        "تقييم المخاطر القانونية",
        "مراجعة المستندات القانونية",
        "دعم على مدار الساعة",
      ],
    },
  }

  const selectedPlan = planDetails.basic

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/10 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">تم الاشتراك بنجاح!</CardTitle>
              <CardDescription className="text-primary/70 mt-2">
                شكراً لاشتراكك في منصة سندك الطبية للدعم القانوني
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-700 mb-3 text-right">تفاصيل الاشتراك</h3>
                <div className="space-y-2 text-right">
                  <div className="flex justify-between">
                    <span className="font-medium">{orderNumber}#</span>
                    <span className="text-gray-600">رقم الطلب</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{selectedPlan.title}</span>
                    <span className="text-gray-600">نوع الباقة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{selectedPlan.amount} ريال سعودي</span>
                    <span className="text-gray-600">المبلغ المدفوع</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{currentDate}</span>
                    <span className="text-gray-600">تاريخ الاشتراك</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{expiryDate}</span>
                    <span className="text-gray-600">تاريخ انتهاء الاشتراك</span>
                  </div>
                </div>
              </div>

              <div className="border border-primary/10 rounded-md p-4">
                <h3 className="font-semibold text-primary mb-3 text-right">مزايا الباقة</h3>
                <ul className="space-y-2 text-right">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-end">
                      <span className="text-gray-700">{feature}</span>
                      <CheckCircle className="h-4 w-4 text-primary ml-2 flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90" onClick={() => exportToPDF()}>
                  <Download className="ml-2 h-4 w-4" />
                  تحميل إيصال الدفع
                </Button>
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                  <Calendar className="ml-2 h-4 w-4" />
                  إضافة تاريخ التجديد إلى التقويم
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center">
                <p className="text-primary/70 mb-2">ماذا تريد أن تفعل الآن؟</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/doctor/dashboard">الذهاب إلى لوحة التحكم</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                    <Link href="/">العودة إلى الصفحة الرئيسية</Link>
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">تم إرسال تفاصيل الاشتراك إلى بريدك الإلكتروني</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Function to simulate PDF export
function exportToPDF() {
  alert("تم تحميل إيصال الدفع بنجاح")
}
