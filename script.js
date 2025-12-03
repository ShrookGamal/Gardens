document.addEventListener('DOMContentLoaded', function() {
    // 1. تشغيل الانميشن (AOS)
    AOS.init({
        offset: 80,
        duration: 800,
        easing: 'ease-out-cubic',
        once: false
    });

    // 2. التعامل مع قائمة الموبايل
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const closeBtn = document.getElementById('closeBtn');
    // نحدد جميع الروابط داخل قائمة الموبايل
    const mobileLinks = document.querySelectorAll('.mobile-nav ul li a');

    // دالة فتح/غلق القائمة
    function toggleMenu() {
        mobileNav.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
    }

    // تفعيل الأزرار
    if (hamburger) hamburger.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', toggleMenu);

    // *جديد*: إغلاق القائمة عند الضغط على أي رابط بداخلها
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. تغيير لون الهيدر عند السكرول
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 25px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        }
    });

    // 4. (جديد وحصري) ScrollSpy - تتبع القسم النشط لتغيير الهايلايت
    const sections = document.querySelectorAll('section'); // كل السكاشن
    const navLinks = document.querySelectorAll('.nav-links li a'); // روابط الهيدر

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // إذا كان السكرول واصل لنصف السكشن تقريباً
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active'); // احذف Active من الكل
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active'); // ضيف Active للي إحنا واقفين عنده
            }
        });
    });
});