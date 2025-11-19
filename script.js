// Mobile Menu Functionality - FIXED
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate close
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Add/remove body scroll lock when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside - FIXED
    document.addEventListener('click', (e) => {
        const isClickInsideNav = e.target.closest('.nav-container');
        const isClickOnMenu = e.target.closest('.mobile-menu-btn');
        
        if (!isClickInsideNav && !isClickOnMenu && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Sparkles Effect - OPTIMIZED for Mobile
(function createSparkles(){
    const container = document.getElementById('sparkles');
    if(!container) return;
    
    const isMobile = window.innerWidth <= 768;
    const W = window.innerWidth;
    const H = window.innerHeight;
    
    // Fewer sparkles on mobile for better performance
    const sparkleCount = isMobile ? 6 : 10;
    
    const positions = [
        [W*0.12, H*0.08], [W*0.3, H*0.06], [W*0.6, H*0.12],
        [W*0.88, H*0.22], [W*0.15, H*0.48], [W*0.48, H*0.32],
        [W*0.76, H*0.62], [W*0.22, H*0.74], [W*0.62, H*0.82], [W*0.38, H*0.6]
    ];
    
    // Only use first sparkleCount positions
    positions.slice(0, sparkleCount).forEach((pos, i) => {
        const el = document.createElement('div');
        el.className = 'sparkle';
        el.style.left = Math.min(W - 20, Math.max(10, pos[0] + (Math.random()*30-15))) + 'px';
        el.style.top = Math.min(H - 20, Math.max(10, pos[1] + (Math.random()*30-15))) + 'px';
        
        // Smaller sparkles on mobile
        const size = isMobile ? 4 + Math.round(Math.random()*4) : 4 + Math.round(Math.random()*8);
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.animationDelay = (Math.random()*2) + 's';
        
        container.appendChild(el);
    });
    
    // Debounced resize handler for better performance
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const els = container.querySelectorAll('.sparkle');
            const W2 = window.innerWidth;
            const H2 = window.innerHeight;
            
            els.forEach((el) => {
                const x = parseFloat(el.style.left) || 0;
                const y = parseFloat(el.style.top) || 0;
                el.style.left = Math.max(10, Math.min(W2-20, (x / W) * W2)) + 'px';
                el.style.top = Math.max(10, Math.min(H2-20, (y / H) * H2)) + 'px';
            });
        }, 250);
    });
})();

// Scroll Buttons - FIXED with error checking
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");

if (btnUp) {
    btnUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

if (btnDown) {
    btnDown.addEventListener("click", () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
}

// Show/hide scroll buttons based on scroll position
function toggleScrollButtons() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    if (btnUp) {
        btnUp.style.display = scrollTop > 300 ? 'flex' : 'none';
    }
    
    if (btnDown) {
        btnDown.style.display = (scrollTop + clientHeight) < (scrollHeight - 100) ? 'flex' : 'none';
    }
}

// Call on scroll
window.addEventListener('scroll', toggleScrollButtons);
// Call on load
window.addEventListener('load', toggleScrollButtons);

// Loading Screen - FIXED
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading");
    const pageContent = document.getElementById("pageContent");
    
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = "none";
        }
        if (pageContent) {
            pageContent.style.display = "block";
        }
    }, 2500);
});

// Navbar Scroll Effect - OPTIMIZED for Mobile
let lastScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    lastScroll = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const nav = document.querySelector('nav');
            
            if (nav) {
                const isMobile = window.innerWidth <= 768;
                
                if (lastScroll > 100) {
                    // Scrolled down
                    nav.style.padding = isMobile ? '10px 0' : '10px 0';
                    nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                    nav.style.transition = 'all 0.3s ease';
                } else {
                    // At top
                    nav.style.padding = isMobile ? '15px 0' : '20px 0';
                    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// Active Page Highlight - NEW FEATURE
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance: Disable animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Add touch feedback for mobile buttons
if ('ontouchstart' in window) {
    document.querySelectorAll('.btn, .quick-link-card, .hobby-card, .diary-card').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

console.log('✨ My Pink Space - All scripts loaded successfully!');
