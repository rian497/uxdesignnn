const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const sendBtn = document.getElementById('sendBtn');
const statusBox = document.getElementById('formStatus');

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showStatus(message, type) {
    statusBox.textContent = message;
    statusBox.className = 'form-status show ' + type;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValid = isValidEmail(emailInput.value.trim());
    emailError.classList.toggle('show', !emailValid);
    emailInput.style.borderColor = emailValid ? '#DCD7C7' : '#954726';

    if (!emailValid) {
        statusBox.classList.remove('show');
        return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    setTimeout(function () {
        showStatus("Thanks — we'll get back to you shortly.", 'success');
        form.reset();
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
    }, 700);
});

emailInput.addEventListener('input', function () {
    if (emailError.classList.contains('show') && isValidEmail(emailInput.value.trim())) {
        emailError.classList.remove('show');
        emailInput.style.borderColor = '#DCD7C7';
    }
});
