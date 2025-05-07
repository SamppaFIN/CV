/**
 * Intersection Observer Module
 * Handles scroll animations for section elements
 * Uses Intersection Observer API for performance optimization
 */

// Self-invoking function to avoid global scope pollution
(function() {
    'use strict';
    
    /**
     * Initialize intersection observers for animated sections
     */
    function initSectionObservers() {
        const sections = document.querySelectorAll('.fade-in-section');
        
        // Check if browser supports Intersection Observer
        if (!('IntersectionObserver' in window)) {
            // Fallback for browsers that don't support Intersection Observer
            sections.forEach(section => {
                section.classList.add('is-visible');
            });
            return;
        }
        
        const observerOptions = {
            root: null, // Use viewport as the root
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% of the element is visible
        };
        
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the visible class to trigger animation
                    entry.target.classList.add('is-visible');
                    
                    // Stop observing after the animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Start observing each section
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
    
    /**
     * Highlight active section in navigation based on scroll position
     */
    function initNavHighlighting() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu a');
        
        // Check if browser supports Intersection Observer
        if (!('IntersectionObserver' in window)) {
            return;
        }
        
        const navOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Reduced range to improve accuracy
            threshold: 0
        };
        
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get the id of the visible section
                    const id = entry.target.getAttribute('id');
                    
                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to matching nav link
                    const activeLink = document.querySelector(`.desktop-nav a[href="#${id}"], .mobile-menu a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, navOptions);
        
        // Start observing each section
        sections.forEach(section => {
            navObserver.observe(section);
        });
    }
    
    // Initialize observers when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        initSectionObservers();
        initNavHighlighting();
    });
    
})();
