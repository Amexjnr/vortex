// Smooth Scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission with validation feedback
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('form-feedback');

    if (!name || !email || !message) {
        feedback.textContent = 'Please fill out all fields.';
        feedback.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.color = 'red';
        return;
    }

    feedback.textContent = 'Message sent successfully!';
    feedback.style.color = 'green';
    this.reset(); // Clear the form after submission
});

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

// Dynamic Text Switching in Hero Section with Fade Effect
const phrases = ["Web Design", "Mobile App Development", "Graphics Design"];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");

setInterval(() => {
    dynamicText.style.opacity = 0; // Fade out
    setTimeout(() => {
        dynamicText.textContent = phrases[index];
        dynamicText.style.opacity = 1; // Fade in
        index = (index + 1) % phrases.length;
    }, 500); // Adjust timing to match fading effect
}, 3000);

// Scroll-triggered opacity change for service and portfolio items
const elements = document.querySelectorAll('.service-item, .portfolio-item');
window.addEventListener('scroll', () => {
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

// Service Cost Calculator
document.getElementById('calculate-btn').addEventListener('click', function () {
    const service = document.getElementById('service-type').value;
    const size = document.getElementById('project-size').value;
    let quote = 0;

    // Example pricing logic
    if (service === 'web-design') {
        if (size === 'small') quote = 15000;
        else if (size === 'medium') quote = 35000;
        else quote = 50000;
    } else if (service === 'app-development') {
        if (size === 'small') quote = 35000;
        else if (size === 'medium') quote = 60000;
        else quote = 100000;
    } else if (service === 'graphics-design') {
        if (size === 'small') quote = 10000;
        else if (size === 'medium') quote = 30000;
        else quote = 70000;
    }

    document.getElementById('quote-result').textContent = 'Estimated Quote: ₦' + quote;
});
