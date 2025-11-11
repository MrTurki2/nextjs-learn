import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";
import { Users, UserPlus, Mail, Phone } from "lucide-react";

export default function UsersPage() {
  const users = [
    { id: 1, name: "أحمد محمد", email: "ahmed@example.com", phone: "+966 50 123 4567", role: "مدير" },
    { id: 2, name: "فاطمة علي", email: "fatima@example.com", phone: "+966 55 234 5678", role: "مطور" },
    { id: 3, name: "محمد خالد", email: "mohammed@example.com", phone: "+966 54 345 6789", role: "مصمم" },
    { id: 4, name: "سارة أحمد", email: "sara@example.com", phone: "+966 56 456 7890", role: "مسوق" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium">
              <Users className="w-4 h-4 text-primary" />
              <span>إدارة المستخدمين</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              المستخدمين
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              قائمة بجميع المستخدمين المسجلين في النظام
            </p>
          </div>
        </div>
      </section>

      {/* Users List Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Add User Button */}
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-3xl font-bold">قائمة المستخدمين</h2>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg">
                <UserPlus className="w-5 h-5" />
                إضافة مستخدم
              </button>
            </div>

            {/* Users Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{user.name}</h3>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full inline-block mt-1">
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{user.phone}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors">
                      عرض
                    </button>
                    <button className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent transition-colors">
                      تعديل
                    </button>
                  </div>
                </div>
              ))}
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
