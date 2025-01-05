// FAQ Accordion
document.querySelectorAll('.box-question').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.span2');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Email Validation
const emailInput = document.querySelector('.em');
const emailButton = document.querySelector('.red-btn-em');
emailButton.addEventListener('click', () => {
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        alert('Please enter a valid email address!');
    } else {
        alert('Thank you for subscribing!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
