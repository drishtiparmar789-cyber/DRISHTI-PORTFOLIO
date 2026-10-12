/**
 * Portfolio JavaScript - Drishti Parmar
 * Handles navigation, mobile menu, active link highlighting, and contact form
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Active Navigation Link on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Visual loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        if (formStatus) {
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          formStatus.style.display = 'block';
          formStatus.style.color = '#10b981';
          formStatus.style.marginTop = '1rem';
        }

        contactForm.reset();

        setTimeout(() => {
          if (formStatus) {
            formStatus.style.display = 'none';
          }
        }, 5000);
      }, 800);
    });
  }

  // Quick Copy Email Utility
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = '0808cs241114.ies@ipsacademy.org';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = 'Copied to Clipboard!';
        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
        }, 2000);
      });
    });
  }
});
