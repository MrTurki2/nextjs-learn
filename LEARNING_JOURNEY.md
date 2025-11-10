# 🚀 رحلة تعلم Next.js

## 📌 نظرة عامة

هذا المستند يوثق رحلة تعلم Next.js 16 من البداية، مع التركيز على المفاهيم الأساسية والممارسات الحديثة.

---

## 📅 الخطوة 1: البداية (10 نوفمبر 2025)

### ما تم إنجازه:
- ✅ إنشاء مشروع Next.js 16 جديد
- ✅ إعداد TypeScript + Tailwind CSS
- ✅ تهيئة Git
- ✅ إنشاء صفحة رئيسية عربية

### التقنيات المستخدمة:
```bash
- Next.js 16.0.1
- React 19
- TypeScript 5.x
- Tailwind CSS 4.x
- ESLint
```

### الأوامر الأساسية:
```bash
# إنشاء المشروع
npx create-next-app@latest . --typescript --tailwind --app --eslint

# تشغيل المشروع
npm run dev -- -p 3400

# بناء المشروع
npm run build

# تشغيل النسخة المبنية
npm start
```

---

## 🏗️ هيكل المشروع

```
nextjs-learn/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # التصميم الأساسي (Root Layout)
│   ├── page.tsx           # الصفحة الرئيسية
│   └── globals.css        # الأنماط العامة
├── public/                # الملفات الثابتة
├── node_modules/          # مكتبات المشروع
├── package.json           # إعدادات المشروع
├── tsconfig.json          # إعدادات TypeScript
├── tailwind.config.ts     # إعدادات Tailwind
└── next.config.ts         # إعدادات Next.js
```

---

## 📚 المفاهيم الأساسية

### 1️⃣ App Router (جديد في Next.js 13+)

App Router هو نظام التوجيه الجديد في Next.js الذي يعتمد على مجلد `app/`.

**المميزات:**
- 🎯 Server Components افتراضياً
- 🚀 أداء أفضل
- 🔄 Loading States و Error Handling مدمجة
- 📦 Layouts مشتركة

**مثال على الهيكل:**
```
app/
├── layout.tsx          # تصميم مشترك لكل الصفحات
├── page.tsx            # الصفحة الرئيسية (/)
├── about/
│   └── page.tsx        # صفحة "من نحن" (/about)
└── blog/
    ├── page.tsx        # صفحة المدونة (/blog)
    └── [id]/
        └── page.tsx    # مقالة محددة (/blog/123)
```

### 2️⃣ Server Components vs Client Components

#### Server Components (افتراضي):
- ✅ تعمل على السيرفر فقط
- ✅ لا تُحمّل JavaScript على المتصفح
- ✅ يمكنها الوصول للبيانات مباشرة
- ✅ أفضل للأداء

```tsx
// Server Component (افتراضي)
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()

  return <div>{json.title}</div>
}
```

#### Client Components:
- 🔄 تعمل على المتصفح
- 🔄 تحتاج `"use client"` في أول السطر
- 🔄 يمكنها استخدام Hooks و Events

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      العدد: {count}
    </button>
  )
}
```

### 3️⃣ File-based Routing

في Next.js، الملفات تُصبح routes تلقائياً:

| الملف | الرابط |
|------|--------|
| `app/page.tsx` | `/` |
| `app/about/page.tsx` | `/about` |
| `app/blog/page.tsx` | `/blog` |
| `app/blog/[id]/page.tsx` | `/blog/123` |
| `app/blog/[...slug]/page.tsx` | `/blog/a/b/c` |

### 4️⃣ Metadata API

تحديد معلومات الصفحة (Title, Description, etc.):

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مرحباً بك',
  description: 'وصف الصفحة',
  keywords: ['next.js', 'react', 'تطوير'],
}

export default function Page() {
  return <div>المحتوى</div>
}
```

### 5️⃣ Layouts

Layouts هي مكونات مشتركة تُغلف الصفحات:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header>الهيدر المشترك</header>
        {children}
        <footer>الفوتر المشترك</footer>
      </body>
    </html>
  )
}
```

---

## 🎨 العمل مع Tailwind CSS

### الأساسيات:

```tsx
// مثال على استخدام Tailwind
export default function Card() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">العنوان</h2>
      <p className="text-gray-600">المحتوى</p>
    </div>
  )
}
```

### الأنماط الشائعة:

| الكلاس | الوصف |
|--------|-------|
| `flex` | Flexbox |
| `grid` | CSS Grid |
| `p-4` | Padding 1rem |
| `m-4` | Margin 1rem |
| `text-xl` | حجم نص كبير |
| `bg-blue-500` | خلفية زرقاء |
| `rounded-lg` | زوايا دائرية |
| `shadow-lg` | ظل كبير |
| `hover:bg-gray-100` | تأثير عند التمرير |
| `dark:bg-gray-900` | للوضع الداكن |

---

## 🔄 Data Fetching

### 1. Server Components (مُوصى به):

```tsx
// جلب البيانات على السيرفر
export default async function Posts() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

### 2. Client Components:

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://api.example.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

---

## 🛣️ Routing

### Dynamic Routes:

```tsx
// app/blog/[id]/page.tsx
export default function BlogPost({
  params
}: {
  params: { id: string }
}) {
  return <h1>المقالة رقم {params.id}</h1>
}
```

### Catch-all Routes:

```tsx
// app/blog/[...slug]/page.tsx
export default function BlogPost({
  params
}: {
  params: { slug: string[] }
}) {
  // /blog/a/b/c => slug = ['a', 'b', 'c']
  return <h1>المسار: {params.slug.join('/')}</h1>
}
```

### Navigation:

```tsx
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Nav() {
  const router = useRouter()

  return (
    <nav>
      {/* استخدام Link */}
      <Link href="/about">من نحن</Link>

      {/* التنقل البرمجي */}
      <button onClick={() => router.push('/contact')}>
        اتصل بنا
      </button>
    </nav>
  )
}
```

---

## 🖼️ Images

استخدام مكون Image المُحسّن:

```tsx
import Image from 'next/image'

export default function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      alt="صورة شخصية"
      width={100}
      height={100}
      priority  // تحميل أولوية عالية
    />
  )
}
```

---

## 🌍 Internationalization (i18n)

### دعم اللغة العربية:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
```

### استخدام خطوط عربية:

```tsx
import { Cairo } from 'next/font/google'

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
```

---

## ⚡ Performance Optimization

### 1. Code Splitting تلقائي:
- كل صفحة تُحمّل كودها فقط
- React Lazy Loading مدمج

### 2. Image Optimization:
- تحسين الصور تلقائياً
- WebP format
- Lazy loading

### 3. Font Optimization:
- تحميل الخطوط بكفاءة
- منع Layout Shift

### 4. Static Generation:
```tsx
// توليد صفحات ثابتة للأداء الأفضل
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
  const data = await posts.json()

  return data.map((post) => ({
    id: post.id.toString(),
  }))
}
```

---

## 🔧 Environment Variables

### إنشاء ملف `.env.local`:

```env
# متغيرات عامة (تظهر للمتصفح)
NEXT_PUBLIC_API_URL=https://api.example.com

# متغيرات خاصة (سرية - للسيرفر فقط)
DATABASE_URL=postgresql://...
API_SECRET_KEY=secret123
```

### الاستخدام:

```tsx
// في Server Components
const apiKey = process.env.API_SECRET_KEY

// في Client Components (فقط المتغيرات العامة)
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## 📝 أفضل الممارسات

### ✅ افعل:
1. استخدم Server Components قدر الإمكان
2. استخدم TypeScript للـ type safety
3. استخدم `next/image` للصور
4. استخدم `next/link` للروابط الداخلية
5. اجعل المكونات صغيرة وقابلة لإعادة الاستخدام
6. استخدم Tailwind للتصميم السريع
7. اكتب كود نظيف ومقروء

### ❌ تجنب:
1. تجنب `<a>` للروابط الداخلية (استخدم Link)
2. تجنب `<img>` للصور (استخدم Image)
3. تجنب استخدام Client Components بدون سبب
4. تجنب الكود المكرر
5. تجنب hardcoding القيم (استخدم Environment Variables)

---

## 📖 موارد التعلم

### الوثائق الرسمية:
- [Next.js Documentation](https://nextjs.org/docs) - الوثائق الرسمية
- [React Documentation](https://react.dev) - وثائق React الجديدة
- [Tailwind CSS](https://tailwindcss.com/docs) - وثائق Tailwind

### دروس تفاعلية:
- [Next.js Learn](https://nextjs.org/learn) - دورة رسمية مجانية
- [React Tutorial](https://react.dev/learn) - تعلم React من الصفر

### مجتمعات عربية:
- مجموعات Telegram و Discord للمطورين العرب
- قنوات YouTube العربية لتعلم Next.js

---

## 🎯 الخطوات القادمة

### المستوى المبتدئ:
- [ ] فهم Server vs Client Components
- [ ] إنشاء صفحات متعددة
- [ ] استخدام Layouts
- [ ] إضافة Navigation
- [ ] العمل مع الصور

### المستوى المتوسط:
- [ ] Dynamic Routing
- [ ] Data Fetching
- [ ] Loading & Error States
- [ ] Forms & Validation
- [ ] API Routes

### المستوى المتقدم:
- [ ] Authentication
- [ ] Database Integration
- [ ] Middleware
- [ ] Server Actions
- [ ] Deployment

---

## 💡 نصائح سريعة

### 1. Hot Reload:
عند تعديل الكود، الصفحة تتحدث تلقائياً دون إعادة تحميل.

### 2. Error Messages:
Next.js يعطي رسائل خطأ واضحة ومفيدة.

### 3. TypeScript:
يساعد في اكتشاف الأخطاء قبل التشغيل.

### 4. Dev Tools:
استخدم React Developer Tools في المتصفح.

---

## 📊 الإنجازات الحالية

### ✅ ما تم تعلمه:
- [x] إنشاء مشروع Next.js
- [x] فهم App Router
- [x] استخدام Tailwind CSS
- [x] إنشاء صفحة عربية
- [x] العمل مع Layouts
- [x] استخدام Metadata API
- [x] Git version control

### 🎯 الأهداف القادمة:
- [ ] إنشاء صفحات متعددة
- [ ] إضافة Navigation Bar
- [ ] العمل مع Forms
- [ ] جلب البيانات من API
- [ ] إضافة قاعدة بيانات

---

## 📝 ملاحظات التعلم

### اليوم الأول (10 نوفمبر 2025):
- تم إنشاء المشروع بنجاح
- صفحة رئيسية عربية بتصميم جميل
- فهم أساسيات App Router
- استخدام Tailwind للتصميم السريع

**الدرس المستفاد:**
> Next.js 16 سهل وقوي، والتوثيق العربي RTL يعمل بشكل ممتاز مع `dir="rtl"` و `lang="ar"`.

---

## 🔗 روابط مفيدة

- [المشروع على GitHub](https://github.com/yourusername/nextjs-learn)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🙏 شكر وتقدير

شكراً لـ:
- Vercel على Next.js الرائع
- مجتمع React
- مطوري Tailwind CSS

---

**آخر تحديث:** 10 نوفمبر 2025
**النسخة:** Next.js 16.0.1
**المؤلف:** تركي

---

> 💡 **نصيحة:** استمر في التعلم والممارسة. كل مشروع صغير يقربك من الاحتراف!

