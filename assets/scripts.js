/**
 * Miguel Rodriguez Portfolio - Main Script
 * A cinematic, interactive portfolio experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP plugins
  gsap.registerPlugin(ScrollTrigger);
  
  // Wait for assets to load before starting animations
  window.addEventListener('load', () => {
    // Remove loader and start animations
    initLoader();
    initCustomCursor();
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initProjectCards();
    smoothScrollInit();
    
    // Remove loading class from body after all animations are set up
    setTimeout(() => {
      document.body.classList.remove('loading');
    }, 500);
  });
});

/**
 * Loading screen animation
 */
function initLoader() {
  const loader = document.querySelector('.page-loader');
  const progress = document.querySelector('.loader-progress');
  
  // Simulate loading progress
  let width = 0;
  const interval = setInterval(() => {
    width += Math.random() * 15;
    if (width > 100) {
      width = 100;
      clearInterval(interval);
      
      // Hide loader when done
      setTimeout(() => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            loader.classList.add('hidden');
          }
        });
      }, 300);
    }
    progress.style.width = width + '%';
  }, 150);
}

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
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
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
    cursor.style.display = 'none';
  }
}

/**
 * Navigation effects and scroll detection
 */
function initNavigation() {
  const nav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const navLogo = document.querySelector('.nav-logo');
  
  // Change navigation on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Animate nav items
  gsap.from([navLogo, ...navLinks], {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.5
  });
}

/**
 * Hero section animations
 */
function initHeroAnimations() {
  const heroHeadlineLines = document.querySelectorAll('.headline .line');
  const heroSubheadline = document.querySelector('.subheadline');
  const heroCta = document.querySelector('.hero-cta');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const heroBackdrop = document.querySelector('.hero-backdrop');
  
  // Initial backdrop animation
  gsap.from(heroBackdrop, {
    opacity: 0,
    scale: 1.1,
    duration: 1.5,
    ease: 'power2.out'
  });
  
  // Headline animation with staggered lines
  gsap.to(heroHeadlineLines, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.7
  });
  
  // Subheadline fade in
  gsap.to(heroSubheadline, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.5,
    ease: 'power2.out'
  });
  
  // CTA button fade in
  gsap.to(heroCta, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.7,
    ease: 'power2.out'
  });
  
  // Scroll indicator fade in
  gsap.to(scrollIndicator, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 2,
    ease: 'power2.out'
  });
  
  // Parallax effect on scroll
  gsap.to('.hero-background', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

/**
 * Scroll-triggered animations for all sections
 */
function initScrollAnimations() {
  // Section titles reveal
  const sectionTitles = document.querySelectorAll('[data-animation="text-reveal"]');
  sectionTitles.forEach(title => {
    const line = title.querySelector('.line');
    if (!line) return;
    
    gsap.to(line, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
      }
    });
  });
  
  // About section animations
  const aboutImage = document.querySelector('[data-animation="image-reveal"]');
  if (aboutImage) {
    gsap.to(aboutImage, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutImage,
        start: 'top 80%'
      }
    });
  }
  
  // Paragraph reveals
  const paragraphs = document.querySelectorAll('[data-animation="paragraph-reveal"]');
  paragraphs.forEach(paragraph => {
    gsap.to(paragraph, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: paragraph,
        start: 'top 85%'
      }
    });
  });
  
  // Staggered fade animations (skills, social links)
  const staggerContainers = document.querySelectorAll('[data-animation="stagger-fade"]');
  staggerContainers.forEach(container => {
    const items = container.children;
    gsap.to([...items], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%'
      }
    });
  });
  
  // Footer copyright fade in
  const copyright = document.querySelector('.copyright');
  if (copyright) {
    gsap.to(copyright, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: copyright,
        start: 'top 95%'
      }
    });
  }
}

/**
 * Project card animations and interactions
 */
function initProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  
  // Staggered entrance animation
  gsap.to(cards, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%'
    }
  });
  
  // 3D hover effect
  cards.forEach(card => {
    card.addEventListener('mousemove', handleCardHover);
    card.addEventListener('mouseleave', resetCardPosition);
  });
  
  function handleCardHover(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardContent = card.querySelector('.card-content');
    
    // Calculate mouse position relative to card center
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation values (limited range)
    const rotateY = mouseX * 0.05;
    const rotateX = -mouseY * 0.05;
    
    // Apply 3D rotation
    gsap.to(cardContent, {
      rotateY: rotateY,
      rotateX: rotateX,
      duration: 0.5,
      ease: 'power1.out'
    });
  }
  
  function resetCardPosition(e) {
    const cardContent = e.currentTarget.querySelector('.card-content');
    gsap.to(cardContent, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  }
}

/**
 * Smooth scrolling for anchor links
 */
function smoothScrollInit() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const navHeight = document.querySelector('.main-nav').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: targetPosition - navHeight,
        behavior: 'smooth'
      });
    });
  });
}
