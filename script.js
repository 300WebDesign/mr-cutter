/* ============================================================
   MR CUTTER — Tree Removal Newcastle
   script.js
   
   This file handles:
   1. Mobile navigation menu toggle
   2. Sticky navbar scroll effect
   3. FAQ accordion
   4. Scroll-in animations
   ============================================================ */

// ============================================================
// 1. MOBILE NAVIGATION
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ============================================================
// 2. STICKY NAVBAR SCROLL EFFECT
// Adds a slightly more opaque background on scroll
// ============================================================
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    }
  }, { passive: true });
}

// ============================================================
// 3. FAQ ACCORDION
// ============================================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer   = item.querySelector('.faq-answer');

  if (!question || !answer) return;

  question.addEventListener('click', () => {
    const isExpanded = question.getAttribute('aria-expanded') === 'true';

    // Close all others first
    faqItems.forEach(other => {
      const otherQ = other.querySelector('.faq-question');
      const otherA = other.querySelector('.faq-answer');
      if (otherQ && otherA && other !== item) {
        otherQ.setAttribute('aria-expanded', 'false');
        otherA.classList.remove('open');
      }
    });

    // Toggle current
    question.setAttribute('aria-expanded', String(!isExpanded));
    answer.classList.toggle('open', !isExpanded);
  });
});

// ============================================================
// 4. SCROLL-IN ANIMATIONS
// Elements fade up as they enter the viewport.
// Add class "reveal" to any element to opt in.
// ============================================================

// Auto-apply "reveal" to key elements
const revealSelectors = [
  '.service-card',
  '.area-card',
  '.why-feature',
  '.process-step',
  '.trust-item',
  '.faq-item',
];

revealSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger the delay slightly per item
    el.style.transitionDelay = `${i * 0.07}s`;
  });
});

// Inject the reveal CSS dynamically (keeps it out of the main stylesheet)
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(revealStyle);

// IntersectionObserver to trigger the animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============================================================
// 5. PHONE NUMBER CLICK TRACKING (Optional / Google Analytics)
// Uncomment if you're using Google Analytics or GTM.
// ============================================================
/*
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'phone_call', {
        event_category: 'Contact',
        event_label: link.href,
      });
    }
  });
});

document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp',
      });
    }
  });
});
*/
