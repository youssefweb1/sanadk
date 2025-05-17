import { Users, FileText, Award, Clock } from "lucide-react"

export function Statistics() {
  const stats = [
    {
      icon: Users,
      value: "+500",
      label: "طبيب مشترك",
    },
    {
      icon: FileText,
      value: "+1200",
      label: "مطالبة معالجة",
    },
    {
      icon: Award,
      value: "98%",
      label: "نسبة رضا العملاء",
    },
    {
      icon: Clock,
      value: "48",
      label: "ساعة لمعالجة المطالبات",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-1 animate-pulse-slow">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
