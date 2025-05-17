"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { FileText, Search, Download, Eye, CheckCircle, XCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Textarea } from "@/components/ui/textarea"

// Sample data for claims
const claimsData = [
  {
    id: "CLM-2023-001",
    title: "خطأ في تشخيص كسر في الساق",
    date: "2023-05-15",
    status: "قيد المراجعة",
    amount: 12000,
    type: "خطأ تشخيصي",
    doctor: "د. أحمد محمد",
    specialty: "عظام",
    description: "تم تشخيص الحالة بشكل خاطئ مما أدى إلى تأخر العلاج وتفاقم الإصابة.",
  },
  {
    id: "CLM-2023-002",
    title: "مضاعفات بعد عملية جراحية",
    date: "2023-06-22",
    status: "مقبولة",
    amount: 8500,
    type: "مضاعفات جراحية",
    doctor: "د. سارة خالد",
    specialty: "جراحة عامة",
    description: "حدثت مضاعفات غير متوقعة بعد العملية الجراحية أدت إلى تمديد فترة الاستشفاء.",
  },
  {
    id: "CLM-2023-003",
    title: "خطأ في وصف الدواء",
    date: "2023-07-10",
    status: "مرفوضة",
    amount: 5000,
    type: "خطأ دوائي",
    doctor: "د. محمد علي",
    specialty: "باطنية",
    description: "تم وصف دواء غير مناسب للمريض مما تسبب في آثار جانبية.",
  },
  {
    id: "CLM-2023-004",
    title: "إهمال في متابعة الحالة",
    date: "2023-08-05",
    status: "قيد المراجعة",
    amount: 15000,
    type: "إهمال طبي",
    doctor: "د. فاطمة أحمد",
    specialty: "أمراض نساء وتوليد",
    description: "عدم متابعة الحالة بشكل دوري مما أدى إلى تدهور الحالة الصحية للمريض.",
  },
  {
    id: "CLM-2023-005",
    title: "خطأ في إجراء فحص مخبري",
    date: "2023-09-18",
    status: "مقبولة",
    amount: 7200,
    type: "خطأ مخبري",
    doctor: "د. خالد عبدالله",
    specialty: "مختبرات",
    description: "خطأ في إجراء التحاليل المخبرية أدى إلى تشخيص خاطئ للحالة.",
  },
]

export default function AdminClaimsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("الكل")
  const [typeFilter, setTypeFilter] = useState("الكل")
  const [selectedClaim, setSelectedClaim] = useState<any>(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [showApproveDialog, setShowApproveDialog] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)
  const [rejectReason, setRejectReason] = useState("")

  // Filter claims based on search term and filters
  const filteredClaims = claimsData.filter((claim) => {
    const matchesSearch =
      claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.doctor.toLowerCase().includes(searchTerm.toLowerCase())

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

  // View claim details
  const viewClaimDetails = (claim: any) => {
    setSelectedClaim(claim)
    setShowDetailsDialog(true)
  }

  // Approve claim
  const openApproveDialog = (claim: any) => {
    setSelectedClaim(claim)
    setShowApproveDialog(true)
  }

  // Reject claim
  const openRejectDialog = (claim: any) => {
    setSelectedClaim(claim)
    setShowRejectDialog(true)
  }

  // Handle approve confirmation
  const handleApprove = () => {
    alert(`تم قبول المطالبة رقم ${selectedClaim.id}`)
    setShowApproveDialog(false)
  }

  // Handle reject confirmation
  const handleReject = () => {
    if (!rejectReason.trim()) {
      alert("يرجى إدخال سبب الرفض")
      return
    }
    alert(`تم رفض المطالبة رقم ${selectedClaim.id}`)
    setShowRejectDialog(false)
    setRejectReason("")
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">إدارة المطالبات</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">مراجعة وإدارة المطالبات المقدمة من الأطباء</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Button onClick={exportAsPDF} variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                تصدير كـ PDF
              </Button>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="البحث عن مطالبة أو طبيب..."
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
                          <span>الطبيب: {claim.doctor}</span>
                          <span className="mx-2">•</span>
                          <span>التخصص: {claim.specialty}</span>
                          <span className="mx-2">•</span>
                          <span>تاريخ التقديم: {claim.date}</span>
                          <span className="mx-2">•</span>
                          <span>المبلغ: {claim.amount} ريال</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3 md:mt-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => viewClaimDetails(claim)}
                        >
                          <Eye className="h-4 w-4" />
                          عرض التفاصيل
                        </Button>
                        {claim.status === "قيد المراجعة" && (
                          <>
                            <Button
                              variant="default"
                              size="sm"
                              className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                              onClick={() => openApproveDialog(claim)}
                            >
                              <CheckCircle className="h-4 w-4" />
                              قبول
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              className="flex items-center gap-1"
                              onClick={() => openRejectDialog(claim)}
                            >
                              <XCircle className="h-4 w-4" />
                              رفض
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="p-8 text-center">
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">لا توجد مطالبات تطابق معايير البحث</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Claim Details Dialog */}
          <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>تفاصيل المطالبة</DialogTitle>
                <DialogDescription>معلومات كاملة عن المطالبة رقم {selectedClaim?.id}</DialogDescription>
              </DialogHeader>
              {selectedClaim && (
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">رقم المطالبة</h4>
                      <p>{selectedClaim.id}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">تاريخ التقديم</h4>
                      <p>{selectedClaim.date}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">الطبيب</h4>
                      <p>{selectedClaim.doctor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">التخصص</h4>
                      <p>{selectedClaim.specialty}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">نوع المطالبة</h4>
                      <p>{selectedClaim.type}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">المبلغ المطلوب</h4>
                      <p>{selectedClaim.amount} ريال</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">الحالة</h4>
                      <Badge
                        variant={
                          selectedClaim.status === "مقبولة"
                            ? "success"
                            : selectedClaim.status === "مرفوضة"
                              ? "destructive"
                              : "default"
                        }
                      >
                        {selectedClaim.status}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">وصف المطالبة</h4>
                    <p className="mt-1">{selectedClaim.description}</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">المستندات المرفقة</h4>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        تقرير طبي
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        صور أشعة
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        تقرير الخبير
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowDetailsDialog(false)}>
                  إغلاق
                </Button>
                {selectedClaim?.status === "قيد المراجعة" && (
                  <>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        setShowDetailsDialog(false)
                        openRejectDialog(selectedClaim)
                      }}
                    >
                      رفض المطالبة
                    </Button>
                    <Button
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        setShowDetailsDialog(false)
                        openApproveDialog(selectedClaim)
                      }}
                    >
                      قبول المطالبة
                    </Button>
                  </>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Approve Claim Dialog */}
          <Dialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>تأكيد قبول المطالبة</DialogTitle>
                <DialogDescription>هل أنت متأكد من قبول المطالبة رقم {selectedClaim?.id}؟</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p>سيتم إرسال إشعار للطبيب بقبول المطالبة وبدء إجراءات التعويض.</p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowApproveDialog(false)}>
                  إلغاء
                </Button>
                <Button className="bg-green-600 hover:bg-green-700" onClick={handleApprove}>
                  تأكيد القبول
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Reject Claim Dialog */}
          <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>تأكيد رفض المطالبة</DialogTitle>
                <DialogDescription>هل أنت متأكد من رفض المطالبة رقم {selectedClaim?.id}؟</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p>يرجى تحديد سبب الرفض:</p>
                <Textarea
                  placeholder="أدخل سبب رفض المطالبة هنا..."
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
                  إلغاء
                </Button>
                <Button variant="destructive" onClick={handleReject}>
                  تأكيد الرفض
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
      <ScrollToTop />
    </div>
  )
}
