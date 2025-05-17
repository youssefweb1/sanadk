import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertTriangle } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Alert, AlertDescription } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "الأسعار | منصة سندك الطبية",
  description: "تعرف على خطط الاشتراك المتاحة في منصة سندك الطبية للدعم القانوني للأطباء",
}

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  خطة اشتراك بسيطة وشفافة
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  اشترك الآن في منصة سندك الطبية واحصل على حماية قانونية شاملة لممارستك المهنية
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-8">
              <Alert className="mb-6 bg-amber-50 border-amber-200 text-right">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <AlertDescription className="text-amber-700 mr-2">
                  <p className="font-semibold">ملاحظة هامة:</p>
                  <p>
                    سيتم تفعيل المنصة فقط عند اكتمال 1000 اشتراك كحد أدنى خلال شهر واحد. في حالة عدم اكتمال العدد
                    المطلوب، سيتم إرجاع المبالغ المدفوعة بالكامل لجميع المشتركين.
                  </p>
                </AlertDescription>
              </Alert>

              <Card className="flex flex-col justify-between border-2 border-primary shadow-lg">
                <CardHeader className="text-center bg-primary text-white p-6 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">الباقة الأساسية</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-5xl font-extrabold tracking-tight" dir="ltr">
                      1,500
                    </span>
                    <span className="mr-2 text-xl font-medium"> ريال سعودي</span>
                    <span className="text-sm font-medium text-white/70">/سنوياً</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-right">
                    <li className="flex items-center justify-end">
                      <span className="mr-2">
                        مطالبة واحدة سنوياً تصل إلى <span dir="ltr">20,000</span> ريال سعودي
                      </span>
                      <Check className="h-5 w-5 text-primary" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="mr-2">دعم قانوني في الأخطاء الطبية</span>
                      <Check className="h-5 w-5 text-primary" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="mr-2">تقييم سريع للحالات والمطالبات</span>
                      <Check className="h-5 w-5 text-primary" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="mr-2">تغطية لجميع التخصصات الطبية</span>
                      <Check className="h-5 w-5 text-primary" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="mr-2">دعم على مدار الساعة</span>
                      <Check className="h-5 w-5 text-primary" />
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg text-right">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">سياسة التجديد:</span> لا يمكن تجديد الاشتراك إلا بعد انتهاء المدة
                      كاملة (سنة من تاريخ الاشتراك). بعد التجديد، يمكنك تقديم مطالبة جديدة.
                    </p>
                  </div>

                  <div className="mt-4 p-4 bg-red-50 rounded-lg text-right">
                    <p className="text-sm text-red-600">
                      <span className="font-semibold">سياسة الاسترداد:</span> لا يمكن استرداد المبلغ بعد الدفع واكتمال
                      الحد الأدنى من المشتركين. يتم استرداد المبلغ فقط في حالة عدم اكتمال العدد المطلوب (
                      <span dir="ltr">1000</span> مشترك) خلال شهر واحد.
                    </p>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg text-right">
                    <p className="text-sm text-blue-600">
                      <span className="font-semibold">الحدّ الأقصى للمطالبات والتنبيه السنوي:</span>
                    </p>
                    <p className="text-sm text-blue-600 mt-2">
                      يغطي صندوق "سندك"{" "}
                      <strong>
                        <span dir="ltr">60</span> مطالبة قانونية
                      </strong>{" "}
                      لكل طبيب خلال <strong>سنة الاشتراك</strong>، بحد أقصى{" "}
                      <strong>
                        <span dir="ltr">20,000</span> ر.س
                      </strong>{" "}
                      لكل مطالبة.
                    </p>
                    <ul className="list-disc mr-6 mt-2 space-y-1 text-sm text-blue-600">
                      <li>
                        <strong>عتبة التنبيه (90%):</strong> عند معالجة{" "}
                        <strong>
                          <span dir="ltr">54</span> مطالبة
                        </strong>{" "}
                        خلال سنة الاشتراك، يُخطر جميع الأعضاء داخل لوحة التحكم وعبر البريد الإلكتروني، ويُتاح لهم الاشتراك
                        في جولة <strong>Top-Up</strong> بقيمة{" "}
                        <strong>
                          <span dir="ltr">300</span> ر.س
                        </strong>{" "}
                        لإعادة فتح التغطية قبل ذكرى اشتراكهم السنوية.
                      </li>
                      <li>
                        بعد معالجة{" "}
                        <strong>
                          <span dir="ltr">60</span> مطالبة
                        </strong>{" "}
                        خلال سنة الاشتراك، يُغلق الصندوق أمام الأعضاء حتى يصلوا إلى ذكرى تفعيل اشتراكهم، حيث تُعاد سعة
                        المطالبات من جديد.
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full text-lg py-6" size="lg">
                    <Link href="/subscription/basic">اشترك الآن</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                لديك استفسارات؟{" "}
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  تواصل معنا
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  )
}
