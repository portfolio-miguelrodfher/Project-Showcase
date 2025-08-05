// Initialize when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Initialize animations
  initAnimations();
  
  // Initialize custom cursor
  initCustomCursor();
  
  // Dark mode toggle functionality can be added here if needed
});

// Text reveal animation using GSAP
function initAnimations() {
  // Only run animations if JavaScript is enabled and GSAP is loaded
  if (typeof gsap !== 'undefined') {
    // Fade in animations
    gsap.utils.toArray('[data-animation="fade-in"]').forEach(element => {
      const delay = element.getAttribute('data-animation-delay') || 0;
      
      gsap.fromTo(element, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: parseFloat(delay),
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Text reveal animations
    gsap.utils.toArray('[data-animation="text-reveal"]').forEach(element => {
      const lines = element.querySelectorAll('.line');
      const delay = element.getAttribute('data-animation-delay') || 0;
      
      gsap.fromTo(lines,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          delay: parseFloat(delay),
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Paragraph reveal animations
    gsap.utils.toArray('[data-animation="paragraph-reveal"]').forEach(element => {
      const paragraphs = element.querySelectorAll('p');
      const delay = element.getAttribute('data-animation-delay') || 0;
      
      gsap.fromTo(paragraphs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: parseFloat(delay),
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Image reveal animations
    gsap.utils.toArray('[data-animation="image-reveal"]').forEach(element => {
      const delay = element.getAttribute('data-animation-delay') || 0;
      
      gsap.fromTo(element, 
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          delay: parseFloat(delay),
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }
}

// Custom cursor effect
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  if (cursor && cursorDot && cursorOutline) {
    document.addEventListener('mousemove', e => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      
      gsap.to(cursorOutline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
      });
    });
    
    // Add hover effect for links and buttons
    const hoverElements = document.querySelectorAll('a, button, .brand-element, .guidelines-item');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.background = 'rgba(0, 45, 94, 0.1)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.background = 'transparent';
      });
    });
  }
}

// Handle dark mode toggle if implemented
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Save preference to localStorage if needed
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}
