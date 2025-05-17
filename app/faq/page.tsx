import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      question: "ما هي منصة سندك الطبية للدعم القانوني؟",
      answer:
        "منصة سندك الطبية هي خدمة مصممة خصيصاً لجميع الأطباء لتوفير الحماية القانونية والدعم المالي في حالة المطالبات القانونية والقضايا المهنية. نحن نقدم تغطية تصل إلى 20,000 ريال سعودي مقابل اشتراك سنوي قدره 1,500 ريال سعودي.",
    },
    {
      question: "هل الخدمة متاحة لجميع الأطباء أم فقط لأطباء الأسنان؟",
      answer:
        "الخدمة متاحة لجميع الأطباء بمختلف تخصصاتهم وليست مقتصرة على أطباء الأسنان فقط. جميع الممارسين الصحيين المرخصين في المملكة العربية السعودية مؤهلون للاستفادة من خدماتنا.",
    },
    {
      question: "كيف يمكنني الاشتراك في الخدمة؟",
      answer:
        "يمكنك الاشتراك بسهولة من خلال موقعنا الإلكتروني. قم بالتسجيل وإنشاء حساب، ثم اختر خطة الاشتراك المناسبة لك وأكمل عملية الدفع. بمجرد اكتمال الاشتراك، ستتمكن من الاستفادة من جميع خدماتنا.",
    },
    {
      question: "ما هي المطالبات التي يغطيها الصندوق؟",
      answer:
        "يغطي الصندوق مجموعة واسعة من المطالبات القانونية المتعلقة بالممارسة الطبية، بما في ذلك دعاوى الإهمال الطبي، والنزاعات مع المرضى، ومشاكل التأمين، والنزاعات التعاقدية، والقضايا المتعلقة بالترخيص والممارسة المهنية.",
    },
    {
      question: "ما هو الحد الأقصى للمطالبات السنوية التي يغطيها الصندوق؟",
      answer:
        "يغطي صندوق سندك 60 مطالبة قانونية لكل طبيب خلال سنة الاشتراك، بحد أقصى 20,000 ر.س لكل مطالبة. عند معالجة 54 مطالبة خلال سنة الاشتراك (90% من الحد الأقصى)، يُخطر جميع الأعضاء داخل لوحة التحكم وعبر البريد الإلكتروني، ويُتاح لهم الاشتراك في جولة Top-Up بقيمة 300 ر.س لإعادة فتح التغطية قبل ذكرى اشتراكهم السنوية. بعد معالجة 60 مطالبة خلال سنة الاشتراك، يُغلق الصندوق أمام الأعضاء حتى يصلوا إلى ذكرى تفعيل اشتراكهم، حيث تُعاد سعة المطالبات من جديد.",
    },
    {
      question: "متى سيتم تفعيل المنصة؟",
      answer:
        "سيتم تفعيل المنصة فقط عند اكتمال 1000 اشتراك كحد أدنى خلال شهر واحد من إطلاق المنصة. في حالة عدم اكتمال العدد المطلوب، سيتم إرجاع المبالغ المدفوعة بالكامل لجميع المشتركين.",
    },
    {
      question: "هل يمكنني استرداد المبلغ بعد الاشتراك؟",
      answer:
        "لا يمكن استرداد المبلغ بعد الدفع واكتمال الحد الأدنى من المشتركين (1000 مشترك). يتم استرداد المبلغ فقط في حالة عدم اكتمال العدد المطلوب خلال شهر واحد من إطلاق المنصة.",
    },
    {
      question: "كم من الوقت يستغرق معالجة المطالبة؟",
      answer:
        "نحن نسعى جاهدين لمعالجة المطالبات بأسرع وقت ممكن. يتم معالجة المطالبات في أقل من ساعة في حالة التحقق من صحة المستندات والحالة، وفور الموافقة يتم صرف المبلغ المطلوب بحد أقصى 20,000 ريال سعودي.",
    },
    {
      question: "ما هي المستندات المطلوبة لتقديم مطالبة؟",
      answer:
        "تختلف المستندات المطلوبة حسب نوع المطالبة، ولكن بشكل عام، ستحتاج إلى تقديم وصف تفصيلي للحالة، وأي مراسلات أو وثائق ذات صلة، وتقارير طبية إذا كانت متاحة، وأي مستندات أخرى تدعم مطالبتك.",
    },
    {
      question: "هل يمكنني تقديم أكثر من مطالبة في السنة؟",
      answer:
        "لا، يمكنك تقديم مطالبة واحدة فقط خلال فترة الاشتراك السنوي بحد أقصى 20,000 ريال. في حال تم قبول مطالبتك بمبلغ أقل من الحد الأقصى، لن تتمكن من تقديم مطالبات إضافية حتى تجديد الاشتراك.",
    },
    {
      question: "هل الخدمة متاحة في جميع مناطق المملكة؟",
      answer: "نعم، خدماتنا متاحة لجميع الأطباء في جميع مناطق المملكة العربية السعودية.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">الأسئلة الشائعة</h1>
              <p className="text-xl text-white/90">إجابات على الأسئلة الأكثر شيوعاً حول منصة سندك الطبية</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container px-4 md:px-6">
            <Alert className="mb-6 bg-amber-50 border-amber-200 text-right">
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

        <section className="py-8 md:py-16">
          <div className="container px-4 md:px-6 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-right text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
