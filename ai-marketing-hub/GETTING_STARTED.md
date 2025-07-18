# دليل البدء السريع - AI Marketing Hub

## تشغيل المشروع خطوة بخطوة

### 1. التأكد من متطلبات النظام
```bash
# تحقق من وجود Node.js (يجب أن يكون 18+ أو أحدث)
node --version

# تحقق من وجود npm
npm --version
```

### 2. تشغيل المشروع
```bash
# الانتقال إلى مجلد المشروع
cd ai-marketing-hub

# تثبيت التبعيات (إذا لم يتم من قبل)
npm install

# تشغيل الخادم التطويري
npm run dev
```

### 3. فتح المتصفح
- انتقل إلى: `http://localhost:5173`
- أو اضغط على الرابط الذي سيظهر في Terminal

## الميزات المتاحة للاختبار

### ✅ الواجهة الرئيسية
- لوحة تحكم شاملة بالعربية
- إحصائيات ومقاييس الأداء
- رسوم بيانية تفاعلية

### ✅ التنقل
- شريط جانبي تفاعلي
- قائمة تنقل شاملة
- بحث متقدم في الهيدر

### ✅ أدوات الذكاء الاصطناعي
- عرض أدوات AI المختلفة
- واجهات تفاعلية لكل أداة

### ✅ الثيم والتصميم
- تبديل بين الوضع المضيء والمظلم
- تصميم متجاوب لجميع الأجهزة
- دعم كامل للغة العربية (RTL)

## اختبار الوظائف

### تبديل الثيم
1. اضغط على أيقونة الشمس/القمر في أسفل الشريط الجانبي
2. لاحظ التغيير الفوري في الألوان

### التنقل
1. جرب الضغط على عناصر مختلفة في الشريط الجانبي
2. لاحظ تمييز العنصر النشط

### التصميم المتجاوب
1. غيّر حجم النافذة أو استخدم أدوات المطور
2. لاحظ كيف يتكيف التصميم مع الأحجام المختلفة

### الرسوم البيانية
1. تفاعل مع الرسوم البيانية
2. مرر الماوس فوق النقاط لرؤية التفاصيل

## المشاكل الشائعة وحلولها

### المشكلة: الخادم لا يبدأ
```bash
# احذف node_modules وأعد التثبيت
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### المشكلة: الصفحة فارغة أو بيضاء
- تأكد من أن JavaScript مفعل في المتصفح
- افتح Console للتحقق من الأخطاء
- جرب إعادة تحميل الصفحة

### المشكلة: الخطوط أو الأيقونات لا تظهر
- تأكد من اتصال الإنترنت
- امسح cache المتصفح
- أعد تشغيل الخادم

## بناء المشروع للإنتاج

```bash
# بناء المشروع
npm run build

# معاينة البناء محلياً
npm run preview
```

## نشر المشروع

### على Vercel (مُستحسن)
```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel
```

### على Netlify
1. ارفع مجلد `dist` بعد تشغيل `npm run build`
2. أو اربط مع Git repository

### على GitHub Pages
استخدم GitHub Actions أو ارفع محتويات `dist` إلى branch خاص

## التخصيص والتطوير

### تغيير الألوان
عدّل متغيرات CSS في `src/index.css`:
```css
:root {
  --primary: 240 5.9% 10%;
  --background: 0 0% 100%;
  /* ... باقي المتغيرات */
}
```

### إضافة صفحات جديدة
1. أنشئ مكون جديد في `src/components/`
2. أضف رابط في `Sidebar.jsx`
3. أضف logic للتنقل في `App.jsx`

## الدعم والمساعدة

إذا واجهت أي مشاكل:
1. تحقق من هذا الدليل أولاً
2. راجع ملف `README.md` للتفاصيل التقنية
3. تحقق من Console للأخطاء
4. أعد تشغيل الخادم التطويري

---

**استمتع باستخدام AI Marketing Hub! 🚀**