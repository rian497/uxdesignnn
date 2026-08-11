document.addEventListener("DOMContentLoaded", function () {
    const eventButtons = document.querySelectorAll(".event-btn");

    eventButtons.forEach(function (button) {
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
                window.location.href = button.href;
            } else {
                alert("Please sign in first.");
                window.location.href = "signin.html";
            }
        });
    });
});
