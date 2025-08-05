// Project-specific JavaScript for URL Content Analyzer

// Chart colors for data visualizations
const CHART_COLORS = [
  '#0050E0', // Primary blue
  '#00C2FF', // Secondary blue
  '#6236FF', // Accent purple
  '#00B8D9', // Teal
  '#36B37E', // Green
  '#FF5630', // Red
  '#FFAB00', // Orange
  '#6554C0'  // Indigo
];

document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initAnimations();
  
  // Initialize custom cursor
  initCustomCursor();
  
  // Initialize particles for hero section
  initParticles();
  
  // Initialize animated counters
  initStatCounters();
  
  // Apply syntax highlighting for code blocks
  initCodeHighlighting();
});

// Text reveal animation setup
function initAnimations() {
  // Text reveal animation
  const textRevealElements = document.querySelectorAll('[data-animation="text-reveal"]');
  textRevealElements.forEach(element => {
    const lines = element.querySelectorAll('.line');
    
    if (lines.length) {
      // For elements with line spans
      lines.forEach(line => {
        const delay = line.getAttribute('data-animation-delay') || 0;
        
        gsap.fromTo(line, 
          { y: '100%', opacity: 0 },
          { 
            y: '0%', 
            opacity: 1, 
            duration: 1.2, 
            ease: 'power4.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
            },
            delay: parseFloat(delay)
          }
        );
      });
    } else {
      // For elements without line spans
      gsap.fromTo(element, 
        { y: '50px', opacity: 0 },
        { 
          y: '0', 
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
          }
        }
      );
    }
  });
  
  // Fade in animation
  const fadeElements = document.querySelectorAll('[data-animation="fade-in"]');
  fadeElements.forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.fromTo(element, 
      { opacity: 0, y: '20px' },
      { 
        opacity: 1, 
        y: '0',
        duration: 0.8, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
        },
        delay: parseFloat(delay)
      }
    );
  });
  
  // Paragraph reveal animation
  const paragraphElements = document.querySelectorAll('[data-animation="paragraph-reveal"]');
  paragraphElements.forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.fromTo(element, 
      { opacity: 0, y: '30px' },
      { 
        opacity: 1, 
        y: '0',
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        delay: parseFloat(delay)
      }
    );
  });
  
  // Image reveal animation
  const imageElements = document.querySelectorAll('[data-animation="image-reveal"]');
  imageElements.forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.fromTo(element, 
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        delay: parseFloat(delay)
      }
    );
  });
  
  // Stagger fade animation (for skills/tags)
  const staggerElements = document.querySelectorAll('[data-animation="stagger-fade"]');
  staggerElements.forEach(parent => {
    const delay = parent.getAttribute('data-animation-delay') || 0;
    const children = parent.children;
    
    gsap.fromTo(children, 
      { opacity: 0, y: '20px' },
      { 
        opacity: 1, 
        y: '0',
        duration: 0.5, 
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: parent,
          start: 'top 85%',
        },
        delay: parseFloat(delay)
      }
    );
  });
  
  // Card reveal animation
  const cardElements = document.querySelectorAll('[data-animation="card-reveal"]');
  cardElements.forEach(element => {
    const delay = element.getAttribute('data-animation-delay') || 0;
    
    gsap.fromTo(element, 
      { opacity: 0, y: '50px' },
      { 
        opacity: 1, 
        y: '0',
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        delay: parseFloat(delay)
      }
    );
  });
}

// Custom cursor functionality
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  if (!cursor || !cursorDot || !cursorOutline) return;
  
  document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    gsap.to(cursorDot, {
      x: posX,
      y: posY,
      duration: 0.1
    });
    
    gsap.to(cursorOutline, {
      x: posX,
      y: posY,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  
  // Add cursor effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .interactive');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });
}

// Function to handle form submission (for demonstration purposes)
// Initialize particles background
function initParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  // Create particles
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 2-6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Append to container
    particlesContainer.appendChild(particle);
    
    // Animate with GSAP
    gsap.to(particle, {
      x: `${(Math.random() - 0.5) * 100}`,
      y: `${(Math.random() - 0.5) * 100}`,
      duration: Math.random() * 20 + 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}

// Apply code syntax highlighting
function initCodeHighlighting() {
  const codeBlocks = document.querySelectorAll('.code-snippet code');
  
  codeBlocks.forEach(block => {
    // Keywords
    block.innerHTML = block.innerHTML.replace(
      /(const|let|var|function|return|async|await|try|catch|if|else|for|of|in)/g, 
      '<span class="code-keyword">$1</span>'
    );
    
    // Strings
    block.innerHTML = block.innerHTML.replace(
      /(['"`])(.*?)(['"`])/g, 
      '<span class="code-string">$1$2$3</span>'
    );
    
    // Comments
    block.innerHTML = block.innerHTML.replace(
      /(\/\/.*)/g, 
      '<span class="code-comment">$1</span>'
    );
    
    // Function names
    block.innerHTML = block.innerHTML.replace(
      /(\w+)(\s*\()/g, 
      '<span class="code-function">$1</span>$2'
    );
  });
}

// Animate stat counters
function initStatCounters() {
  const statValues = document.querySelectorAll('.stat-value');
  
  if (!statValues.length) return;
  
  // Create ScrollTrigger for each stat
  statValues.forEach(stat => {
    const finalValue = parseFloat(stat.getAttribute('data-value'));
    const isInteger = Number.isInteger(finalValue);
    const suffix = stat.getAttribute('data-suffix') || '';
    const statBox = stat.closest('.stat-box');
    const progressCircle = statBox.querySelector('.progress-circle-bar');
    
    // Make the stat visible when it comes into view
    gsap.to(stat, {
      scrollTrigger: {
        trigger: statBox,
        start: 'top 80%',
        onEnter: () => {
          stat.classList.add('visible');
          
          // Calculate circle progress based on value (if it's a percentage)
          if (progressCircle) {
            const circumference = 2 * Math.PI * 54; // radius is 54 according to the SVG
            progressCircle.style.strokeDasharray = circumference;
            
            // For percentage values (those ending with %), animate the progress bar accordingly
            // For time values (like 3.2s), use 80% fill as default
            let progressPercentage;
            if (suffix === '%') {
              progressPercentage = finalValue / 100;
            } else {
              // For non-percentage values, use a default fill level (80%)
              progressPercentage = 0.8;
            }
            
            const dashOffset = circumference - (circumference * progressPercentage);
            
            // Animate the progress circle
            gsap.to(progressCircle, {
              strokeDashoffset: dashOffset,
              duration: 2,
              ease: 'power2.out'
            });
          }
          
          // Counter animation
          gsap.fromTo(
            stat,
            { textContent: '0' },
            {
              duration: 2,
              textContent: finalValue,
              roundProps: isInteger ? 'textContent' : '',
              ease: 'power2.out',
              snap: isInteger ? { textContent: 1 } : { textContent: 0.1 },
              onUpdate: function() {
                if (!isInteger) {
                  stat.textContent = parseFloat(stat.textContent).toFixed(1);
                }
                // Add the suffix back to the displayed value
                if (suffix) {
                  stat.textContent = stat.textContent + suffix;
                }
              }
            }
          );
        }
      }
    });
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const urlInput = document.getElementById('url-input');
  
  if (urlInput && urlInput.value) {
    // Normally we'd process the URL here
    console.log('Analyzing URL:', urlInput.value);
    // For demo purposes, show success message
    alert('URL analysis complete! This is a portfolio demonstration.');
  }
}
