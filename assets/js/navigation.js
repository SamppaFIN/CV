/**
 * Navigation Module
 * Handles mobile menu toggling and smooth scrolling for navigation links
 */

// Self-invoking function to avoid global scope pollution
(function() {
    'use strict';
    
    // DOM Elements
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const allNavLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu a');
    
    /**
     * Toggle mobile menu visibility
     */
    function toggleMobileMenu() {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Manage body scrolling when menu is open
        if (menuBtn.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    /**
     * Close mobile menu
     */
    function closeMobileMenu() {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    /**
     * Handle navigation click with smooth scrolling
     * @param {Event} e - Click event
     */
    function handleNavClick(e) {
        // Get the href attribute
        const targetId = this.getAttribute('href');
        
        // If it's a hash link (internal navigation)
        if (targetId.startsWith('#')) {
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                closeMobileMenu();
                
                // Calculate header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                
                // Smooth scroll to target with header offset
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
                
                // Update URL without scrolling
                history.pushState(null, null, targetId);
            }
        }
    }
    
    /**
     * Handle sticky header on scroll
     */
    function handleStickyHeader() {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1rem 0';
        }
    }
    
    // Event Listeners
    menuBtn.addEventListener('click', toggleMobileMenu);
    
    // Add click event to all navigation links
    allNavLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', handleStickyHeader);
    
    // Close mobile menu on window resize (from mobile to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && menuBtn.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Initialize sticky header on page load
    document.addEventListener('DOMContentLoaded', handleStickyHeader);
    
})();
