// Feedback Form Submission
const feedbackForm = document.getElementById('FeedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect the user's form input data
    const feedbackData = {
      topic: document.querySelector('input[name="topic"]:checked')?.nextElementSibling.textContent || "General",
      name: document.getElementById('userName').value,
      email: document.getElementById('userEmail').value,
      message: document.getElementById('userMessage').value,
      sentiment: document.querySelector('input[name="sentiment"]:checked')?.nextElementSibling.textContent || "N/A"
    };

    // Save data to localStorage to display on response page
    localStorage.setItem('latestFeedback', JSON.stringify(feedbackData));

    // Redirect to response page
    window.location.href = 'feedback-success.html';
  });
}