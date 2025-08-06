/**
 * Mercedes-EQ Strategy Project
 * Interactive JavaScript
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Navigation functionality - add scrolled class on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize Charts
    initializeCharts();
});

/**
 * Initialize all charts on the page
 */
function initializeCharts() {
    // EV Readiness Chart
    const evReadinessCtx = document.getElementById('evReadinessChart');
    if (evReadinessCtx) {
        new Chart(evReadinessCtx, {
            type: 'radar',
            data: {
                labels: ['West', 'Northeast', 'Midwest', 'Southwest', 'Southeast'],
                datasets: [
                    {
                        label: 'Projected Dealer EV Readiness',
                        data: [85, 90, 65, 70, 75],
                        backgroundColor: 'rgba(0, 188, 223, 0.2)',
                        borderColor: 'rgba(0, 188, 223, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 188, 223, 1)',
                    },
                    {
                        label: 'Expected Infrastructure Coverage',
                        data: [80, 95, 60, 65, 70],
                        backgroundColor: 'rgba(0, 30, 80, 0.2)',
                        borderColor: 'rgba(0, 30, 80, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 30, 80, 1)',
                    }
                ]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // Sustainability KPIs Chart
    const sustainabilityCtx = document.getElementById('sustainabilityChart');
    if (sustainabilityCtx) {
        new Chart(sustainabilityCtx, {
            type: 'line',
            data: {
                labels: ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033'],
                datasets: [
                    {
                        label: 'Forecasted Carbon Neutrality (%)',
                        data: [35, 50, 65, 75, 85, 90, 95, 98, 100],
                        backgroundColor: 'rgba(0, 188, 223, 0.1)',
                        borderColor: 'rgba(0, 188, 223, 1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                    },
                    {
                        label: 'Projected EV Sales Share (%)',
                        data: [10, 20, 30, 40, 55, 70, 85, 95, 100],
                        backgroundColor: 'rgba(0, 30, 80, 0.1)',
                        borderColor: 'rgba(0, 30, 80, 1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

/**
 * Parallax effect for the hero section
 * Adds subtle movement to enhance visual experience
 */
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        heroContent.style.opacity = 1 - (scrollPosition * 0.002);
    }
});

/**
 * Intersection Observer for lazy loading and animations
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

// Observe elements that should animate on scroll
document.querySelectorAll('.strategy-card, .vehicle-card, .metrics-card, .timeline-item').forEach((item) => {
    observer.observe(item);
});

/**
 * Image hover effects for vehicle cards
 */
document.querySelectorAll('.vehicle-card').forEach(card => {
    const image = card.querySelector('img');
    if (image) {
        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    }
});
