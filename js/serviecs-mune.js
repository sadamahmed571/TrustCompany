  // JavaScript للتحكم في التبويب
        document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.service-tab');
            const sections = document.querySelectorAll('.service-section');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // إزالة النشاط من جميع التبويبات والأقسام
                    tabs.forEach(t => t.classList.remove('active'));
                    sections.forEach(s => s.classList.remove('active'));
                    
                    // إضافة النشاط للتبويب والقسم المحدد
                    this.classList.add('active');
                    document.getElementById(targetTab).classList.add('active');
                });
            });
        });