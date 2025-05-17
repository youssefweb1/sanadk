"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, ArrowRight, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [userType, setUserType] = useState("doctor")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)

      // Check admin credentials
      if (userType === "admin") {
        if (email === "admin@sanadak.com" && password === "admin123") {
          router.push("/admin/dashboard")
        } else {
          setError("بيانات الدخول غير صحيحة لمسؤول النظام")
        }
      } else {
        // For doctors, any credentials work in demo
        router.push("/doctor/dashboard")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-primary hover:underline">
        <ArrowRight className="h-4 w-4" />
        <span>العودة للصفحة الرئيسية</span>
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold">منصة سندك الطبية</h1>
      </div>

      {/* Demo Notice - More Prominent */}
      <div className="w-full max-w-md mb-6 bg-amber-100 border border-amber-300 rounded-lg p-4">
        <div className="flex items-center gap-2 text-amber-800">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <div>
            <p className="font-semibold">نسخة تجريبية:</p>
            <p className="text-sm">
              هذه نسخة تجريبية مبسطة من المنصة. يمكن للأطباء استخدام أي بيانات للدخول، بينما يتطلب دخول مسؤول النظام
              بيانات محددة.
            </p>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
          <CardDescription>أدخل بيانات الدخول الخاصة بك للوصول إلى حسابك</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="user-type">نوع المستخدم</Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger id="user-type" className="w-full">
                <SelectValue placeholder="اختر نوع المستخدم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doctor">طبيب</SelectItem>
                <SelectItem value="admin">مسؤول النظام</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {userType === "doctor" && (
            <Alert className="bg-blue-50 border-blue-200 text-right">
              <AlertTriangle className="h-4 w-4 text-blue-500" />
              <AlertDescription className="text-blue-700 mr-2">
                <p className="font-semibold">بيانات تجريبية:</p>
                <p>يمكنك استخدام أي بريد إلكتروني وكلمة مرور للدخول في هذه النسخة التجريبية</p>
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">كلمة المرور</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <p>{error}</p>
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center">
          <div className="text-sm text-muted-foreground">
            ليس لديك حساب؟{" "}
            <Link href="/subscription/basic" className="text-primary hover:underline">
              اشترك الآن
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
