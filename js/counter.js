// قم بالبحث عن جميع العناصر التي تحتوي على السمة data-toggle="counter-up"
const counters = document.querySelectorAll('[data-toggle="counter-up"]');

// إنشاء الدالة التي تقوم بتحديث العداد
const updateCounter = (el) => {
    // الحصول على القيمة النهائية من العنصر وتأكد من أنها رقم
    const finalValue = +el.innerText;
    // تحديد المدة التي سيستغرقها العداد للوصول إلى القيمة النهائية
    const duration = 800; // 2000 ميلي ثانية = 2 ثانية
    // حساب الزيادة في كل خطوة
    const increment = finalValue / duration;

    // تهيئة القيمة الحالية للعداد
    let currentCount = 0;

    // بدء العداد باستخدام setInterval
    const timer = setInterval(() => {
        // زيادة القيمة الحالية
        currentCount += increment;

        // التحقق من أن القيمة الحالية لم تتجاوز القيمة النهائية
        if (currentCount >= finalValue) {
            // إذا وصلت القيمة إلى النهاية، أوقف العداد واعرض القيمة النهائية
            clearInterval(timer);
            el.innerText = finalValue;
        } else {
            // تحديث النص بالقيمة الحالية (مع إزالة الكسور العشرية)
            el.innerText = Math.ceil(currentCount);
        }
    }, 1); // التحديث كل 1 ميلي ثانية
};

// إنشاء مراقب (IntersectionObserver)
const observer = new IntersectionObserver((entries, observer) => {
    // لكل عنصر يظهر في مجال الرؤية
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // ابدأ تشغيل العداد
            updateCounter(entry.target);
            // أوقف مراقبة هذا العنصر بعد تشغيل العداد مرة واحدة
            observer.unobserve(entry.target);
        }
    });
});

// ابدأ بمراقبة كل عنصر من عناصر العداد
counters.forEach((counter) => {
    observer.observe(counter);
});