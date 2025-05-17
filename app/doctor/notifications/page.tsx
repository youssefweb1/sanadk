"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DoctorHeader } from "@/components/doctor-header"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, FileText, Calendar, CreditCard, CheckCircle, AlertCircle } from "lucide-react"

export default function NotificationsPage() {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "تم قبول مطالبتك",
      description: "تمت الموافقة على مطالبتك رقم CLM-001 بمبلغ 5,000 ريال",
      date: "منذ 2 ساعة",
      type: "claim",
      isRead: false,
    },
    {
      id: 2,
      title: "تحديث في حالة المطالبة",
      description: "تم تحديث حالة المطالبة CLM-002 إلى قيد المراجعة",
      date: "منذ يوم واحد",
      type: "claim",
      isRead: false,
    },
    {
      id: 3,
      title: "تذكير: تجديد الاشتراك",
      description: "يرجى تجديد اشتراكك قبل انتهاء الفترة الحالية في 15/05/2024",
      date: "منذ 3 أيام",
      type: "subscription",
      isRead: true,
    },
    {
      id: 4,
      title: "موعد استشارة قانونية",
      description: "لديك موعد استشارة قانونية غداً الساعة 10:00 صباحاً",
      date: "منذ 4 أيام",
      type: "appointment",
      isRead: true,
    },
    {
      id: 5,
      title: "تم رفض المطالبة",
      description: "تم رفض مطالبتك رقم CLM-003 لعدم توفر المستندات الكافية",
      date: "منذ أسبوع",
      type: "claim",
      isRead: true,
    },
    {
      id: 6,
      title: "تحديث في النظام",
      description: "تم تحديث منصة سندك بميزات جديدة، اكتشفها الآن",
      date: "منذ أسبوعين",
      type: "system",
      isRead: true,
    },
  ]

  // Function to get icon based on notification type
  const getNotificationIcon = (type) => {
    switch (type) {
      case "claim":
        return <FileText className="h-5 w-5 text-primary" />
      case "appointment":
        return <Calendar className="h-5 w-5 text-primary" />
      case "subscription":
        return <CreditCard className="h-5 w-5 text-primary" />
      case "system":
        return <Bell className="h-5 w-5 text-primary" />
      default:
        return <Bell className="h-5 w-5 text-primary" />
    }
  }

  // Function to mark all as read
  const markAllAsRead = () => {
    alert("تم تحديد جميع الإشعارات كمقروءة")
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DoctorSidebar />
      <div className="flex-1">
        <DoctorHeader />
        <main className="container p-4 md:p-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">الإشعارات</h1>
              <p className="text-muted-foreground">إدارة ومتابعة جميع الإشعارات الخاصة بك</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="rounded-xl" onClick={markAllAsRead}>
                تحديد الكل كمقروء
              </Button>
            </div>
          </div>

          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">الإشعارات والتنبيهات</CardTitle>
              <CardDescription>جميع الإشعارات والتنبيهات الخاصة بحسابك</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-5 mb-4">
                  <TabsTrigger value="all">الكل</TabsTrigger>
                  <TabsTrigger value="unread">غير مقروءة</TabsTrigger>
                  <TabsTrigger value="claims">المطالبات</TabsTrigger>
                  <TabsTrigger value="appointments">المواعيد</TabsTrigger>
                  <TabsTrigger value="subscription">الاشتراك</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-3 p-4 rounded-lg border ${
                          !notification.isRead ? "bg-primary/5 border-primary/10" : "bg-card border-border"
                        }`}
                      >
                        <div className="p-2 bg-primary/10 rounded-full shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium flex items-center gap-2">
                              {notification.title}
                              {!notification.isRead && <Badge className="bg-primary text-white">جديد</Badge>}
                            </h3>
                            <span className="text-xs text-muted-foreground">{notification.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="unread">
                  <div className="space-y-4">
                    {notifications
                      .filter((notification) => !notification.isRead)
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start gap-3 p-4 rounded-lg border bg-primary/5 border-primary/10"
                        >
                          <div className="p-2 bg-primary/10 rounded-full shrink-0">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium flex items-center gap-2">
                                {notification.title}
                                <Badge className="bg-primary text-white">جديد</Badge>
                              </h3>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="claims">
                  <div className="space-y-4">
                    {notifications
                      .filter((notification) => notification.type === "claim")
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className={`flex items-start gap-3 p-4 rounded-lg border ${
                            !notification.isRead ? "bg-primary/5 border-primary/10" : "bg-card border-border"
                          }`}
                        >
                          <div className="p-2 bg-primary/10 rounded-full shrink-0">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium flex items-center gap-2">
                                {notification.title}
                                {!notification.isRead && <Badge className="bg-primary text-white">جديد</Badge>}
                              </h3>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="appointments">
                  <div className="space-y-4">
                    {notifications
                      .filter((notification) => notification.type === "appointment")
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className={`flex items-start gap-3 p-4 rounded-lg border ${
                            !notification.isRead ? "bg-primary/5 border-primary/10" : "bg-card border-border"
                          }`}
                        >
                          <div className="p-2 bg-primary/10 rounded-full shrink-0">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium flex items-center gap-2">
                                {notification.title}
                                {!notification.isRead && <Badge className="bg-primary text-white">جديد</Badge>}
                              </h3>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="subscription">
                  <div className="space-y-4">
                    {notifications
                      .filter((notification) => notification.type === "subscription")
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className={`flex items-start gap-3 p-4 rounded-lg border ${
                            !notification.isRead ? "bg-primary/5 border-primary/10" : "bg-card border-border"
                          }`}
                        >
                          <div className="p-2 bg-primary/10 rounded-full shrink-0">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium flex items-center gap-2">
                                {notification.title}
                                {!notification.isRead && <Badge className="bg-primary text-white">جديد</Badge>}
                              </h3>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  إعدادات الإشعارات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إشعارات المطالبات</p>
                      <p className="text-sm text-muted-foreground">تلقي إشعارات عند تحديث حالة المطالبات</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إشعارات المواعيد</p>
                      <p className="text-sm text-muted-foreground">تلقي تذكيرات بالمواعيد القادمة</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إشعارات الاشتراك</p>
                      <p className="text-sm text-muted-foreground">تلقي تذكيرات بتجديد الاشتراك</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إشعارات البريد الإلكتروني</p>
                      <p className="text-sm text-muted-foreground">تلقي الإشعارات عبر البريد الإلكتروني</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  الدعم والمساعدة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    إذا كنت بحاجة إلى مساعدة بخصوص الإشعارات أو أي استفسارات أخرى، يمكنك التواصل مع فريق الدعم الخاص
                    بنا.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">طرق التواصل</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>البريد الإلكتروني: support@sanadak.com</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>رقم الهاتف: 966500000000+</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>ساعات العمل: من الأحد إلى الخميس، 8 صباحاً - 5 مساءً</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full rounded-xl">تواصل مع الدعم</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
