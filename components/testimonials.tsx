import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "د. محمد العتيبي",
      role: "طبيب عام - الرياض",
      content:
        "منصة سندك كانت بمثابة شبكة أمان لي عندما واجهت قضية قانونية معقدة مع أحد المرضى. الدعم الذي تلقيته كان استثنائياً وساعدني على تجاوز الموقف بأقل خسائر ممكنة.",
      avatar: "م",
    },
    {
      name: "د. سارة الدوسري",
      role: "طبيبة نساء وتوليد - جدة",
      content:
        "أنصح بشدة جميع زملائي الأطباء بالاشتراك في منصة سندك. الاستثمار السنوي البسيط يوفر راحة بال كبيرة ويتيح لك التركيز على عملك دون قلق.",
      avatar: "س",
    },
    {
      name: "د. خالد الشمري",
      role: "طبيب جراحة - الدمام",
      content:
        "سرعة الاستجابة والاحترافية العالية هي ما يميز فريق منصة سندك. تمت معالجة مطالبتي خلال 24 ساعة فقط، وتلقيت الدعم الكامل طوال العملية.",
      avatar: "خ",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ماذا يقول أعضاؤنا</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            استمع إلى تجارب الأطباء الذين استفادوا من خدمات منصة سندك
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="rounded-2xl shadow-md card-hover">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
