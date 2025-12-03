document.addEventListener('DOMContentLoaded', function() {
    // تشغيل الانميشن
    AOS.init({
        offset: 100,
        duration: 900,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false
    });
});

// القائمة الجانبية للموبايل
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const closeBtn = document.getElementById('closeBtn');

function toggleMenu() {
    mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
}

if(hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    mobileNavOverlay.addEventListener('click', toggleMenu);
}

// تغيير ستايل الهيدر عند السكرول
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