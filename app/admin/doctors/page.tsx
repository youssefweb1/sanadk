"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Search, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    avatar: "/placeholder.svg?key=pa2pa",
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
    avatar: "/placeholder.svg?key=5zd98",
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
    avatar: "/placeholder.svg?key=1h8lc",
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
    avatar: "/placeholder.svg?key=s4rik",
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
    avatar: "/placeholder.svg?key=q0ktw",
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
    avatar: "/placeholder.svg?key=57vdw",
  },
]

export default function AdminDoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("الكل");
  const [specialtyFilter, setSpecialtyFilter] = useState("الكل");
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [showSuspendDialog, setShowSuspendDialog] = useState(false);

  // Filter doctors based on search term and filters
  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "الكل" || doctor.subscriptionStatus === statusFilter;
    const matchesSpecialty = specialtyFilter === "الكل" || doctor.specialty === specialtyFilter;
    
    return matchesSearch && matchesStatus && matchesSpecialty;
  });

  // Function to export doctors as PDF
  const exportAsPDF = () => {
    alert("تم تصدير قائمة الأطباء كملف PDF");
    // In a real implementation, this would generate and download a PDF
  };

  // Get unique status values for filter
  const statusOptions = ["الكل", ...new Set(doctorsData.map(doctor => doctor.subscriptionStatus))];
  const specialtyOptions = ["الكل", ...new Set(doctorsData.map(doctor => doctor.specialty))];

  // View doctor details
  const viewDoctorDetails = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowDetailsDialog(true);
  };

  // Suspend doctor
  const openSuspendDialog = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowSuspendDialog(true);
  };

  // Handle suspend confirmation
  const handleSuspend = () => {
    alert(`تم تعليق حساب الطبيب ${selectedDoctor.name}`);
    setShowSuspendDialog(false);
  };

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

          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="البحث عن طبيب..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="w-40">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="حالة الاشتراك" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map(status => (
                          <SelectItem key={status} value={status}>{status}</SelectItem>
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
                        {specialtyOptions.map(specialty => (
                          <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center p-4 gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                        <AvatarFallback>{doctor.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{doctor.name}</h3>
                          <Badge variant={
                            doctor.subscriptionStatus === "نشط" ? "success" : 
                            doctor.subscriptionStatus === "منتهي" ? "destructive" : "default"
                          }>
                            {doctor.subscriptionStatus}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">
                          <span>التخصص: {doctor.specialty}</span>
                          <span className="mx-2">•</span>
                          <span>البريد: {doctor.email}</span>
                          <span className="mx-2">•</span>
                          <span>الجوال: {doctor.phone}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          <span>تاريخ الانتهاء: {doctor.expiryDate}</span>
                          <span className="mx-2">•</span>
                          <span>عدد المطالبات: {doctor.claimsCount}</span>
                        </div>

\
