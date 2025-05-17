import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Award, Shield, Gavel, Stethoscope } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SuggestionForm } from "@/components/suggestion-form"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="hero-gradient py-16 md:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-shadow">من نحن</h1>
              <p className="text-xl text-white/90">تعرف على قصتنا ورؤيتنا ورسالتنا في صندوق الدعم القانوني</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">قصتنا</h2>
                <p className="text-muted-foreground text-lg">
                  تأسس صندوق الدعم القانوني لأطباء الأسنان في عام 2020 استجابة للحاجة المتزايدة لحماية قانونية متخصصة
                  لأطباء الأسنان في المملكة العربية السعودية.
                </p>
                <p className="text-muted-foreground text-lg">
                  بدأت الفكرة عندما لاحظنا التحديات القانونية التي يواجهها أطباء الأسنان في ممارستهم المهنية، وعدم وجود
                  حلول متكاملة تلبي احتياجاتهم الخاصة.
                </p>
                <p className="text-muted-foreground text-lg">
                  منذ ذلك الحين، نمت مؤسستنا لتصبح المزود الرائد لخدمات الدعم القانوني المتخصصة لأطباء الأسنان، مع
                  التركيز على تقديم حلول مبتكرة وفعالة تمكن الأطباء من ممارسة مهنتهم بثقة وأمان.
                </p>
                <div className="pt-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Card className="flex-1 p-4 rounded-xl shadow-md card-hover">
                      <CardContent className="p-0 flex flex-col items-center text-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-3">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-2xl font-bold text-primary">+500</p>
                        <p className="text-muted-foreground">طبيب مشترك</p>
                      </CardContent>
                    </Card>
                    <Card className="flex-1 p-4 rounded-xl shadow-md card-hover">
                      <CardContent className="p-0 flex flex-col items-center text-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-3">
                          <Gavel className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-2xl font-bold text-primary">+1200</p>
                        <p className="text-muted-foreground">مطالبة معالجة</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/dental-office.jpg" alt="صورة عن صندوق الدعم القانوني" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">رؤيتنا ورسالتنا</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-6 rounded-2xl shadow-md card-hover">
                <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground text-lg">
                  أن نكون المرجع الأول والموثوق به في مجال الدعم القانوني لأطباء الأسنان في المملكة العربية السعودية،
                  ونساهم في خلق بيئة مهنية آمنة ومستقرة تمكن الأطباء من التركيز على تقديم أفضل رعاية لمرضاهم.
                </p>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">الحماية القانونية</h4>
                      <p className="text-sm text-muted-foreground">توفير حماية قانونية شاملة لأطباء الأسنان</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-md card-hover">
                <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">رسالتنا</h3>
                <p className="text-muted-foreground text-lg">
                  توفير حلول قانونية متكاملة وميسرة لأطباء الأسنان، من خلال فريق متخصص من الخبراء القانونيين، وتقديم
                  الدعم المالي والمعنوي في مواجهة التحديات القانونية، مع الالتزام بأعلى معايير الجودة والمهنية
                  والشفافية.
                </p>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Stethoscope className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">التخصص في القطاع الطبي</h4>
                      <p className="text-sm text-muted-foreground">خبرة متخصصة في القضايا القانونية لأطباء الأسنان</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
              <p className="text-muted-foreground text-lg">
                نلتزم بمجموعة من القيم الأساسية التي توجه عملنا وتعاملنا مع أعضائنا
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-2xl shadow-md p-6 card-hover">
                <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">الثقة والنزاهة</h3>
                <p className="text-muted-foreground">
                  نعمل بشفافية ونزاهة تامة في جميع تعاملاتنا، ونسعى لبناء علاقات ثقة دائمة مع أعضائنا.
                </p>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 card-hover">
                <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                  <Gavel className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">الاحترافية</h3>
                <p className="text-muted-foreground">
                  نلتزم بأعلى معايير الاحترافية في تقديم خدماتنا، ونسعى دائماً للتميز في كل ما نقوم به.
                </p>
              </Card>
              <Card className="rounded-2xl shadow-md p-6 card-hover">
                <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">التخصص</h3>
                <p className="text-muted-foreground">
                  نركز على تقديم خدمات متخصصة تلبي الاحتياجات الفريدة لأطباء الأسنان في المجال القانوني.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Suggestion Form */}
        <SuggestionForm />
      </main>
      <Footer />
    </div>
  )
}
