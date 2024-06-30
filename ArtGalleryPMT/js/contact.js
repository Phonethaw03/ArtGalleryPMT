// Example JavaScript for form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic validation example
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // More advanced validation for email format (optional)
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Assuming validation passed, you can proceed to submit the form (example)
    // Replace with your actual submission code (e.g., AJAX request or form action)
    alert('Form submitted successfully!');

    // Reset the form after submission (optional)
    contactForm.reset();
});

// Function to validate email format
function isValidEmail(email) {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
