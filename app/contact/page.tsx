"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResult, setFormResult] = useState<{ status: "success" | "error" | "idle"; message: string }>({
    status: "idle",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormResult({ status: "idle", message: "" })

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setFormResult({
          status: "success",
          message: "تم إرسال رسالتك بنجاح. سنقوم بالرد عليك في أقرب وقت ممكن.",
        })
        // Reset the form
        e.currentTarget.reset()
      } else {
        setFormResult({
          status: "error",
          message: data.message || "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى",
        })
      }
    } catch (error) {
      setFormResult({
        status: "error",
        message: "حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">اتصل بنا</h1>
              <p className="text-xl text-white/90">نحن هنا للإجابة على استفساراتك وتقديم المساعدة التي تحتاجها</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>تواصل معنا</CardTitle>
                  <CardDescription>يرجى ملء النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit} dir="rtl">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم</Label>
                      <Input id="name" name="name" placeholder="أدخل اسمك الكامل" className="rounded-xl" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" name="phone" placeholder="05xxxxxxxx" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">الرسالة</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="اكتب رسالتك هنا"
                        className="min-h-32 rounded-xl"
                        required
                      />
                    </div>
                    <input type="hidden" name="access_key" value="2abc227c-88da-447c-93ae-1b36d7fb7781" />
                    <input type="hidden" name="subject" value="رسالة جديدة من موقع سندك" />
                    <input type="hidden" name="from_name" value="منصة سندك - نموذج الاتصال" />
                    <Button type="submit" className="w-full rounded-xl" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                    {formResult.status !== "idle" && (
                      <div
                        className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                          formResult.status === "success"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {formResult.status === "success" ? (
                          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        )}
                        <p>{formResult.message}</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">معلومات الاتصال</h2>
                  <p className="text-muted-foreground mb-6">يمكنك التواصل معنا مباشرة من خلال وسائل الاتصال التالية</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">البريد الإلكتروني</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:yooooussef@yahoo.com" className="hover:text-primary">
                            yooooussef@yahoo.com
                          </a>
                        </p>
                        <p className="text-muted-foreground">
                          <a href="mailto:elsaabbahy@gmail.com" className="hover:text-primary">
                            elsaabbahy@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">الهاتف</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+966582407507" className="hover:text-primary">
                            <span dir="ltr">+966 58 240 7507</span>
                          </a>
                        </p>
                        <p className="text-muted-foreground">
                          <a href="https://wa.me/966598009081" className="hover:text-primary">
                            واتساب: <span dir="ltr">+966 59 800 9081</span>
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">العنوان</h3>
                        <p className="text-muted-foreground">
                          الرياض، المملكة العربية السعودية
                          <br />
                          حي الملقا، طريق الأمير محمد بن سلمان
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-[300px] border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4054434272576!2d46.6249!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwMzcnMjkuNiJF!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
