// Project-specific JavaScript for Chateau VDR Branding

document.addEventListener('DOMContentLoaded', function() {
  // Initialize GSAP animations - faster and more optimized
  initGSAPAnimations();
  
  // Initialize custom cursor
  initCustomCursor();
  
  // Initialize smooth scrolling for anchor links
  initSmoothScrolling();
});

// Function to trigger GSAP animations
function initGSAPAnimations() {
  // Text reveal animations - show immediately
  const textRevealElements = document.querySelectorAll('[data-animation="text-reveal"]');
  textRevealElements.forEach(element => {
    const lines = element.querySelectorAll('.line');
    if (lines.length > 0) {
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add('reveal');
        }, index * 100);
      });
    } else {
      setTimeout(() => {
        element.classList.add('reveal');
      }, 100);
    }
  });
  
  // Paragraph reveal animations - show immediately
  const paragraphRevealElements = document.querySelectorAll('[data-animation="paragraph-reveal"]');
  paragraphRevealElements.forEach(element => {
    // Make visible immediately
    element.classList.add('reveal');
  });
  
  // Fade in animations - show immediately
  const fadeElements = document.querySelectorAll('[data-animation="fade-in"]');
  fadeElements.forEach(element => {
    const delay = element.dataset.animationDelay ? parseFloat(element.dataset.animationDelay) * 500 : 0;
    
    // Make visible immediately
    setTimeout(() => {
      element.classList.add('fade-in');
    }, delay);
  });
  
  // Image reveal animations - show immediately
  const imageRevealElements = document.querySelectorAll('[data-animation="image-reveal"]');
  imageRevealElements.forEach(element => {
    const delay = element.dataset.animationDelay ? parseFloat(element.dataset.animationDelay) * 500 : 0;
    // Force images to display right away
    element.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    // Then add reveal class
    setTimeout(() => {
      element.classList.add('reveal');
    }, delay);
  });
}

// Initialize custom cursor
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  if (!cursor || !cursorDot || !cursorOutline) return;
  
  document.addEventListener('mousemove', e => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Delayed follow for outline
    setTimeout(() => {
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    }, 80);
  });
  
  // Enlarge cursor when hovering over links and buttons
  const interactiveElements = document.querySelectorAll('a, button, .brand-element, .guidelines-item');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursorOutline.style.width = '40px';
      cursorOutline.style.height = '40px';
      cursorOutline.style.opacity = '0.5';
    });
    
    element.addEventListener('mouseleave', () => {
      cursorOutline.style.width = '20px';
      cursorOutline.style.height = '20px';
      cursorOutline.style.opacity = '0.8';
    });
  });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add any additional functions here as needed
