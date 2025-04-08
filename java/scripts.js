// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Newsletter Handling
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    const message = document.getElementById('newsletterMessage');
    
    // Simple validation
    if (!validateEmail(email)) {
        message.textContent = "Please enter a valid email address";
        return;
    }

    // Save to localStorage
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    subscribers.push(email);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));

    message.textContent = "Thanks for subscribing!";
    this.reset();
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}