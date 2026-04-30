// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    
    // Save the preference
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// PDF Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    const closeBtn = document.querySelector('.close');
    const linkBtns = document.querySelectorAll('.link-btn');

    // Open PDF in modal when link is clicked
    linkBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pdfUrl = this.getAttribute('href');
            pdfFrame.src = pdfUrl;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        pdfFrame.src = '';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            pdfFrame.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});