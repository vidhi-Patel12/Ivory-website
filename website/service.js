
const targets = document.querySelectorAll(`.services-col:last-child,.services-col .description,
  .services-col .description,.hero .hero-title,.services-section .service-icon,.subscribe-box h2`);
 
const observerr = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // reset animation by forcing it to re-run
      entry.target.style.animation = "none";        // disable
      void entry.target.offsetWidth;                // trigger reflow
      entry.target.style.animation = "";            // restore original from CSS
    }
  });
}, { threshold: 0.2 });
 
targets.forEach(el => observerr.observe(el));



const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Mobile Navigation Toggle
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('show');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('show');
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('show');
        });
    });
}



