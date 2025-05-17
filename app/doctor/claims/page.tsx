"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DoctorHeader } from "@/components/doctor-header"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { FileText, Plus, Search, Download, Eye, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollToTop } from "@/components/scroll-to-top"

// Sample data for claims
const claimsData = [
  {
    id: "CLM-2023-001",
    title: "خطأ في تشخيص كسر في الساق",
    date: "2023-05-15",
    status: "قيد المراجعة",
    amount: 12000,
    type: "خطأ تشخيصي",
  },
  {
    id: "CLM-2023-002",
    title: "مضاعفات بعد عملية جراحية",
    date: "2023-06-22",
    status: "مقبولة",
    amount: 8500,
    type: "مضاعفات جراحية",
  },
  {
    id: "CLM-2023-003",
    title: "خطأ في وصف الدواء",
    date: "2023-07-10",
    status: "مرفوضة",
    amount: 5000,
    type: "خطأ دوائي",
  },
  {
    id: "CLM-2023-004",
    title: "إهمال في متابعة الحالة",
    date: "2023-08-05",
    status: "قيد المراجعة",
    amount: 15000,
    type: "إهمال طبي",
  },
  {
    id: "CLM-2023-005",
    title: "خطأ في إجراء فحص مخبري",
    date: "2023-09-18",
    status: "مقبولة",
    amount: 7200,
    type: "خطأ مخبري",
  },
]

export default function ClaimsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("الكل")
  const [typeFilter, setTypeFilter] = useState("الكل")

  // Filter claims based on search term and filters
  const filteredClaims = claimsData.filter((claim) => {
    const matchesSearch =
      claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.title.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "الكل" || claim.status === statusFilter
    const matchesType = typeFilter === "الكل" || claim.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  // Function to export claims as PDF
  const exportAsPDF = () => {
    alert("تم تصدير المطالبات كملف PDF")
    // In a real implementation, this would generate and download a PDF
  }

  // Get unique status values for filter
  const statusOptions = ["الكل", ...new Set(claimsData.map((claim) => claim.status))]
  const typeOptions = ["الكل", ...new Set(claimsData.map((claim) => claim.type))]

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <DoctorSidebar />
      <div className="flex-1">
        <DoctorHeader />
        <main className="p-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              تنبيه هام
            </h3>
            <p className="text-amber-700">
              يرجى العلم أنه يمكنك تقديم مطالبة واحدة فقط خلال فترة الاشتراك السنوي بحد أقصى 20,000 ريال. في حال تم قبول
              مطالبتك بمبلغ أقل من الحد الأقصى، لن تتمكن من تقديم مطالبات إضافية حتى تجديد الاشتراك.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">المطالبات القانونية</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">إدارة ومتابعة جميع المطالبات القانونية الخاصة بك</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Button onClick={exportAsPDF} variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                تصدير كـ PDF
              </Button>
              <Button asChild className="flex items-center gap-2">
                <Link href="/doctor/claims/new">
                  <Plus className="h-4 w-4" />
                  مطالبة جديدة
                </Link>
              </Button>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="البحث عن مطالبة..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="w-40">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="الحالة" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-40">
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="النوع" />
                      </SelectTrigger>
                      <SelectContent>
                        {typeOptions.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {filteredClaims.length > 0 ? (
              filteredClaims.map((claim) => (
                <Card key={claim.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center p-4 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-lg">{claim.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge
                            variant={
                              claim.status === "مقبولة"
                                ? "success"
                                : claim.status === "مرفوضة"
                                  ? "destructive"
                                  : "default"
                            }
                          >
                            {claim.status}
                          </Badge>
                          <Badge variant="outline">{claim.type}</Badge>
                          <Badge variant="outline" className="bg-gray-100">
                            {claim.id}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">
                          <span>تاريخ التقديم: {claim.date}</span>
                          <span className="mx-2">•</span>
                          <span>المبلغ: {claim.amount} ريال</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3 md:mt-0">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          عرض التفاصيل
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          تحميل
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="p-8 text-center">
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">لا توجد مطالبات تطابق معايير البحث</p>
                  <Button asChild>
                    <Link href="/doctor/claims/new">
                      <Plus className="h-4 w-4 mr-2" />
                      إنشاء مطالبة جديدة
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
      <ScrollToTop />
    </div>
  )
}
