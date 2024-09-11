// Placeholder for future interactive features
console.log('AryaDetailingShop website loaded');
// Handle the form submission
document.getElementById('customer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You would normally send this data to your server here
    // For now, we'll just display a success message
    document.getElementById('form-response').innerText = `Thank you, ${name}! We'll get in touch with you at ${email} soon.`;

    // Reset the form
    document.getElementById('customer-form').reset();
});
