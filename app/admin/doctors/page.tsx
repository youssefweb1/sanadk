"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Search, Download, Eye, Ban, CheckCircle, AlertTriangle, MoreHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for doctors
const doctorsData = [
  {
    id: "DOC-2023-001",
    name: "د. أحمد محمد",
    email: "ahmed.m@example.com",
    phone: "0501234567",
    specialty: "عظام",
    subscriptionStatus: "نشط",
    subscriptionDate: "2023-01-15",
    expiryDate: "2024-01-15",
    claimsCount: 2,
    avatar: "/caring-doctor.png",
    licenseNumber: "LIC-12345",
    address: "الرياض، حي الملقا",
    lastLogin: "2023-05-10 14:30",
    totalPaid: 1500,
    notes: "طبيب متعاون ومنتظم في تقديم المطالبات",
  },
  {
    id: "DOC-2023-002",
    name: "د. سارة خالد",
    email: "sara.k@example.com",
    phone: "0507654321",
    specialty: "جراحة عامة",
    subscriptionStatus: "نشط",
    subscriptionDate: "2023-02-20",
    expiryDate: "2024-02-20",
    claimsCount: 1,
    avatar: "/female-doctor.png",
    licenseNumber: "LIC-23456",
    address: "جدة، حي الروضة",
    lastLogin: "2023-05-12 09:15",
    totalPaid: 1500,
    notes: "",
  },
  {
    id: "DOC-2023-003",
    name: "د. محمد علي",
    email: "mohamed.a@example.com",
    phone: "0509876543",
    specialty: "باطنية",
    subscriptionStatus: "منتهي",
    subscriptionDate: "2022-11-10",
    expiryDate: "2023-11-10",
    claimsCount: 3,
    avatar: "/caring-doctor.png",
    licenseNumber: "LIC-34567",
    address: "الدمام، حي النزهة",
    lastLogin: "2023-04-28 16:45",
    totalPaid: 1500,
    notes: "يحتاج إلى تجديد الاشتراك",
  },
  {
    id: "DOC-2023-004",
    name: "د. فاطمة أحمد",
    email: "fatima.a@example.com",
    phone: "0503456789",
    specialty: "أمراض نساء وتوليد",
    subscriptionStatus: "نشط",
    subscriptionDate: "2023-03-05",
    expiryDate: "2024-03-05",
    claimsCount: 1,
    avatar: "/female-doctor.png",
    licenseNumber: "LIC-45678",
    address: "الرياض، حي العليا",
    lastLogin: "2023-05-11 11:20",
    totalPaid: 1500,
    notes: "",
  },
  {
    id: "DOC-2023-005",
    name: "د. خالد عبدالله",
    email: "khaled.a@example.com",
    phone: "0508765432",
    specialty: "أسنان",
    subscriptionStatus: "نشط",
    subscriptionDate: "2023-04-12",
    expiryDate: "2024-04-12",
    claimsCount: 0,
    avatar: "/caring-doctor.png",
    licenseNumber: "LIC-56789",
    address: "مكة، حي العزيزية",
    lastLogin: "2023-05-09 13:10",
    totalPaid: 1500,
    notes: "طبيب جديد، لم يقدم أي مطالبات بعد",
  },
  {
    id: "DOC-2023-006",
    name: "د. نورة سعد",
    email: "noura.s@example.com",
    phone: "0502345678",
    specialty: "جلدية",
    subscriptionStatus: "قيد المعالجة",
    subscriptionDate: "2023-05-18",
    expiryDate: "2024-05-18",
    claimsCount: 0,
    avatar: "/female-doctor.png",
    licenseNumber: "LIC-67890",
    address: "الرياض، حي النخيل",
    lastLogin: "-",
    totalPaid: 0,
    notes: "في انتظار تأكيد الدفع",
  },
  {
    id: "DOC-2023-007",
    name: "د. عبدالرحمن محمد",
    email: "abdulrahman.m@example.com",
    phone: "0501122334",
    specialty: "عيون",
    subscriptionStatus: "نشط",
    subscriptionDate: "2023-01-25",
    expiryDate: "2024-01-25",
    claimsCount: 2,
    avatar: "/caring-doctor.png",
    licenseNumber: "LIC-78901",
    address: "جدة، حي الصفا",
    lastLogin: "2023-05-08 10:30",
    totalPaid: 1500,
    notes: "",
  },
  {
    id: "DOC-2023-008",
    name: "د. لينا عبدالعزيز",
    email: "lina.a@example.com",
    phone: "0505566778",
    specialty: "أطفال",
    subscriptionStatus: "نشط",
    subscriptionDate: "2023-02-10",
    expiryDate: "2024-02-10",
    claimsCount: 1,
    avatar: "/female-doctor.png",
    licenseNumber: "LIC-89012",
    address: "الرياض، حي الياسمين",
    lastLogin: "2023-05-12 15:45",
    totalPaid: 1500,
    notes: "",
  },
]

export default function AdminDoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("الكل")
  const [specialtyFilter, setSpecialtyFilter] = useState("الكل")
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [showSuspendDialog, setShowSuspendDialog] = useState(false)
  const [showActivateDialog, setShowActivateDialog] = useState(false)
  const [currentTab, setCurrentTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter doctors based on search term and filters
  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.phone.includes(searchTerm)

    const matchesStatus = statusFilter === "الكل" || doctor.subscriptionStatus === statusFilter
    const matchesSpecialty = specialtyFilter === "الكل" || doctor.specialty === specialtyFilter

    // Filter by tab
    if (currentTab === "active" && doctor.subscriptionStatus !== "نشط") return false
    if (currentTab === "pending" && doctor.subscriptionStatus !== "قيد المعالجة") return false
    if (currentTab === "expired" && doctor.subscriptionStatus !== "منتهي") return false

    return matchesSearch && matchesStatus && matchesSpecialty
  })

  // Pagination
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage)
  const paginatedDoctors = filteredDoctors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Function to export doctors as PDF
  const exportAsPDF = () => {
    alert("تم تصدير قائمة الأطباء كملف PDF")
    // In a real implementation, this would generate and download a PDF
  }

  // Get unique status values for filter
  const statusOptions = ["الكل", ...new Set(doctorsData.map((doctor) => doctor.subscriptionStatus))]
  const specialtyOptions = ["الكل", ...new Set(doctorsData.map((doctor) => doctor.specialty))]

  // View doctor details
  const viewDoctorDetails = (doctor: any) => {
    setSelectedDoctor(doctor)
    setShowDetailsDialog(true)
  }

  // Suspend doctor
  const openSuspendDialog = (doctor: any) => {
    setSelectedDoctor(doctor)
    setShowSuspendDialog(true)
  }

  // Activate doctor
  const openActivateDialog = (doctor: any) => {
    setSelectedDoctor(doctor)
    setShowActivateDialog(true)
  }

  // Handle suspend confirmation
  const handleSuspend = () => {
    alert(`تم تعليق حساب الطبيب ${selectedDoctor.name}`)
    setShowSuspendDialog(false)
  }

  // Handle activate confirmation
  const handleActivate = () => {
    alert(`تم تفعيل حساب الطبيب ${selectedDoctor.name}`)
    setShowActivateDialog(false)
  }

  // Get badge variant based on status
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "نشط":
        return "default"
      case "منتهي":
        return "destructive"
      case "قيد المعالجة":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">إدارة الأطباء</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">عرض وإدارة حسابات الأطباء المشتركين في المنصة</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Button onClick={exportAsPDF} variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                تصدير كـ PDF
              </Button>
            </div>
          </div>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-6">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">جميع الأطباء ({doctorsData.length})</TabsTrigger>
              <TabsTrigger value="active">
                نشط ({doctorsData.filter((d) => d.subscriptionStatus === "نشط").length})
              </TabsTrigger>
              <TabsTrigger value="pending">
                قيد المعالجة ({doctorsData.filter((d) => d.subscriptionStatus === "قيد المعالجة").length})
              </TabsTrigger>
              <TabsTrigger value="expired">
                منتهي ({doctorsData.filter((d) => d.subscriptionStatus === "منتهي").length})
              </TabsTrigger>
            </TabsList>

            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="البحث عن طبيب..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10 w-full"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-40">
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="حالة الاشتراك" />
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
                      <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="التخصص" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialtyOptions.map((specialty) => (
                            <SelectItem key={specialty} value={specialty}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">الطبيب</TableHead>
                        <TableHead>التخصص</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>تاريخ الانتهاء</TableHead>
                        <TableHead>المطالبات</TableHead>
                        <TableHead className="text-left">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedDoctors.length > 0 ? (
                        paginatedDoctors.map((doctor) => (
                          <TableRow key={doctor.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                                  <AvatarFallback>{doctor.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{doctor.name}</div>
                                  <div className="text-sm text-muted-foreground">{doctor.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{doctor.specialty}</TableCell>
                            <TableCell>
                              <Badge variant={getBadgeVariant(doctor.subscriptionStatus)}>
                                {doctor.subscriptionStatus}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.expiryDate}</span>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.claimsCount}</span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" onClick={() => viewDoctorDetails(doctor)}>
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">عرض التفاصيل</span>
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">المزيد من الخيارات</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>خيارات</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => viewDoctorDetails(doctor)}>
                                      عرض التفاصيل
                                    </DropdownMenuItem>
                                    {doctor.subscriptionStatus === "منتهي" && (
                                      <DropdownMenuItem onClick={() => openActivateDialog(doctor)}>
                                        تفعيل الحساب
                                      </DropdownMenuItem>
                                    )}
                                    {doctor.subscriptionStatus === "نشط" && (
                                      <DropdownMenuItem onClick={() => openSuspendDialog(doctor)}>
                                        تعليق الحساب
                                      </DropdownMenuItem>
                                    )}
                                    <DropdownMenuItem>إرسال تذكير</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-500">حذف الحساب</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-10">
                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                              <Search className="h-10 w-10 mb-2" />
                              <p className="text-lg font-medium">لا توجد نتائج</p>
                              <p className="text-sm">لم يتم العثور على أطباء مطابقين لمعايير البحث الخاصة بك</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {filteredDoctors.length > itemsPerPage && (
                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink isActive={page === currentPage} onClick={() => setCurrentPage(page)}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </TabsContent>

            <TabsContent value="active" className="mt-0">
              {/* Same table structure as "all" tab but with filtered data */}
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">الطبيب</TableHead>
                        <TableHead>التخصص</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>تاريخ الانتهاء</TableHead>
                        <TableHead>المطالبات</TableHead>
                        <TableHead className="text-left">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedDoctors.length > 0 ? (
                        paginatedDoctors.map((doctor) => (
                          <TableRow key={doctor.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                                  <AvatarFallback>{doctor.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{doctor.name}</div>
                                  <div className="text-sm text-muted-foreground">{doctor.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{doctor.specialty}</TableCell>
                            <TableCell>
                              <Badge variant="default">نشط</Badge>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.expiryDate}</span>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.claimsCount}</span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" onClick={() => viewDoctorDetails(doctor)}>
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">عرض التفاصيل</span>
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">المزيد من الخيارات</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>خيارات</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => viewDoctorDetails(doctor)}>
                                      عرض التفاصيل
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => openSuspendDialog(doctor)}>
                                      تعليق الحساب
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>إرسال تذكير</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-500">حذف الحساب</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-10">
                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                              <CheckCircle className="h-10 w-10 mb-2" />
                              <p className="text-lg font-medium">لا يوجد أطباء نشطين</p>
                              <p className="text-sm">لم يتم العثور على أطباء نشطين مطابقين لمعايير البحث الخاصة بك</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending" className="mt-0">
              {/* Same table structure as "all" tab but with filtered data */}
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">الطبيب</TableHead>
                        <TableHead>التخصص</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>تاريخ التقديم</TableHead>
                        <TableHead>المطالبات</TableHead>
                        <TableHead className="text-left">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedDoctors.length > 0 ? (
                        paginatedDoctors.map((doctor) => (
                          <TableRow key={doctor.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                                  <AvatarFallback>{doctor.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{doctor.name}</div>
                                  <div className="text-sm text-muted-foreground">{doctor.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{doctor.specialty}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">قيد المعالجة</Badge>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.subscriptionDate}</span>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.claimsCount}</span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" onClick={() => viewDoctorDetails(doctor)}>
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">عرض التفاصيل</span>
                                </Button>
                                <Button variant="outline" size="sm">
                                  تأكيد الاشتراك
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-10">
                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                              <AlertTriangle className="h-10 w-10 mb-2" />
                              <p className="text-lg font-medium">لا توجد طلبات قيد المعالجة</p>
                              <p className="text-sm">
                                لا يوجد أطباء بحالة قيد المعالجة مطابقين لمعايير البحث الخاصة بك
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="expired" className="mt-0">
              {/* Same table structure as "all" tab but with filtered data */}
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">الطبيب</TableHead>
                        <TableHead>التخصص</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>تاريخ الانتهاء</TableHead>
                        <TableHead>المطالبات</TableHead>
                        <TableHead className="text-left">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedDoctors.length > 0 ? (
                        paginatedDoctors.map((doctor) => (
                          <TableRow key={doctor.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                                  <AvatarFallback>{doctor.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{doctor.name}</div>
                                  <div className="text-sm text-muted-foreground">{doctor.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{doctor.specialty}</TableCell>
                            <TableCell>
                              <Badge variant="destructive">منتهي</Badge>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.expiryDate}</span>
                            </TableCell>
                            <TableCell>
                              <span dir="ltr">{doctor.claimsCount}</span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" onClick={() => viewDoctorDetails(doctor)}>
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">عرض التفاصيل</span>
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => openActivateDialog(doctor)}>
                                  تجديد الاشتراك
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-10">
                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                              <Ban className="h-10 w-10 mb-2" />
                              <p className="text-lg font-medium">لا توجد اشتراكات منتهية</p>
                              <p className="text-sm">لا يوجد أطباء بحالة منتهية مطابقين لمعايير البحث الخاصة بك</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      {/* Doctor Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>تفاصيل الطبيب</DialogTitle>
            <DialogDescription>عرض المعلومات الكاملة للطبيب</DialogDescription>
          </DialogHeader>

          {selectedDoctor && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={selectedDoctor.avatar || "/placeholder.svg"} alt={selectedDoctor.name} />
                  <AvatarFallback className="text-xl">{selectedDoctor.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-center">{selectedDoctor.name}</h3>
                <p className="text-muted-foreground text-center mb-2">{selectedDoctor.specialty}</p>
                <Badge variant={getBadgeVariant(selectedDoctor.subscriptionStatus)} className="mb-4">
                  {selectedDoctor.subscriptionStatus}
                </Badge>

                <div className="w-full space-y-2 mt-4">
                  <Button
                    variant={selectedDoctor.subscriptionStatus === "نشط" ? "destructive" : "default"}
                    className="w-full"
                    onClick={() => {
                      setShowDetailsDialog(false)
                      selectedDoctor.subscriptionStatus === "نشط"
                        ? openSuspendDialog(selectedDoctor)
                        : openActivateDialog(selectedDoctor)
                    }}
                  >
                    {selectedDoctor.subscriptionStatus === "نشط" ? "تعليق الحساب" : "تفعيل الحساب"}
                  </Button>
                  <Button variant="outline" className="w-full">
                    إرسال بريد إلكتروني
                  </Button>
                </div>
              </div>

              <div className="md:col-span-2">
                <Tabs defaultValue="info">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="info">المعلومات الشخصية</TabsTrigger>
                    <TabsTrigger value="subscription">الاشتراك</TabsTrigger>
                    <TabsTrigger value="claims">المطالبات</TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
                        <p className="font-medium">{selectedDoctor.email}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">رقم الهاتف</p>
                        <p className="font-medium" dir="ltr">
                          {selectedDoctor.phone}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">رقم الترخيص</p>
                        <p className="font-medium" dir="ltr">
                          {selectedDoctor.licenseNumber}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">العنوان</p>
                        <p className="font-medium">{selectedDoctor.address}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">آخر تسجيل دخول</p>
                        <p className="font-medium" dir="ltr">
                          {selectedDoctor.lastLogin}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">ملاحظات</p>
                        <p className="font-medium">{selectedDoctor.notes || "لا توجد ملاحظات"}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="subscription" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">حالة الاشتراك</p>
                        <div>
                          <Badge variant={getBadgeVariant(selectedDoctor.subscriptionStatus)}>
                            {selectedDoctor.subscriptionStatus}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">تاريخ الاشتراك</p>
                        <p className="font-medium" dir="ltr">
                          {selectedDoctor.subscriptionDate}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">تاريخ الانتهاء</p>
                        <p className="font-medium" dir="ltr">
                          {selectedDoctor.expiryDate}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">المبلغ المدفوع</p>
                        <p className="font-medium" dir="ltr">
                          {selectedDoctor.totalPaid} ريال
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium mb-2">سجل المدفوعات</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>التاريخ</TableHead>
                            <TableHead>المبلغ</TableHead>
                            <TableHead>طريقة الدفع</TableHead>
                            <TableHead>الحالة</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell dir="ltr">{selectedDoctor.subscriptionDate}</TableCell>
                            <TableCell dir="ltr">1,500 ريال</TableCell>
                            <TableCell>بطاقة ائتمان</TableCell>
                            <TableCell>
                              <Badge variant="default">مكتمل</Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  <TabsContent value="claims" className="space-y-4">
                    {selectedDoctor.claimsCount > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>رقم المطالبة</TableHead>
                            <TableHead>التاريخ</TableHead>
                            <TableHead>المبلغ</TableHead>
                            <TableHead>الحالة</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell dir="ltr">CLM-2023-001</TableCell>
                            <TableCell dir="ltr">2023-04-15</TableCell>
                            <TableCell dir="ltr">5,000 ريال</TableCell>
                            <TableCell>
                              <Badge variant="default">مكتملة</Badge>
                            </TableCell>
                          </TableRow>
                          {selectedDoctor.claimsCount > 1 && (
                            <TableRow>
                              <TableCell dir="ltr">CLM-2023-002</TableCell>
                              <TableCell dir="ltr">2023-05-20</TableCell>
                              <TableCell dir="ltr">3,500 ريال</TableCell>
                              <TableCell>
                                <Badge variant="default">مكتملة</Badge>
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>لم يقم هذا الطبيب بتقديم أي مطالبات بعد.</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailsDialog(false)}>
              إغلاق
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Suspend Doctor Dialog */}
      <Dialog open={showSuspendDialog} onOpenChange={setShowSuspendDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعليق حساب الطبيب</DialogTitle>
            <DialogDescription>
              هل أنت متأكد من رغبتك في تعليق حساب الطبيب؟ لن يتمكن من تسجيل الدخول أو تقديم مطالبات جديدة.
            </DialogDescription>
          </DialogHeader>

          {selectedDoctor && (
            <div className="flex items-center gap-4 py-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={selectedDoctor.avatar || "/placeholder.svg"} alt={selectedDoctor.name} />
                <AvatarFallback>{selectedDoctor.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{selectedDoctor.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedDoctor.email}</p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSuspendDialog(false)}>
              إلغاء
            </Button>
            <Button variant="destructive" onClick={handleSuspend}>
              تعليق الحساب
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Activate Doctor Dialog */}
      <Dialog open={showActivateDialog} onOpenChange={setShowActivateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تفعيل حساب الطبيب</DialogTitle>
            <DialogDescription>
              هل أنت متأكد من رغبتك في تفعيل حساب الطبيب؟ سيتمكن من تسجيل الدخول وتقديم مطالبات جديدة.
            </DialogDescription>
          </DialogHeader>

          {selectedDoctor && (
            <div className="flex items-center gap-4 py-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={selectedDoctor.avatar || "/placeholder.svg"} alt={selectedDoctor.name} />
                <AvatarFallback>{selectedDoctor.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{selectedDoctor.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedDoctor.email}</p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowActivateDialog(false)}>
              إلغاء
            </Button>
            <Button onClick={handleActivate}>تفعيل الحساب</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
