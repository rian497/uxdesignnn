// Read saved submission data from localStorage and display it on screen
document.addEventListener("DOMContentLoaded", function() {
    const rawData = localStorage.getItem('latestFeedback');

    if (!rawData) {
        console.log("No feedback data found.");
        return;
    }

    try {
        const savedData = JSON.parse(rawData);

        document.getElementById('displayTopic').textContent = savedData.topic;
        document.getElementById('displayName').textContent = savedData.name;
        document.getElementById('displayEmail').textContent = savedData.email;
        document.getElementById('displaySentiment').textContent = savedData.sentiment;
        document.getElementById('displayMessage').textContent = savedData.message;

    } catch (error) {
        console.error("Unable to read feedback data:", error);
    }
});
