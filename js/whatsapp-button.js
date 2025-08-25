document.addEventListener('DOMContentLoaded', function() {
        const whatsFloat = document.getElementById('whatsFloat');
        const link = whatsFloat.querySelector('a');
        
        let timeoutId; // لتخزين ID الـ timeout لإلغائه إذا لزم الأمر
        
        whatsFloat.addEventListener('click', function(event) {
            if (!whatsFloat.classList.contains('active')) {
                // الضغطة الأولى: أظهر الحاوية ومنع فتح الرابط
                event.preventDefault();
                whatsFloat.classList.add('active');
                
                // إعادة إخفاء الحاوية بعد 3 ثوانٍ
                timeoutId = setTimeout(() => {
                    whatsFloat.classList.remove('active');
                }, 3000);
            } else {
                // الضغطة الثانية: افتح الرابط، وألغِ الـ timeout إذا كان موجوداً
                clearTimeout(timeoutId);
                // الرابط سيعمل تلقائياً
            }
        });
        
        // إعادة تعيين الحالة إذا خرج الماوس (للحواسيب)
        whatsFloat.addEventListener('mouseleave', function() {
            whatsFloat.classList.remove('active');
            clearTimeout(timeoutId); // ألغِ الـ timeout عند خروج الماوس
        });
        
        // طي الحاوية عند الضغط في أي مكان خارجها (لجميع الأجهزة)
        document.addEventListener('click', function(event) {
            if (!whatsFloat.contains(event.target)) {
                whatsFloat.classList.remove('active');
                clearTimeout(timeoutId); // ألغِ الـ timeout
            }
        });
    });