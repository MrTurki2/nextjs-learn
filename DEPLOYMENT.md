# 🚀 دليل النشر (Deployment Guide)

## نظرة عامة

هذا المشروع منشور على **Cloudflare Pages** مع 3 طرق مختلفة للنشر.

---

## 🌐 الروابط

- **Production:** https://nextjsx.tj.sa
- **Cloudflare Pages:** https://nextjs-learn-2mr.pages.dev
- **GitHub:** https://github.com/MrTurki2/nextjs-learn
- **Branch:** `claude/cli-deploy-feature-011CUzus9DUVTixbt9kZoCVn`

---

## ⚡ طرق النشر (Deployment Methods)

### 🥇 الطريقة الموصى بها: Cloudflare Git Integration

**السرعة:** ~40 ثانية ⚡⚡

**المزايا:**
- ✅ تلقائي 100% - أي push ينشر تلقائياً
- ✅ يشتغل من GitHub Web - عدّل من المتصفح
- ✅ أسرع من GitHub Actions بـ 1.8×
- ✅ يشتغل من أي جهاز (جوال، تابلت، حاسوب)

**طريقة الاستخدام:**
1. افتح GitHub.com
2. عدّل أي ملف (مثل `app/page.tsx`)
3. اضغط "Commit changes"
4. انتظر 40 ثانية
5. الموقع live على https://nextjsx.tj.sa ✅

**التفعيل (مرة واحدة):**
1. افتح: https://dash.cloudflare.com/90b07c0a49829c5d9a0d9795165a45d8/pages/view/nextjs-learn
2. Settings → Builds & deployments
3. Connect to Git
4. اختر GitHub
5. Repository: `MrTurki2/nextjs-learn`
6. Production branch: `claude/cli-deploy-feature-011CUzus9DUVTixbt9kZoCVn`
7. Build settings:
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: out
   ```
8. Save

---

### 🥈 الطريقة الحالية: GitHub Actions

**السرعة:** ~71 ثانية ⚡

**المزايا:**
- ✅ تلقائي - يشتغل عند push
- ✅ يشتغل من GitHub Web
- ✅ مفعّل حالياً

**الملفات:**
- `.github/workflows/deploy.yml`

**طريقة الاستخدام:**
نفس Cloudflare Git لكن أبطأ (71 ثانية بدل 40)

**متابعة التقدم:**
- افتح: https://github.com/MrTurki2/nextjs-learn/actions

---

### 🥉 الطريقة الأسرع: CLI Deploy

**السرعة:** ~30 ثانية ⚡⚡⚡

**المزايا:**
- ✅ الأسرع على الإطلاق
- ✅ Build محلي
- ❌ يحتاج جهازك

**طريقة الاستخدام:**

```bash
# Deploy سريع
npm run deploy:fast

# Deploy مع تتبع الوقت
npm run deploy
```

**ملاحظة:** هذه الطريقة للاستخدام المحلي فقط (ما تشتغل من GitHub Web)

---

## 📊 مقارنة الطرق

| الطريقة | السرعة | Web؟ | تلقائي؟ | الحالة |
|---------|---------|------|---------|--------|
| **Cloudflare Git** | **40s ⚡⚡** | **✅** | **✅** | **موصى بها** |
| GitHub Actions | 71s ⚡ | ✅ | ✅ | مفعّلة حالياً |
| CLI Deploy | 30s ⚡⚡⚡ | ❌ | ❌ | للاستخدام المحلي |

---

## 🔧 إعدادات المشروع

### Environment Variables (في Cloudflare)
```bash
# لا توجد متغيرات بيئة مطلوبة حالياً
```

### Build Configuration
```json
{
  "framework": "Next.js",
  "build_command": "npm run build",
  "output_directory": "out",
  "node_version": "20"
}
```

### Next.js Configuration
```typescript
// next.config.ts
const nextConfig = {
  output: 'export',  // Static Site Generation
  images: {
    unoptimized: true  // للتوافق مع Cloudflare Pages
  }
}
```

---

## 🌍 Custom Domain Setup

**الدومين الحالي:** `nextjsx.tj.sa`

**إعدادات DNS:**
```
Type:    CNAME
Name:    nextjsx
Target:  nextjs-learn-2mr.pages.dev
Proxy:   ✅ Proxied
```

**إضافة دومين جديد:**
```bash
# عبر API
curl -X POST "https://api.cloudflare.com/client/v4/accounts/ACCOUNT_ID/pages/projects/nextjs-learn/domains" \
  -H "Authorization: Bearer API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "your-domain.com"}'
```

ثم أضف DNS record في Cloudflare Dashboard.

---

## 📝 سير العمل الموصى به

### للتعديلات السريعة (من Web):
1. افتح https://github.com/MrTurki2/nextjs-learn
2. عدّل الملف المطلوب
3. Commit changes
4. انتظر 40 ثانية (أو 71 إذا ما فعّلت Cloudflare Git)
5. تحقق من https://nextjsx.tj.sa

### للتطوير المحلي:
```bash
# Development
npm run dev  # Port 3330

# Test build
npm run build

# Deploy مباشر (الأسرع)
npm run deploy:fast
```

---

## 🔍 تتبع الـ Deployments

### عبر Cloudflare Dashboard:
https://dash.cloudflare.com/90b07c0a49829c5d9a0d9795165a45d8/pages/view/nextjs-learn

### عبر CLI:
```bash
# عرض آخر 10 deployments
npx wrangler pages deployment list --project-name=nextjs-learn | head -15

# عرض تفاصيل deployment معين
npx wrangler pages deployment tail
```

### عبر GitHub Actions:
https://github.com/MrTurki2/nextjs-learn/actions

---

## ⚙️ Scripts المتوفرة

```json
{
  "dev": "next dev",                    // Development server
  "build": "next build",                // Build production
  "start": "next start",                // Start production server
  "lint": "eslint",                     // Lint code
  "deploy": "./scripts/deploy.sh",      // Deploy مع تتبع الوقت
  "deploy:fast": "...",                 // Deploy سريع (30s)
  "deploy:watch": "./scripts/watch-deploy.sh"  // مراقبة وdeploy تلقائي
}
```

---

## 🐛 استكشاف الأخطاء (Troubleshooting)

### Error 522 (Connection timed out)
**السبب:** SSL certificate لسه في مرحلة الإصدار
**الحل:** انتظر 1-2 دقيقة، المشكلة تحل تلقائياً

### Error: "CNAME record not set"
**السبب:** DNS record غير مضاف
**الحل:** أضف CNAME record في Cloudflare DNS

### Build فشل
**السبب:** خطأ في الكود أو dependencies
**الحل:**
```bash
# اختبر محلياً
npm run build

# شوف الأخطاء
npm run lint
```

### Deploy بطيء
**السبب:** تستخدم GitHub Actions بدل Cloudflare Git
**الحل:** فعّل Cloudflare Git Integration (شوف أعلاه)

---

## 📊 إحصائيات الأداء

### سرعة البناء (Build Time):
- Local: ~15 ثانية
- GitHub Actions: ~44 ثانية
- Cloudflare Pages: ~20 ثانية

### سرعة النشر (Deploy Time):
- CLI: ~15 ثانية
- Cloudflare Git: ~20 ثانية
- GitHub Actions: ~27 ثانية

### الوقت الكلي (Total Time):
- CLI: **30 ثانية** ⚡⚡⚡
- Cloudflare Git: **40 ثانية** ⚡⚡
- GitHub Actions: **71 ثانية** ⚡

---

## 🔐 الأمان والصلاحيات

### Credentials المطلوبة:
```bash
# .env.local (للـ CLI deployment فقط)
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=90b07c0a49829c5d9a0d9795165a45d8
```

### GitHub Secrets:
- `CLOUDFLARE_API_TOKEN` - للـ GitHub Actions

**ملاحظة:** ملف `.env.local` في `.gitignore` - لا يُرفع على GitHub

---

## 📚 مصادر إضافية

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)

---

## ✅ Checklist للـ Deploy

- [ ] الكود يشتغل محلياً (`npm run dev`)
- [ ] Build ينجح بدون أخطاء (`npm run build`)
- [ ] Lint نظيف (`npm run lint`)
- [ ] تم الـ Commit والـ Push
- [ ] انتظر 40-71 ثانية حسب الطريقة
- [ ] تحقق من https://nextjsx.tj.sa
- [ ] تحقق من Cloudflare Pages dashboard

---

## 🎯 الخلاصة

**أفضل طريقة للاستخدام اليومي:**
- ✅ فعّل **Cloudflare Git Integration**
- ✅ عدّل من **GitHub Web**
- ✅ Deploy تلقائي في **40 ثانية**
- ✅ يشتغل من **أي جهاز**

**للـ Deploys السريعة المحلية:**
- ✅ استخدم `npm run deploy:fast`
- ✅ **30 ثانية** فقط
- ⚠️ يحتاج جهازك

---

تم التوثيق بواسطة: Claude Code
آخر تحديث: 2025-11-10
