import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Clock,
  CreditCard,
  FileText,
  Users,
  Building,
  Award,
  Stethoscope,
  ChevronRight,
  Star,
  BadgeCheck,
} from "lucide-react"
import Link from "next/link"
import { PricingPlans } from "@/components/pricing-plans"
import { Features } from "@/components/features"
import { SuggestionForm } from "@/components/suggestion-form"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Demo Notice - More Prominent but shorter on mobile */}
        <div className="w-full bg-amber-100 border-b-2 border-amber-300 py-4">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-center gap-3 text-amber-800 text-center">
              <AlertTriangle className="h-6 w-6 text-amber-600 animate-pulse" />
              <div className="text-center">
                <h3 className="font-bold text-lg text-amber-800">نسخة تجريبية</h3>
                <p className="font-medium text-amber-700 md:block hidden">
                  هذه نسخة تجريبية مبسطة من المنصة مخصصة فقط لعرضها على الأطباء وأخذ اقتراحاتهم وملاحظاتهم لتطوير المنصة
                  بشكل أفضل.
                </p>
                {/* Shorter text for mobile */}
                <p className="font-medium text-amber-700 block md:hidden">نسخة للعرض والتقييم فقط</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Hero Section with improved mobile padding */}
        <section className="hero-gradient py-12 pb-12 md:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
          </div>

          <div className="container pb-12 md:pb-0 px-4 md:px-6 relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-right">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mx-auto lg:mx-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    متاح لجميع الأطباء في المملكة
                  </div>

                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    منصة <span className="text-white font-extrabold">سندك</span> الطبية
                    <br />
                    للدعم القانوني المتكامل
                  </h1>

                  <p className="max-w-[600px] text-white/90 md:text-xl mx-auto lg:mx-0">
                    حماية قانونية شاملة لجميع الأطباء في المملكة العربية السعودية بتكلفة سنوية مناسبة وتغطية مالية تصل
                    إلى <span dir="ltr">20,000</span> ريال
                  </p>

                  {/* Added more details */}
                  <div className="grid grid-cols-2 gap-4 mt-6 max-w-[600px] mx-auto lg:mx-0">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <h3 className="font-bold text-white">تغطية مالية</h3>
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">
                        تغطية تصل إلى <span dir="ltr">20,000</span> ريال سنوياً
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <h3 className="font-bold text-white">معالجة سريعة</h3>
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">معالجة المطالبات في أقل من ساعة</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <h3 className="font-bold text-white">اشتراك ميسر</h3>
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">
                        <span dir="ltr">1,500</span> ريال فقط سنوياً
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <h3 className="font-bold text-white">لجميع التخصصات</h3>
                        <Stethoscope className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">متاح لجميع الأطباء بمختلف تخصصاتهم</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  <Link href="/subscription/basic">
                    <Button size="lg" className="rounded-full px-6 py-6 text-lg">
                      اشترك الآن
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline" className="rounded-full bg-white/10 px-6 py-6 text-lg">
                      تعرف على المميزات
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-2 bg-primary rounded-full">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">الحماية القانونية</h3>
                        <p className="text-white/70 text-sm">تغطية شاملة لجميع الأطباء</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/70">قيمة الاشتراك السنوي</span>
                          <span className="font-bold" dir="ltr">
                            1,500 ريال
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">الحد الأقصى للتغطية</span>
                          <span className="font-bold" dir="ltr">
                            20,000 ريال
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>مطالبة واحدة سنوياً</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>معالجة سريعة للمطالبات</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>دعم على مدار الساعة</span>
                        </div>
                      </div>
                      <Link href="/subscription/basic" className="block">
                        <Button className="w-full rounded-xl group">
                          اشترك الآن
                          <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">لماذا تختار منصة سندك؟</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                توفر منصة سندك العديد من المزايا التي تجعلها الخيار الأمثل للأطباء الباحثين عن الحماية القانونية
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">حماية قانونية شاملة</h3>
                <p className="text-muted-foreground">
                  تغطية قانونية متكاملة تحميك من المخاطر المهنية وتوفر لك الدعم القانوني اللازم
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">تغطية مالية سخية</h3>
                <p className="text-muted-foreground">
                  تغطية مالية تصل إلى <span dir="ltr">20,000</span> ريال سعودي للمطالبة الواحدة سنوياً
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">سرعة معالجة المطالبات</h3>
                <p className="text-muted-foreground">
                  معالجة المطالبات في أقل من ساعة بعد التحقق من المستندات، ويتم صرف المبالغ فوراً
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">لجميع التخصصات الطبية</h3>
                <p className="text-muted-foreground">
                  خدماتنا متاحة لجميع الأطباء بمختلف تخصصاتهم في جميع أنحاء المملكة
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">إجراءات بسيطة</h3>
                <p className="text-muted-foreground">
                  عملية تسجيل وتقديم المطالبات سهلة وبسيطة من خلال منصة إلكترونية متطورة
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">خبرة واسعة</h3>
                <p className="text-muted-foreground">
                  فريق متخصص من الخبراء في المجال الطبي والقانوني لتقديم أفضل خدمة ممكنة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section with Enhanced Design */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">سندك بالأرقام</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                إحصائيات تعكس ثقة الأطباء في منصة سندك وحجم الخدمات التي نقدمها
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2" dir="ltr">
                  1,200+
                </h3>
                <p className="text-muted-foreground">طبيب مشترك</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2" dir="ltr">
                  850+
                </h3>
                <p className="text-muted-foreground">مطالبة تمت معالجتها</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2" dir="ltr">
                  15M+
                </h3>
                <p className="text-muted-foreground">ريال تم صرفها</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2" dir="ltr">
                  98%
                </h3>
                <p className="text-muted-foreground">نسبة رضا العملاء</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section without Images */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">كيف تعمل منصة سندك؟</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                عملية بسيطة وسريعة للحصول على الدعم القانوني الذي تحتاجه كطبيب
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-muted">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                      1
                    </span>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">سجل في المنصة</h3>
                  <p className="text-muted-foreground">قم بإنشاء حساب وملء بياناتك الشخصية والمهنية بكل سهولة</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-muted">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                      2
                    </span>
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ادفع الاشتراك</h3>
                  <p className="text-muted-foreground">
                    سدد رسوم الاشتراك السنوي البالغة <span dir="ltr">1,500</span> ريال سعودي
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-muted">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                      3
                    </span>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">قدم مطالبتك</h3>
                  <p className="text-muted-foreground">عند الحاجة، قدم مطالبتك السنوية الوحيدة مع المستندات الداعمة</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-muted">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                      4
                    </span>
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">احصل على الدعم</h3>
                  <p className="text-muted-foreground">استلم الدعم المالي حسب احتياجك في أقل من ساعة بعد التحقق</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* Pricing Plans */}
        <PricingPlans />

        {/* Testimonials with Enhanced Design */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">ماذا يقول الأطباء عن منصة سندك؟</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                آراء الأطباء المشتركين في منصة سندك وتجاربهم معنا
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/male-doctor-portrait.png"
                        alt="د. أحمد السعيد"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">د. أحمد السعيد</h3>
                      <p className="text-sm text-muted-foreground">طبيب أسنان</p>
                      <div className="flex mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "منصة سندك وفرت لي الحماية القانونية التي كنت أبحث عنها. عندما واجهت مشكلة قانونية، تمت معالجة
                    مطالبتي بسرعة وكفاءة وحصلت على الدعم المالي في وقت قياسي."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/female-doctor-portrait.png"
                        alt="د. سارة الخالدي"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">د. سارة الخالدي</h3>
                      <p className="text-sm text-muted-foreground">طبيبة أطفال</p>
                      <div className="flex mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "أشعر بالأمان في ممارسة مهنتي مع وجود منصة سندك. الاشتراك السنوي بسيط مقارنة بالتغطية الشاملة التي
                    أحصل عليها. أنصح جميع زملائي الأطباء بالاشتراك في المنصة."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/middle-eastern-doctor.png"
                        alt="د. محمد العتيبي"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">د. محمد العتيبي</h3>
                      <p className="text-sm text-muted-foreground">جراح عام</p>
                      <div className="flex mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "كجراح، أواجه مخاطر مهنية عالية. منصة سندك وفرت لي الحماية القانونية اللازمة بتكلفة معقولة. سرعة
                    الاستجابة والمهنية العالية من أهم ما يميز المنصة."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/testimonials">
                <Button variant="outline" className="rounded-full">
                  عرض المزيد من آراء الأطباء
                  <ChevronRight className="mr-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                إجابات على الأسئلة الأكثر شيوعاً حول منصة سندك وخدماتها
              </p>
            </div>

            <div className="max-w-3xl mx-auto" dir="rtl">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="general">عام</TabsTrigger>
                  <TabsTrigger value="subscription">الاشتراك</TabsTrigger>
                  <TabsTrigger value="claims">المطالبات</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                  <div className="space-y-4 text-right">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">ما هي منصة سندك؟</h3>
                      <p className="text-muted-foreground">
                        منصة سندك هي منصة متخصصة توفر الحماية القانونية للأطباء في المملكة العربية السعودية من خلال
                        تغطية مالية للمطالبات القانونية تصل إلى 20,000 ريال سنوياً.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">هل المنصة متاحة لجميع التخصصات الطبية؟</h3>
                      <p className="text-muted-foreground">
                        نعم، منصة سندك متاحة لجميع الأطباء بمختلف تخصصاتهم في المملكة العربية السعودية.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">متى سيتم تفعيل المنصة؟</h3>
                      <p className="text-muted-foreground">
                        سيتم تفعيل المنصة فقط عند اكتمال 1000 اشتراك كحد أدنى خلال شهر واحد. في حالة عدم اكتمال العدد
                        المطلوب، سيتم إرجاع المبالغ المدفوعة بالكامل لجميع المشتركين.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent dir="rtl" value="subscription">
                  <div dir="rtl" className="space-y-4" >
                    <div dir="rtl" className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">كم تبلغ قيمة الاشتراك السنوي؟</h3>
                      <p className="text-muted-foreground">
                        قيمة الاشتراك السنوي في منصة سندك هي 1,500 ريال سعودي فقط.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">هل يمكن تقسيط قيمة الاشتراك؟</h3>
                      <p className="text-muted-foreground">
                        حالياً، لا يتوفر نظام تقسيط للاشتراك السنوي، ولكننا نعمل على توفير هذه الخدمة في المستقبل القريب.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">ما هي طرق الدفع المتاحة؟</h3>
                      <p className="text-muted-foreground">
                        يمكن دفع قيمة الاشتراك عبر بطاقات الائتمان، مدى، أبل باي، والتحويل البنكي.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="claims" dir="rtl">
                  <div className="space-y-4" dir="rtl">
                    <div className="bg-muted/30 rounded-lg p-4" dir="rtl">
                      <h3 className="font-bold text-lg mb-2">كم عدد المطالبات المسموح بها سنوياً؟</h3>
                      <p className="text-muted-foreground">
                        يحق للطبيب المشترك تقديم مطالبة واحدة سنوياً بحد أقصى 20,000 ريال سعودي.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4" dir="rtl">
                      <h3 className="font-bold text-lg mb-2">ما هي المدة المتوقعة لمعالجة المطالبة؟</h3>
                      <p className="text-muted-foreground">
                        تتم معالجة المطالبات في أقل من ساعة بعد التحقق من المستندات، ويتم صرف المبالغ فوراً حتى 20,000
                        ريال.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4" dir="rtl">
                      <h3 className="font-bold text-lg mb-2">ما هي المستندات المطلوبة لتقديم مطالبة؟</h3>
                      <p className="text-muted-foreground">
                        تختلف المستندات المطلوبة حسب نوع المطالبة، ولكن بشكل عام تشمل المستندات الرسمية المتعلقة بالقضية
                        والفواتير والإيصالات ذات الصلة.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="text-center mt-8">
                <Link href="/faq">
                  <Button variant="outline" className="rounded-full">
                    عرض جميع الأسئلة الشائعة
                    <ChevronRight className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Suggestion Form */}
        <SuggestionForm />

        {/* CTA Section with fixed button background */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  احمِ مستقبلك المهني اليوم
                </h2>
                <p className="text-white/90 text-lg max-w-xl">
                  انضم إلى منصة سندك الطبية واحصل على الحماية القانونية الشاملة التي تحتاجها لممارسة مهنتك بثقة وأمان
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-white" />
                    <span>تغطية شاملة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-white" />
                    <span>دعم على مدار الساعة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-white" />
                    <span>معالجة سريعة</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/subscription/basic">
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                      اشترك الآن
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white text-white hover:bg-white/10"
                    >
                      تواصل معنا
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">الباقة السنوية</h3>
                      <p className="text-white/70 text-sm">تغطية شاملة لمدة عام كامل</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70">قيمة الاشتراك السنوي</span>
                        <span className="font-bold" dir="ltr">
                          1,500 ريال
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">الحد الأقصى للتغطية</span>
                        <span className="font-bold" dir="ltr">
                          20,000 ريال
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>مطالبة واحدة سنوياً</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>معالجة سريعة للمطالبات</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>دعم على مدار الساعة</span>
                      </div>
                    </div>
                    <Link href="/subscription/basic" className="block">
                      <Button className="w-full rounded-xl group bg-white text-primary hover:bg-white/90">
                        اشترك الآن
                        <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
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
