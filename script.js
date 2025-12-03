document.addEventListener('DOMContentLoaded', function() {
    // 1. تشغيل الانميشن
    AOS.init({ offset: 100, duration: 800, easing: 'ease-in-out', once: false });

    // 2. القائمة الجانبية للموبايل
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const closeBtn = document.getElementById('closeBtn');
    const mobileLinks = document.querySelectorAll('.mobile-nav ul li a');

    function toggleMenu() {
        mobileNav.classList.toggle('active');
    }

    if(hamburger) hamburger.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    
    // إغلاق القائمة عند الضغط على رابط
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. تغيير شكل الهيدر عند السكرول
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 25px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        }
    });

    // 4. (مهم جداً) نظام الهايلايت الذكي (Active Link ScrollSpy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    function changeActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // المعادلة: لو السكرول نزل لثلث السكشن تقريباً
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            // حذف الكلاس من الجميع أولاً
            a.classList.remove('active');
            
            // إضافة الكلاس فقط للينك المطابق للسكشن الحالي
            // نستخدم includes عشان الروابط ممكن تكون index.html#about
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
        
        // حالة خاصة: لو في أول الصفحة خالص، نشط "الرئيسية"
        if (window.scrollY < 100) {
            navLinks.forEach(a => a.classList.remove('active'));
            document.querySelector('.nav-links li a[href="#home"]').classList.add('active');
            document.querySelector('.nav-links li a[href="index.html#home"]')?.classList.add('active');
        }
    }

    window.addEventListener('scroll', changeActiveLink);
});