// Project-specific JavaScript for Wine Discovery Experience
document.addEventListener('DOMContentLoaded', function() {
  // Initialize GSAP animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialize custom cursor
  initCustomCursor();
  
  // Text reveal animations
  gsap.utils.toArray('[data-animation="text-reveal"]').forEach(element => {
    const lines = element.querySelectorAll('.line');
    
    if (lines.length) {
      gsap.to(lines, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1.2
      });
    } else {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1
      });
    }
  });

  // Fade-in animations
  gsap.utils.toArray('[data-animation="fade-in"]').forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      delay: delay,
      duration: 0.8,
      ease: "power2.out"
    });
  });
  
  // Paragraph reveal animations
  gsap.utils.toArray('[data-animation="paragraph-reveal"]').forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      delay: delay,
      duration: 1,
      ease: "power3.out"
    });
  });
  
  // Image reveal animations
  gsap.utils.toArray('[data-animation="image-reveal"]').forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      },
      opacity: 1,
      scale: 1,
      delay: delay,
      duration: 1.2,
      ease: "power2.out"
    });
  });
  
  // Timeline items animation
  gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top bottom-=150",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  });
  
  // Process stages animation
  gsap.utils.toArray('.stage').forEach((stage, index) => {
    gsap.to(stage, {
      scrollTrigger: {
        trigger: '.process-stages',
        start: "top bottom-=100",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      delay: index * 0.2,
      duration: 0.8,
      ease: "back.out(1.5)"
    });
  });
});

/**
 * Custom cursor implementation
 */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  // Only enable custom cursor on desktop
  if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power1.out'
      });
      
      gsap.to(cursorOutline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power1.out'
      });
    });
    
    // Detect interactive elements for cursor states
    const interactiveElements = document.querySelectorAll('a, button, .timeline-item, .stage, .stat-box');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('active');
      });
      
      el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('active');
      });
    });
  } else {
    // Hide custom cursor on mobile/tablet
    if (cursor) cursor.style.display = 'none';
  }
}
