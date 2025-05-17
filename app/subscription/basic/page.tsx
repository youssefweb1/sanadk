"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function BasicSubscriptionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      router.push("/subscription/payment?plan=basic&amount=1500")
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-6">
            <Button variant="ghost" className="text-primary" asChild>
              <Link href="/">
                <ArrowRight className="ml-2 h-4 w-4" />
                العودة إلى الصفحة الرئيسية
              </Link>
            </Button>
          </div>

          <Card className="border-primary/10 shadow-lg">
            <CardHeader className="text-center border-b border-primary/10 pb-6">
              <CardTitle className="text-2xl font-bold text-primary">باقة الحماية القانونية</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">1,500</span>
                <span className="text-lg text-primary/60 mr-2">ريال سعودي</span>
                <span className="text-sm text-gray-500 block mt-1">سنوياً</span>
              </div>
              <CardDescription className="text-primary/70 mt-4">
                الحماية القانونية الشاملة لجميع الأطباء
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <Alert className="bg-amber-50 border-amber-200 text-right">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <AlertDescription className="text-amber-700 mr-2">
                    <p className="font-semibold">ملاحظة هامة:</p>
                    <p>
                      سيتم تفعيل المنصة فقط عند اكتمال 1000 اشتراك كحد أدنى خلال شهر واحد. في حالة عدم اكتمال العدد
                      المطلوب، سيتم إرجاع المبالغ المدفوعة بالكامل لجميع المشتركين.
                    </p>
                  </AlertDescription>
                </Alert>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-right">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">سياسة التجديد:</span> لا يمكن تجديد الاشتراك إلا بعد انتهاء المدة
                    كاملة (سنة من تاريخ الاشتراك). بعد التجديد، يمكنك تقديم مطالبة جديدة.
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">سياسة الاسترداد:</span> لا يمكن استرداد المبلغ بعد الدفع واكتمال
                    الحد الأدنى من المشتركين (1000 مشترك). يتم استرداد المبلغ فقط في حالة عدم اكتمال العدد المطلوب خلال
                    شهر واحد.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3 text-right">مزايا الباقة:</h3>
                  <ul className="space-y-3 text-right">
                    <li className="flex items-center justify-end">
                      <span className="text-gray-700">مطالبة واحدة سنوياً بقيمة تصل إلى 20,000 ريال</span>
                      <CheckCircle2 className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-gray-700">دعم قانوني متخصص في الأخطاء الطبية</span>
                      <CheckCircle2 className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-gray-700">تقييم المخاطر القانونية</span>
                      <CheckCircle2 className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-gray-700">مراجعة المستندات القانونية</span>
                      <CheckCircle2 className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-gray-700">دعم على مدار الساعة</span>
                      <CheckCircle2 className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                    </li>
                  </ul>
                </div>

                <Alert className="bg-primary/5 border-primary/20 text-right">
                  <AlertDescription className="text-primary/80">
                    <p className="font-semibold">ملاحظة هامة:</p>
                    <p>التغطية تشمل المبلغ الفعلي للمطالبة بعد التحقق من المعلومات بحد أقصى 20,000 ريال</p>
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-50 p-4 rounded-md text-right">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">تفاصيل التغطية:</h3>
                  <p className="text-gray-600 mb-2">
                    توفر الباقة تغطية لمطالبة قانونية واحدة سنوياً متعلقة بممارستك المهنية كطبيب، مع التركيز على قضايا
                    الأخطاء الطبية، بحد أقصى 20,000 ريال سعودي للمطالبة.
                  </p>
                  <p className="text-gray-600 mb-2">
                    ملاحظة هامة: يمكنك تقديم مطالبة واحدة فقط خلال السنة، وإذا كانت قيمتها أقل من 20,000 ريال، فلن تتمكن
                    من تقديم مطالبة أخرى حتى تجديد الاشتراك.
                  </p>
                  <p className="text-gray-600">
                    سياسة التجديد: لا يمكن تجديد الاشتراك إلا بعد انتهاء المدة كاملة (سنة من تاريخ الاشتراك). بعد
                    التجديد، يمكنك تقديم مطالبة جديدة.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button onClick={handleSubscribe} className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "جاري التحضير..." : "اشترك الآن"}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                بالضغط على "اشترك الآن"، أنت توافق على
                <Link href="/terms" className="text-primary hover:underline mx-1">
                  الشروط والأحكام
                </Link>
                الخاصة بمنصة سندك الطبية
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
