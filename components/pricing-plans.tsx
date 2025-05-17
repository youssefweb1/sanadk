"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function PricingPlans() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            خطة اشتراك بسيطة وشفافة
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
            اشترك الآن في منصة سندك الطبية واحصل على حماية قانونية شاملة لممارستك المهنية
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <Alert className="mb-6 bg-amber-50 border-amber-200 text-right">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertDescription className="text-amber-700 mr-2">
              <p className="font-semibold">ملاحظة هامة:</p>
              <p>
                سيتم تفعيل المنصة فقط عند اكتمال 1000 اشتراك كحد أدنى خلال شهر واحد. في حالة عدم اكتمال العدد المطلوب،
                سيتم إرجاع المبالغ المدفوعة بالكامل لجميع المشتركين.
              </p>
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid justify-center gap-6 lg:grid-cols-1 lg:gap-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="flex flex-col justify-between border-2 border-primary shadow-lg">
              <CardHeader className="text-center bg-primary text-white p-6 rounded-t-lg">
                <CardTitle className="text-2xl font-bold">الباقة الأساسية</CardTitle>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight">1,500</span>
                  <span className="mr-2 text-xl font-medium"> ريال سعودي</span>
                  <span className="text-sm font-medium text-white/70">/سنوياً</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-right">
                  <li className="flex items-center justify-end">
                    <span className="mr-2">مطالبة واحدة سنوياً بقيمة تصل إلى 20,000 ريال سعودي</span>
                    <Check className="h-5 w-5 text-primary" />
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="mr-2">دعم قانوني متخصص في الأخطاء الطبية</span>
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
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full text-lg py-6" size="lg">
                  <Link href="/subscription/basic">اشترك الآن</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
