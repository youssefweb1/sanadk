import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">سياسة الخصوصية</h1>
              <p className="text-xl text-white/90">نلتزم بحماية خصوصية بياناتك الشخصية</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-3xl">
            <div className="mb-8">
              <p className="text-muted-foreground">آخر تحديث: 15 مايو 2023</p>
              <p className="mt-4">
                نحن في صندوق الدعم القانوني لأطباء الأسنان نلتزم بحماية خصوصية بياناتك الشخصية. توضح سياسة الخصوصية هذه
                كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام موقعنا الإلكتروني أو خدماتنا.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">المعلومات التي نجمعها</h2>
                <p className="text-muted-foreground mb-3">قد نقوم بجمع المعلومات التالية:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>الاسم والمسمى الوظيفي</li>
                  <li>معلومات الاتصال بما في ذلك البريد الإلكتروني ورقم الهاتف</li>
                  <li>المعلومات الديموغرافية مثل الرمز البريدي والتفضيلات والاهتمامات</li>
                  <li>معلومات أخرى ذات صلة بالاستبيانات والعروض</li>
                  <li>معلومات مهنية مثل رقم الترخيص المهني ومكان العمل</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">كيفية استخدام المعلومات</h2>
                <p className="text-muted-foreground mb-3">
                  نحتاج إلى هذه المعلومات لفهم احتياجاتك وتقديم خدمة أفضل لك، وعلى وجه الخصوص للأسباب التالية:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>إدارة حسابك والتحقق من هويتك</li>
                  <li>معالجة المطالبات وتقديم الخدمات القانونية</li>
                  <li>تحسين منتجاتنا وخدماتنا</li>
                  <li>إرسال رسائل بريد إلكتروني ترويجية حول منتجات أو خدمات جديدة نعتقد أنها قد تهمك</li>
                  <li>الاتصال بك لأغراض أبحاث السوق</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">أمان المعلومات</h2>
                <p className="text-muted-foreground">
                  نحن ملتزمون بضمان أمان معلوماتك. لمنع الوصول غير المصرح به أو الكشف عنها، وضعنا إجراءات مادية
                  وإلكترونية وإدارية مناسبة لحماية المعلومات التي نجمعها عبر الإنترنت.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">استخدام ملفات تعريف الارتباط</h2>
                <p className="text-muted-foreground">
                  ملف تعريف الارتباط هو ملف صغير يطلب الإذن ليتم وضعه على القرص الصلب لجهاز الكمبيوتر الخاص بك. بمجرد
                  موافقتك، تتم إضافة الملف ويساعد ملف تعريف الارتباط في تحليل حركة الويب أو يتيح لك معرفة عندما تزور
                  موقعًا معينًا.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">الروابط لمواقع أخرى</h2>
                <p className="text-muted-foreground">
                  قد يحتوي موقعنا على روابط لمواقع أخرى ذات أهمية. ومع ذلك، بمجرد استخدام هذه الروابط لمغادرة موقعنا،
                  يجب أن تلاحظ أننا لا نملك أي سيطرة على هذا الموقع الآخر. لذلك، لا يمكننا أن نكون مسؤولين عن حماية
                  وخصوصية أي معلومات تقدمها أثناء زيارة هذه المواقع.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">التحكم في معلوماتك الشخصية</h2>
                <p className="text-muted-foreground mb-3">
                  يمكنك اختيار تقييد جمع أو استخدام معلوماتك الشخصية بالطرق التالية:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    عندما يُطلب منك ملء نموذج على الموقع، ابحث عن المربع الذي يمكنك النقر عليه للإشارة إلى أنك لا ترغب في
                    استخدام المعلومات لأغراض التسويق المباشر
                  </li>
                  <li>
                    إذا كنت قد وافقت مسبقًا على استخدام معلوماتك الشخصية لأغراض التسويق المباشر، يمكنك تغيير رأيك في أي
                    وقت عن طريق الاتصال بنا
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">تحديثات سياسة الخصوصية</h2>
                <p className="text-muted-foreground">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر من خلال نشر نسخة جديدة على موقعنا. يجب عليك التحقق من
                  هذه الصفحة من وقت لآخر للتأكد من أنك راضٍ عن أي تغييرات.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">الاتصال بنا</h2>
                <p className="text-muted-foreground">
                  إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك الاتصال بنا على البريد الإلكتروني:
                  privacy@sanadk.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
