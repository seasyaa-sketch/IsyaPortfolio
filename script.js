// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
    });
});

(function createSparkles(){
  const container = document.getElementById('sparkles');
  if(!container) return;
  const W = window.innerWidth, H = window.innerHeight;
  const positions = [
    [W*0.12, H*0.08], [W*0.3, H*0.06], [W*0.6, H*0.12],
    [W*0.88, H*0.22], [W*0.15, H*0.48], [W*0.48, H*0.32],
    [W*0.76, H*0.62], [W*0.22, H*0.74], [W*0.62, H*0.82], [W*0.38, H*0.6]
  ];
  positions.forEach((pos,i)=>{
    const el = document.createElement('div');
    el.className = 'sparkle s' + ((i%6)+1);
    el.style.left = (pos[0] + (Math.random()*30-15)) + 'px';
    el.style.top  = (pos[1] + (Math.random()*30-15)) + 'px';
    // small random size
    const size = 4 + Math.round(Math.random()*8);
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    // random animation offset
    el.style.animationDelay = (Math.random()*2) + 's';
    container.appendChild(el);
  });

  // reposition on resize (simple scaling)
  window.addEventListener('resize', ()=>{
    const els = container.querySelectorAll('.sparkle');
    const W2 = window.innerWidth, H2 = window.innerHeight;
    els.forEach((el, i) => {
      const x = parseFloat(el.style.left) || 0;
      const y = parseFloat(el.style.top)  || 0;
      el.style.left = Math.max(0, Math.min(W2-10, (x / W) * W2)) + 'px';
      el.style.top  = Math.max(0, Math.min(H2-10, (y / H) * H2)) + 'px';
    });
  });
})();

// Scroll up
document.getElementById("btnUp").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Scroll down
document.getElementById("btnDown").addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("pageContent").style.display = "block";
    }, 2500); // same with CSS delay
});




// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }

    // Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}

});
