document.addEventListener('DOMContentLoaded', function() {
    // تحميل الصفحة
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
    
    // تأثير الجسيمات
    if (document.querySelector('.hero-particles')) {
        particlesJS('hero-particles', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#d4af37"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#d4af37",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // شريط التنقل الثابت
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // القائمة المتنقلة
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="mobile-links">
            <a href="#home" class="active">الرئيسية</a>
            <a href="#features">المميزات</a>
            <a href="#store">المتجر</a>
            <a href="#rules">القوانين</a>
        </div>
        <div class="mobile-buttons">
            <button class="btn login-btn">تسجيل الدخول</button>
            <button class="btn register-btn">إنشاء حساب</button>
        </div>
        <a href="#" class="mobile-user">
            <span>حسابي</span>
            <i class="fas fa-user"></i>
        </a>
    `;
    document.body.appendChild(mobileMenu);
    
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    menuOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // زر العودة للأعلى
    const scrollTop = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة المتنقلة إذا كانت مفتوحة
                if (mobileMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    });
    
    // تغيير الرابط النشط في القائمة
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // نظام إشعار افتتاح المتجر
    const notifyBtn = document.querySelector('.notify-btn');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt('الرجاء إدخال بريدك الإلكتروني ليتم إعلامك عند افتتاح المتجر:');
            if (email) {
                alert('شكراً لك! سنقوم بإعلامك عند افتتاح المتجر.');
                this.textContent = 'تم الطلب!';
                this.style.backgroundColor = '#4CAF50';
            }
        });
    }
    
    // تأثيرات عند التمرير
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .rule-card, .info-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // تهيئة العناصر
    document.querySelectorAll('.feature-card, .rule-card, .info-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // تشغيل مرة واحدة عند التحميل
});