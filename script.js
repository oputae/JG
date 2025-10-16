// World-class optimized JavaScript for JG Platform
(function() {
    'use strict';

    // Performance optimization: Use requestAnimationFrame for smooth animations
    const raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        return setTimeout(callback, 16);
    };

    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Initialize when DOM is ready
    function init() {
        try {
            initializeParticles();
            initializeNavigation();
            initializeScrollEffects();
            initializeAnimations();
            initializeAccessibility();
            initializePerformanceOptimizations();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    // Initialize particles.js with error handling
    function initializeParticles() {
        if (typeof particlesJS !== 'undefined') {
            try {
                particlesJS('particles-js', {
                    particles: {
                        number: {
                            value: 60, // Reduced for better performance
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: '#ffffff'
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#000000'
                            }
                        },
                        opacity: {
                            value: 0.08, // Reduced opacity for better performance
                            random: true,
                            anim: {
                                enable: true,
                                speed: 0.5,
                                opacity_min: 0.03,
                                sync: false
                            }
                        },
                        size: {
                            value: 2, // Smaller particles for better performance
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 120, // Reduced distance for better performance
                            color: '#ffffff',
                            opacity: 0.08,
                            width: 0.5
                        },
                        move: {
                            enable: true,
                            speed: 0.5, // Slower movement for better performance
                            direction: 'none',
                            random: true,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 300,
                                line_linked: {
                                    opacity: 0.5
                                }
                            },
                            bubble: {
                                distance: 300,
                                size: 30,
                                duration: 2,
                                opacity: 6,
                                speed: 2
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.3
                            },
                            push: {
                                particles_nb: 2
                            },
                            remove: {
                                particles_nb: 1
                            }
                        }
                    },
                    retina_detect: true
                });
            } catch (error) {
                console.error('Particles initialization error:', error);
            }
        }
    }

    // Initialize navigation with smooth scrolling
    function initializeNavigation() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Initialize scroll effects with throttling
    function initializeScrollEffects() {
        const navbar = document.querySelector('.navbar');
        
        const handleScroll = throttle(() => {
            const scrollY = window.pageYOffset;
            
            if (scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }, 16);

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Initialize animations with Intersection Observer
    function initializeAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Add fade-in animation to elements
        const animatedElements = document.querySelectorAll('.step-item, .solution-item, .work-item, .reach-item');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Initialize accessibility features
    function initializeAccessibility() {
        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

        // Add focus management for modals/overlays
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        
        // Skip link functionality
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(skipLink.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView();
                }
            });
        }
    }

    // Initialize performance optimizations
    function initializePerformanceOptimizations() {
        // Lazy load images
        const images = document.querySelectorAll('img[loading="lazy"]');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }

        // Preload critical resources
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toFixed(1) + 'M';
                clearInterval(timer);
            } else {
                element.textContent = start.toFixed(1) + 'M';
            }
        }, 16);
    }

    // Animate stats when they come into view
    function initializeStatsAnimation() {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const reachNumbers = entry.target.querySelectorAll('.reach-number');
                    reachNumbers.forEach(number => {
                        const text = number.textContent;
                        const value = parseFloat(text);
                        if (!isNaN(value)) {
                            animateCounter(number, value);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const creatorReach = document.querySelector('.creator-reach');
        if (creatorReach) {
            statsObserver.observe(creatorReach);
        }
    }

    // Add CSS for enhanced interactions
    function addEnhancedStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .btn {
                position: relative;
                overflow: hidden;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

            .keyboard-navigation *:focus {
                outline: 2px solid #fff !important;
                outline-offset: 2px !important;
            }

            .lazy {
                opacity: 0;
                transition: opacity 0.3s;
            }

            .lazy.loaded {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }

    // Add click effects to buttons
    function initializeButtonEffects() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Error handling for external resources
    window.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
        }
    });

    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Initialize additional features
    initializeStatsAnimation();
    addEnhancedStyles();
    initializeButtonEffects();

    // Expose public API
    window.JGPlatform = {
        init,
        animateCounter,
        debounce,
        throttle
    };

})();