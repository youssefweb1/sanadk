import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center py-12 px-4">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-4">الصفحة غير موجودة</h2>
            <p className="text-muted-foreground mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
            <Link href="/">
              <Button className="rounded-xl">العودة إلى الصفحة الرئيسية</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
