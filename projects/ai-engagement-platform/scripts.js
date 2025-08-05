/**
 * AI Engagement Platform - Case Study Scripts
 * Author: Miguel Rodriguez
 * 
 * This file contains all the JavaScript functionality specific to the AI Engagement Platform case study.
 * Includes GSAP animations, scroll behaviors, and interactive elements.
 */

// Make sure DOM is fully loaded before executing any scripts
document.addEventListener('DOMContentLoaded', function() {
  // Remove dark mode classes that might have been inherited from the main site
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
  
  // Initialize GSAP animations
  initGSAP();
  
  // Initialize results counter animation
  initResultsCounter();
});

/**
 * Initialize GSAP animations for various elements
 */
function initGSAP() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Text reveal animation for headings
  const textRevealElements = document.querySelectorAll('[data-animation="text-reveal"]');
  textRevealElements.forEach(element => {
    const lines = element.querySelectorAll('.line');
    
    if (lines.length) {
      gsap.to(lines, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%"
        }
      });
    } else {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%"
        }
      });
    }
  });
  
  // Simple fade in animation
  const fadeElements = document.querySelectorAll('[data-animation="fade-in"]');
  fadeElements.forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.to(element, {
      opacity: 1,
      duration: 1,
      delay: parseFloat(delay),
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%"
      }
    });
  });
  
  // Image reveal animation
  const imageElements = document.querySelectorAll('[data-animation="image-reveal"]');
  imageElements.forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: parseFloat(delay),
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%"
      }
    });
  });
  
  // Paragraph reveal animation
  const paragraphElements = document.querySelectorAll('[data-animation="paragraph-reveal"]');
  paragraphElements.forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: parseFloat(delay),
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%"
      }
    });
  });
  
  // Staggered fade in for lists, groups of items
  const staggerElements = document.querySelectorAll('[data-animation="stagger-fade"]');
  staggerElements.forEach(element => {
    const items = element.children;
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: parseFloat(delay),
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%"
      }
    });
  });
}

/**
 * Initialize counter animation for results statistics
 */
function initResultsCounter() {
  // Animate results numbers counting up
  const resultCards = document.querySelectorAll('.results-card h3');
  resultCards.forEach(card => {
    const value = card.innerText;
    card.innerText = "0";
    
    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => {
        gsap.to(card, {
          innerText: value,
          duration: 1.5,
          ease: "power2.out",
          snap: { innerText: 1 }
        });
      },
      once: true
    });
  });
}

/**
 * Handle smooth scrolling for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});
