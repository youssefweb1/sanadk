import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Gavel, Stethoscope, Clock, CreditCard, FileText, Phone, Users, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "حماية قانونية شاملة",
      description: "تغطية قانونية كاملة تحميك من المخاطر المهنية والقضايا القانونية المتعلقة بممارسة الطب",
    },
    {
      icon: Gavel,
      title: "دعم قانوني",
      description: "دعم قانوني للمساعدة في التعامل مع القضايا القانونية",
    },
    {
      icon: Stethoscope,
      title: "مخصص لجميع الأطباء",
      description: "خدمات مصممة خصيصاً لتلبية احتياجات جميع الأطباء القانونية ومواجهة التحديات الخاصة بهم",
    },
    {
      icon: Clock,
      title: "معالجة سريعة للمطالبات",
      description: "معالجة المطالبات في أقل من ساعة عند التحقق من المستندات، مع صرف فوري للمبلغ المطلوب",
    },
    {
      icon: CreditCard,
      title: "تغطية مالية",
      description: "تغطية مالية لمطالبة واحدة سنوياً تصل إلى 20,000 ريال سعودي للقضايا القانونية والتعويضات",
    },
    {
      icon: FileText,
      title: "مراجعة المطالبات",
      description: "مراجعة سريعة ودقيقة للمطالبات القانونية لضمان حماية حقوقك المهنية",
    },
    {
      icon: Phone,
      title: "دعم على مدار الساعة",
      description: "فريق دعم متاح 24/7 للرد على استفساراتك وتقديم المساعدة الفورية",
    },
    {
      icon: Users,
      title: "شبكة من الخبراء",
      description: "شبكة واسعة من الخبراء القانونيين في القطاع الطبي",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">مميزات منصة سندك الطبية</h1>
              <p className="text-xl text-white/90">
                نقدم مجموعة شاملة من الخدمات القانونية المصممة خصيصاً لجميع الأطباء
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container px-4 md:px-6">
            <Alert className="bg-amber-50 border-amber-200 text-right mb-8">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <AlertDescription className="text-amber-700 mr-2">
                <p className="font-semibold">ملاحظة هامة:</p>
                <p>
                  سيتم تفعيل المنصة فقط عند اكتمال 1000 اشتراك كحد أدنى خلال شهر واحد. في حالة عدم اكتمال العدد المطلوب،
                  سيتم إرجاع المبالغ المدفوعة بالكامل لجميع المشتركين.
                </p>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col p-6 bg-card rounded-2xl shadow-sm">
                  <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">كيف تستفيد من منصة سندك الطبية؟</h2>
                <p className="text-muted-foreground md:text-xl">
                  نحن نفهم التحديات الفريدة التي يواجهها الأطباء في الممارسة اليومية. منصة سندك الطبية توفر لك راحة
                  البال والحماية التي تحتاجها للتركيز على عملك.
                </p>
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">طريقة استخدام المنصة</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">التسجيل والاشتراك:</span> قم بإنشاء حساب ودفع رسوم
                    الاشتراك السنوي (<span dir="ltr">1,500</span> ريال).
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">تفعيل الحساب:</span> بمجرد اكتمال 1000 اشتراك، سيتم
                    تفعيل المنصة وإشعارك بذلك.
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">الاستفادة من الخدمات:</span> يمكنك الاستفادة من الدعم
                    القانوني ومراجعة المطالبات.
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">تقديم مطالبة:</span> عند الحاجة، قم بتقديم مطالبتك
                    السنوية الوحيدة مع المستندات المطلوبة.
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">متابعة المطالبة:</span> تتم معالجة المطالبة في أقل من
                    ساعة وصرف المبلغ فور الموافقة.
                  </li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">كيف تفيدك المنصة كطبيب؟</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">الحماية المالية:</span> تغطية تصل إلى{" "}
                      <span dir="ltr">20,000</span> ريال للمطالبات القانونية، مما يقلل من المخاطر المالية.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">الدعم القانوني:</span> وصول إلى خبراء قانونيين في
                      القطاع الطبي لمساعدتك في التعامل مع القضايا القانونية.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">راحة البال:</span> ممارسة مهنتك بثقة أكبر مع وجود
                      شبكة أمان قانونية تدعمك.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">توفير الوقت والجهد:</span> تولي فريقنا القانوني
                      إدارة القضايا القانونية نيابة عنك.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-center">الحدّ الأقصى للمطالبات والتنبيه السنوي</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-lg">
                    يغطي صندوق "سندك"{" "}
                    <strong>
                      <span dir="ltr">60</span> مطالبة قانونية
                    </strong>{" "}
                    لكل طبيب خلال <strong>سنة الاشتراك</strong>، بحد أقصى{" "}
                    <strong>
                      <span dir="ltr">20,000</span> ر.س
                    </strong>{" "}
                    لكل مطالبة.
                  </p>
                  <ul className="list-disc mr-6 mt-4 space-y-3">
                    <li>
                      <strong>عتبة التنبيه (90%):</strong> عند معالجة{" "}
                      <strong>
                        <span dir="ltr">54</span> مطالبة
                      </strong>{" "}
                      خلال سنة الاشتراك، يُخطر جميع الأعضاء داخل لوحة التحكم وعبر البريد الإلكتروني، ويُتاح لهم الاشتراك
                      في جولة <strong>Top-Up</strong> بقيمة{" "}
                      <strong>
                        <span dir="ltr">300</span> ر.س
                      </strong>{" "}
                      لإعادة فتح التغطية قبل ذكرى اشتراكهم السنوية.
                    </li>
                    <li>
                      بعد معالجة{" "}
                      <strong>
                        <span dir="ltr">60</span> مطالبة
                      </strong>{" "}
                      خلال سنة الاشتراك، يُغلق الصندوق أمام الأعضاء حتى يصلوا إلى ذكرى تفعيل اشتراكهم، حيث تُعاد سعة
                      المطالبات من جديد.
                    </li>
                  </ul>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">سياسة الاسترداد</h3>
                    <p className="text-muted-foreground">
                      لا يمكن استرداد المبلغ بعد الدفع واكتمال الحد الأدنى من المشتركين (<span dir="ltr">1000</span>{" "}
                      مشترك). يتم استرداد المبلغ فقط في حالة عدم اكتمال العدد المطلوب خلال شهر واحد.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">سياسة التجديد</h3>
                    <p className="text-muted-foreground">
                      لا يمكن تجديد الاشتراك إلا بعد انتهاء المدة كاملة (سنة من تاريخ الاشتراك). بعد التجديد، يمكنك
                      تقديم مطالبة جديدة.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">المطالبات</h3>
                    <p className="text-muted-foreground">
                      يمكنك تقديم مطالبة واحدة فقط خلال السنة بحد أقصى <span dir="ltr">20,000</span> ريال. إذا كانت قيمة
                      المطالبة أقل من الحد الأقصى، فلن تتمكن من تقديم مطالبة أخرى حتى تجديد الاشتراك.
                    </p>
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
