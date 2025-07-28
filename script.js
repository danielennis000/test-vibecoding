// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/95', 'backdrop-blur-sm');
    } else {
        nav.classList.remove('bg-white/95', 'backdrop-blur-sm');
    }
});

// Add click handlers for buttons
document.addEventListener('DOMContentLoaded', function() {
    // Download buttons
    const downloadButtons = document.querySelectorAll('button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a simple click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // You can add actual download logic here
            console.log('Download button clicked:', this.textContent.trim());
        });
    });
});

// Simple loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}); 