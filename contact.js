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
            subject: document.getElementById('subject').value,
			comment: document.getElementById('comment').value
		};
		// Save data to localStorage to display on response page
		localStorage.setItem('latestContact', JSON.stringify(contactData));
		// Redirect to response page
		window.location.href = 'contact-success.html';
	});
}
document.addEventListener("DOMContentLoaded", function () {
    const subjectSelect = document.getElementById("subject");
    const rsvpOption = document.getElementById("rsvpOption");
    const tournamentOption = document.getElementById("tournamentOption");

    const rawUser = localStorage.getItem("zephra_user");
    let user = null;

    if (rawUser) {
        try {
            user = JSON.parse(rawUser);
        } catch (error) {
            localStorage.removeItem("zephra_user");
        }
    }

    // Disable event subjects if user is not signed in
    if (!user || !user.isLoggedIn) {
        rsvpOption.disabled = true;
        tournamentOption.disabled = true;

        rsvpOption.textContent =
            "RSVP for Community Session - Sign In Required";

        tournamentOption.textContent =
            "Sign Up for Tournament - Sign In Required";
    }

    // Automatically select subject from URL
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");

    if (subject) {
        subjectSelect.value = subject;
    }
});
