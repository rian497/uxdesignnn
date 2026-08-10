// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Collect the user's form input data
    const contactData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      comment: document.getElementById('comment').value
    };
    // Save data to localStorage to display on response page
    localStorage.setItem('latestContact', JSON.stringify(contactData));
    // Redirect to response page
    window.location.href = 'contact-success.html';
  });
}
