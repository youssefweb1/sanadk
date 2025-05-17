import { Shield, Gavel, Stethoscope, Clock, CreditCard, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "حماية قانونية شاملة",
      description: "تغطية قانونية كاملة تحميك من المخاطر المهنية والقضايا القانونية المتعلقة بممارسة مهنة الطب",
    },
    {
      icon: Gavel,
      title: "دعم قانوني متخصص",
      description: "فريق قانوني متخصص في القطاع الطبي لمساعدتك في التعامل مع قضايا الأخطاء الطبية",
    },
    {
      icon: Stethoscope,
      title: "مخصص لجميع الأطباء",
      description: "خدمات مصممة خصيصاً لتلبية احتياجات الأطباء بمختلف تخصصاتهم ومواجهة التحديات الخاصة بهم",
    },
    {
      icon: Clock,
      title: "معالجة سريعة للمطالبات",
      description: "إجراءات سريعة وفعالة لضمان معالجة مطالباتك بأقصى سرعة وكفاءة خلال 48 ساعة من تقديمها",
    },
    {
      icon: CreditCard,
      title: "تغطية مالية",
      description: "تغطية مالية لمطالبة واحدة سنوياً تصل إلى 20,000 ريال سعودي للقضايا القانونية والتعويضات المحتملة",
    },
    {
      icon: FileText,
      title: "مراجعة المستندات",
      description: "خدمة مراجعة المستندات القانونية لضمان حماية حقوقك المهنية وتجنب المخاطر المستقبلية",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">مميزات منصة سندك</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              نقدم مجموعة شاملة من الخدمات القانونية المصممة خصيصاً للأطباء في المملكة العربية السعودية
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col p-6 rounded-2xl shadow-md border-t-4 border-t-primary card-hover"
            >
              <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-2xl p-8 shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">لماذا تختار منصة سندك؟</h3>
              <p className="text-muted-foreground">
                نحن نفهم التحديات الفريدة التي يواجهها الأطباء في الممارسة اليومية. منصة سندك توفر لك راحة البال
                والحماية التي تحتاجها للتركيز على عملك.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>فريق قانوني متخصص في القطاع الطبي</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>تغطية شاملة للأخطاء الطبية</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>إجراءات سريعة وبسيطة</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>دعم على مدار الساعة</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg bg-primary/5 flex items-center justify-center">
              <Shield className="h-32 w-32 text-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
