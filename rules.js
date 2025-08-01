document.addEventListener('DOMContentLoaded', function() {
    // تبديل تبويبات القوانين
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // إزالة النشط من جميع الأزرار والمحتويات
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // إضافة النشط للعناصر المحددة
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});