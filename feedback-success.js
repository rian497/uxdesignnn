// Read saved submission data from localStorage and display it on screen
document.addEventListener("DOMContentLoaded", function() {
    let savedData = JSON.parse(localStorage.getItem('latestFeedback'));
    if (savedData) {
        document.getElementById('displayTopic').textContent = savedData.topic;
        document.getElementById('displayName').textContent = savedData.name;
        document.getElementById('displayEmail').textContent = savedData.email;
        document.getElementById('displaySentiment').textContent = savedData.sentiment;
        document.getElementById('displayMessage').textContent = savedData.message;
    }
});
