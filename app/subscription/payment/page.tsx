"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CreditCard, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const plan = searchParams.get("plan") || "basic"
  const amount = searchParams.get("amount") || "1500"

  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Validate that we have plan and amount
    if (!plan || !amount) {
      router.push("/")
    }
  }, [plan, amount, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (paymentMethod === "credit-card") {
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        setError("الرجاء إدخال جميع بيانات البطاقة")
        return
      }

      if (cardNumber.replace(/\s/g, "").length !== 16) {
        setError("رقم البطاقة يجب أن يتكون من 16 رقم")
        return
      }

      if (cvv.length < 3) {
        setError("رمز الأمان يجب أن يتكون من 3 أرقام على الأقل")
        return
      }
    }

    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      router.push(`/subscription/confirmation?plan=${plan}`)
    }, 2000)
  }

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  // Format expiry date
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return v
  }

  const planTitle = "باقة الحماية القانونية"

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
              <CardTitle className="text-2xl font-bold text-primary">إتمام عملية الدفع</CardTitle>
              <CardDescription className="text-primary/70 mt-2">
                {planTitle} - {amount} ريال سعودي سنوياً
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {error && (
                <Alert variant="destructive" className="mb-6 text-right">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle className="mr-2">خطأ</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-primary mb-3">اختر طريقة الدفع</h3>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center justify-end space-x-2 space-x-reverse">
                        <Label htmlFor="credit-card" className="cursor-pointer">
                          بطاقة ائتمان / مدى
                        </Label>
                        <RadioGroupItem value="credit-card" id="credit-card" />
                      </div>
                      <div className="flex items-center justify-end space-x-2 space-x-reverse">
                        <Label htmlFor="apple-pay" className="cursor-pointer">
                          Apple Pay
                        </Label>
                        <RadioGroupItem value="apple-pay" id="apple-pay" />
                      </div>
                    </RadioGroup>
                  </div>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4 bg-white p-4 rounded-md border border-gray-100">
                      <div className="space-y-2">
                        <Label htmlFor="card-number" className="text-right block">
                          رقم البطاقة
                        </Label>
                        <div className="relative">
                          <Input
                            id="card-number"
                            placeholder="0000 0000 0000 0000"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                            className="text-right pl-10"
                            dir="rtl"
                            maxLength={19}
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-name" className="text-right block">
                          الاسم على البطاقة
                        </Label>
                        <Input
                          id="card-name"
                          placeholder="الاسم كما هو مكتوب على البطاقة"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          className="text-right"
                          dir="rtl"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-right block">
                            رمز الأمان (CVV)
                          </Label>
                          <Input
                            id="cvv"
                            placeholder="000"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                            className="text-right"
                            dir="rtl"
                            maxLength={4}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-right block">
                            تاريخ الانتهاء
                          </Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                            className="text-right"
                            dir="rtl"
                            maxLength={5}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "apple-pay" && (
                    <div className="bg-white p-4 rounded-md border border-gray-100 text-center">
                      <p className="text-gray-600 mb-4">اضغط على زر Apple Pay لإتمام عملية الدفع</p>
                      <Button className="bg-black hover:bg-gray-800 text-white w-full max-w-xs">
                        <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M17.0349 7.84766C16.1785 7.84766 15.4218 8.25 14.8647 8.85938C14.3647 9.40625 14.0115 10.1953 14.0115 10.9844C14.0115 11.0156 14.0115 11.0469 14.0115 11.0781C14.0428 11.0781 14.074 11.0781 14.1053 11.0781C14.9303 11.0781 15.6871 10.6758 16.2443 10.0664C16.7443 9.51953 17.0974 8.73047 17.0974 7.94141C17.0974 7.91016 17.0974 7.87891 17.0974 7.84766C17.0662 7.84766 17.0349 7.84766 17.0349 7.84766Z"
                            fill="white"
                          />
                          <path
                            d="M17.0662 11.3906C15.9303 11.3281 14.9303 12.0859 14.3732 12.0859C13.7849 12.0859 12.9287 11.4219 12.0115 11.4219C10.6678 11.4219 9.26154 12.4219 8.51154 13.9531C7.48029 16.0781 8.23029 19.2656 9.22904 21.0156C9.72904 21.8984 10.3732 22.875 11.2224 22.8438C12.0115 22.8125 12.3178 22.3438 13.2849 22.3438C14.2537 22.3438 14.5287 22.8438 15.3647 22.8125C16.2224 22.7812 16.7693 21.9062 17.2693 21.0234C17.8256 20.0234 18.0662 19.0547 18.0662 19.0234C18.0349 19.0234 16.5037 18.4453 16.4724 16.6953C16.4412 15.2344 17.6678 14.5312 17.7303 14.5C16.9053 13.2656 15.6787 13.1719 15.2693 13.1406C14.0115 13.0469 12.9912 13.9297 12.3732 13.9297C11.7849 13.9297 10.8959 13.1094 9.76154 13.1406C9.01154 13.1719 7.01154 13.8281 6.01154 16.0156C5.01154 18.2031 5.76154 21.5156 8.01154 23.5156C8.01154 23.5156 8.76154 24.0156 9.76154 24.0156C10.7615 24.0156 11.5115 23.2656 12.7615 23.2656C14.0115 23.2656 14.5115 24.0156 15.7615 24.0156C16.7615 24.0156 17.5115 23.5156 18.0115 23.0156C18.0115 23.0156 18.2615 22.7656 18.5115 22.2656C18.5115 22.2656 16.0115 21.0156 16.0115 18.5156C16.0115 15.7656 18.5115 15.0156 18.5115 15.0156C18.0115 13.5156 17.0662 11.3906 17.0662 11.3906Z"
                            fill="white"
                          />
                        </svg>
                        Pay
                      </Button>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-semibold text-gray-700 mb-3 text-right">ملخص الطلب</h3>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{amount} ريال</span>
                    <span>{planTitle}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">0 ريال</span>
                    <span>ضريبة القيمة المضافة (15%)</span>
                  </div>
                  <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-bold">
                    <span className="text-primary">{amount} ريال</span>
                    <span>الإجمالي</span>
                  </div>
                </div>

                <Alert className="bg-primary/5 border-primary/20 text-right">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-primary/80 mr-2">جميع المعاملات آمنة ومشفرة</AlertDescription>
                </Alert>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                  {isLoading ? "جاري معالجة الدفع..." : "إتمام عملية الدفع"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center text-sm text-gray-500">
              بالضغط على "إتمام عملية الدفع"، أنت توافق على
              <Link href="/terms" className="text-primary hover:underline mx-1">
                الشروط والأحكام
              </Link>
              الخاصة بمنصة سندك الطبية
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
