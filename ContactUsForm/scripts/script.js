// Select form and success message elements
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Add event listener to the form for validation and submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate input fields
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show success message and log data to the console
    successMessage.style.display = 'block';
    console.log({
        name: name,
        email: email,
        message: message
    });

    // Clear form fields after submission
    form.reset();
});
