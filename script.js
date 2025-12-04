document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ offset: 100, duration: 800, easing: 'ease-in-out', once: false });

    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const closeBtn = document.getElementById('closeBtn');
    const mobileLinks = document.querySelectorAll('.mobile-nav ul li a');

    function toggleMenu() {
        mobileNav.classList.toggle('active');
    }

    if(hamburger) hamburger.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

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

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    function changeActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
                        if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
        
        if (window.scrollY < 100) {
            navLinks.forEach(a => a.classList.remove('active'));
            document.querySelector('.nav-links li a[href="#home"]').classList.add('active');
            document.querySelector('.nav-links li a[href="index.html#home"]')?.classList.add('active');
        }
    }

    window.addEventListener('scroll', changeActiveLink);
});