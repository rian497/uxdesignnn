document.addEventListener("DOMContentLoaded", function () {

    const registerButtons = document.querySelectorAll(".event-btn");

    registerButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const rawUser = localStorage.getItem("zephra_user");
            let user = null;

            if (rawUser) {
                try {
                    user = JSON.parse(rawUser);
                } catch (error) {
                    localStorage.removeItem("zephra_user");
                }
            }

            if (user && user.isLoggedIn) {
                window.location.href = "contact.html";
            } else {
                alert("Please sign in before submitting an RSVP.");
                window.location.href = "signin.html";
            }

        });

    });

});