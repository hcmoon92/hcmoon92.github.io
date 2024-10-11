// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling (Optional Enhancement)
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
        behavior: 'smooth'
    });

    // Close the nav menu on mobile after clicking
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation (HTML5 handles most)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
    }

    // Simulate form submission (e.g., AJAX request)
    // Here, we'll just display a success message
    formMessage.textContent = 'Thank you for your message!';
    formMessage.style.color = 'green';

    // Reset the form
    contactForm.reset();
});
