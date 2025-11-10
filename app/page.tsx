import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";
import { ArrowLeft, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>🚀 التعديل رقم رقم ٨٨٨ - اختبار Auto Deploy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              حوّل أفكارك إلى
              <span className="block text-primary mt-2">واقع رقمي</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نساعدك في بناء منتجات رقمية استثنائية تجمع بين التصميم الجميل والأداء العالي
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                ابدأ الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-accent transition-colors">
                تعرف على المزيد
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">لماذا تختارنا؟</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم حلولاً متكاملة تساعدك على النجاح في عالم الأعمال الرقمي
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">سرعة فائقة</h3>
              <p className="text-muted-foreground leading-relaxed">
                تطبيقات محسنة للأداء مع أسرع تحميل ممكن لتجربة مستخدم استثنائية
              </p>
            </div>

            <div className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">أمان متقدم</h3>
              <p className="text-muted-foreground leading-relaxed">
                حماية كاملة لبياناتك مع أحدث معايير الأمان والتشفير
              </p>
            </div>

            <div className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">نمو مستدام</h3>
              <p className="text-muted-foreground leading-relaxed">
                حلول قابلة للتوسع تنمو مع نمو أعمالك ومتطلباتك
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "500+", label: "مشروع منجز" },
              { number: "98%", label: "رضا العملاء" },
              { number: "50+", label: "شريك نجاح" },
              { number: "24/7", label: "دعم فني" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              جاهز للبدء في مشروعك؟
            </h2>
            <p className="text-xl opacity-90">
              انضم إلى مئات العملاء الذين حققوا نجاحاً باهراً معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all shadow-lg">
                تواصل معنا الآن
              </button>
              <button className="px-8 py-4 bg-primary-foreground/10 backdrop-blur rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
                اطلب عرض سعر
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}
