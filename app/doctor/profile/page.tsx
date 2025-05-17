import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DoctorHeader } from "@/components/doctor-header"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, FileText, Calendar, Edit, Save } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DoctorSidebar />
      <div className="flex-1">
        <DoctorHeader />
        <main className="container p-4 md:p-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">الملف الشخصي</h1>
              <p className="text-muted-foreground">عرض وتعديل معلوماتك الشخصية</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="rounded-xl flex items-center gap-2">
                <Save className="h-4 w-4" />
                <span>حفظ التغييرات</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="bg-primary text-white text-2xl">م أ</AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-md"
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">تغيير الصورة</span>
                    </Button>
                  </div>
                  <h2 className="text-xl font-bold">د. محمد أحمد</h2>
                  <p className="text-muted-foreground">طبيب أسنان</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-red-500">غير نشط</Badge>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-3 w-full text-right">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">doctor@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+966 50 123 4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">الرياض، المملكة العربية السعودية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">تاريخ الانضمام: 15 مايو 2023</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">المعلومات الشخصية</CardTitle>
                <CardDescription>قم بتعديل معلوماتك الشخصية</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="personal">معلومات شخصية</TabsTrigger>
                    <TabsTrigger value="professional">معلومات مهنية</TabsTrigger>
                    <TabsTrigger value="contact">معلومات الاتصال</TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">الاسم الأول</Label>
                        <Input id="firstName" defaultValue="محمد" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">الاسم الأخير</Label>
                        <Input id="lastName" defaultValue="أحمد" className="rounded-xl" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input id="email" type="email" defaultValue="doctor@example.com" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input id="phone" defaultValue="+966 50 123 4567" className="rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">تاريخ الميلاد</Label>
                      <Input id="birthDate" type="date" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">الجنسية</Label>
                      <Select defaultValue="saudi">
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="اختر الجنسية" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saudi">سعودي</SelectItem>
                          <SelectItem value="egyptian">مصري</SelectItem>
                          <SelectItem value="jordanian">أردني</SelectItem>
                          <SelectItem value="lebanese">لبناني</SelectItem>
                          <SelectItem value="other">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  <TabsContent value="professional" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="licenseNumber">رقم الترخيص المهني</Label>
                        <Input id="licenseNumber" placeholder="أدخل رقم الترخيص" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialization">التخصص</Label>
                        <Select>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="اختر التخصص" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">طب أسنان عام</SelectItem>
                            <SelectItem value="orthodontics">تقويم الأسنان</SelectItem>
                            <SelectItem value="periodontics">أمراض اللثة</SelectItem>
                            <SelectItem value="endodontics">علاج الجذور</SelectItem>
                            <SelectItem value="prosthodontics">تركيبات الأسنان</SelectItem>
                            <SelectItem value="pediatric">طب أسنان الأطفال</SelectItem>
                            <SelectItem value="oral_surgery">جراحة الفم والوجه والفكين</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">سنوات الخبرة</Label>
                      <Input id="experience" type="number" placeholder="أدخل عدد سنوات الخبرة" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinicName">اسم العيادة</Label>
                      <Input id="clinicName" placeholder="أدخل اسم العيادة" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">نبذة مختصرة</Label>
                      <Textarea
                        id="bio"
                        placeholder="اكتب نبذة مختصرة عن خبرتك المهنية"
                        className="min-h-32 rounded-xl"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="contact" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">العنوان</Label>
                      <Input id="address" placeholder="أدخل عنوانك" className="rounded-xl" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">المدينة</Label>
                        <Input id="city" defaultValue="الرياض" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="region">المنطقة</Label>
                        <Select defaultValue="riyadh">
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="اختر المنطقة" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="riyadh">الرياض</SelectItem>
                            <SelectItem value="makkah">مكة المكرمة</SelectItem>
                            <SelectItem value="madinah">المدينة المنورة</SelectItem>
                            <SelectItem value="eastern">المنطقة الشرقية</SelectItem>
                            <SelectItem value="asir">عسير</SelectItem>
                            <SelectItem value="qassim">القصيم</SelectItem>
                            <SelectItem value="tabuk">تبوك</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">الرمز البريدي</Label>
                        <Input id="postalCode" placeholder="أدخل الرمز البريدي" className="rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alternativeEmail">البريد الإلكتروني البديل</Label>
                      <Input
                        id="alternativeEmail"
                        type="email"
                        placeholder="أدخل بريد إلكتروني بديل"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alternativePhone">رقم الهاتف البديل</Label>
                      <Input id="alternativePhone" placeholder="أدخل رقم هاتف بديل" className="rounded-xl" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="rounded-xl">حفظ التغييرات</Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                الوثائق والمستندات
              </CardTitle>
              <CardDescription>إدارة الوثائق والمستندات الخاصة بك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-xl p-4 flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">شهادة الترخيص المهني</h3>
                  <p className="text-sm text-muted-foreground mb-3">لم يتم رفع الملف بعد</p>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    رفع الملف
                  </Button>
                </div>
                <div className="border rounded-xl p-4 flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">الهوية الوطنية</h3>
                  <p className="text-sm text-muted-foreground mb-3">لم يتم رفع الملف بعد</p>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    رفع الملف
                  </Button>
                </div>
                <div className="border rounded-xl p-4 flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">شهادة التخصص</h3>
                  <p className="text-sm text-muted-foreground mb-3">لم يتم رفع الملف بعد</p>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    رفع الملف
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
