// 네비게이션 스크롤 효과
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// 모바일 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 메뉴 클릭시 닫기
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 활성 메뉴 표시
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
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

// 언어 전환 버튼
const langBtn = document.getElementById('langBtn');
let isKorean = true;

const translations = {
    ko: {
        heroTitle: '프리미엄 한국 절임식품',
        heroSubtitle: 'Premium Korean Pickled Foods',
        heroText: '전통 방식으로 만든 고품질 절임무, 김치를 전세계로 수출합니다',
        productsBtn: '제품 보기',
        contactBtn: '문의하기'
    },
    en: {
        heroTitle: 'Premium Korean Pickled Foods',
        heroSubtitle: 'Export & Import Trading Company',
        heroText: 'We export high-quality pickled radish and kimchi made using traditional methods to the world',
        productsBtn: 'View Products',
        contactBtn: 'Contact Us'
    }
};

langBtn.addEventListener('click', () => {
    isKorean = !isKorean;
    langBtn.textContent = isKorean ? 'EN' : 'KO';

    const lang = isKorean ? 'ko' : 'en';
    document.querySelector('.hero-title').textContent = translations[lang].heroTitle;
    document.querySelector('.hero-text').textContent = translations[lang].heroText;

    const buttons = document.querySelectorAll('.hero-buttons .btn');
    buttons[0].textContent = translations[lang].productsBtn;
    buttons[1].textContent = translations[lang].contactBtn;
});

// 폼 제출 처리
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 실제 환경에서는 여기에 서버로 데이터를 전송하는 코드를 추가합니다
    alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.\n\nYour inquiry has been submitted. We will contact you soon.');
    contactForm.reset();
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 적용할 요소들
document.querySelectorAll('.product-card, .service-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 통계 숫자 카운트 애니메이션
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 통계 섹션이 보이면 카운트 시작
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const statItems = entry.target.querySelectorAll('.stat-item h3');
            statItems[0].dataset.suffix = '+';
            statItems[2].textContent = 'HACCP';

            animateValue(statItems[0], 0, 30, 2000);

            setTimeout(() => {
                statItems[1].innerHTML = '15<span style="font-size: 1.5rem;">년</span>';
            }, 1000);

            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

console.log('🥬 K-Pickles Trade Website Loaded Successfully!');
