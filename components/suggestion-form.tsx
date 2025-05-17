"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, CheckCircle, Loader2, Send } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function SuggestionForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("message", suggestion)
      formData.append("access_key", "2abc227c-88da-447c-93ae-1b36d7fb7781")
      formData.append("subject", "اقتراح جديد من موقع سندك")
      formData.append("from_name", "منصة سندك - نموذج الاقتراحات")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        toast({
          title: "تم إرسال اقتراحك بنجاح",
          description: "شكراً لك على مساهمتك في تحسين خدماتنا",
        })

        // Reset form after 3 seconds
        setTimeout(() => {
          setName("")
          setEmail("")
          setSuggestion("")
          setIsSubmitted(false)
        }, 3000)
      } else {
        toast({
          title: "حدث خطأ",
          description: data.message || "حدث خطأ أثناء إرسال الاقتراح، يرجى المحاولة مرة أخرى",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-2">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">شاركنا اقتراحاتك</h2>
            <p className="text-muted-foreground text-lg">
              نحن نسعى دائماً لتحسين خدماتنا وتطويرها لتلبية احتياجاتك بشكل أفضل. شاركنا أفكارك واقتراحاتك لنرتقي معاً
              بمستوى الخدمة.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                كيف نستفيد من اقتراحاتك؟
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>تطوير خدمات جديدة تلبي احتياجات الأطباء</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>تحسين إجراءات معالجة المطالبات وتسريعها</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>تطوير منصتنا الإلكترونية لتوفير تجربة أفضل</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle>نموذج الاقتراحات</CardTitle>
              <CardDescription>شاركنا أفكارك لتحسين خدماتنا</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">تم إرسال اقتراحك بنجاح</h3>
                  <p className="text-muted-foreground">شكراً لك على مساهمتك في تحسين خدماتنا</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="أدخل اسمك الكامل"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="suggestion">اقتراحك</Label>
                    <Textarea
                      id="suggestion"
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      placeholder="شاركنا اقتراحك أو فكرتك لتحسين خدماتنا"
                      className="min-h-32 rounded-xl"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        إرسال الاقتراح
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
