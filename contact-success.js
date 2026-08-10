// Populate the contact confirmation page with the last submitted data
document.addEventListener('DOMContentLoaded', function () {
  const raw = localStorage.getItem('latestContact');
  if (!raw) return;

  const contactData = JSON.parse(raw);

  document.getElementById('displayName').textContent = contactData.name || "-";
  document.getElementById('displayEmail').textContent = contactData.email || "-";
  document.getElementById('displayPhone').textContent = contactData.phone || "Not provided";
  document.getElementById('displayComment').textContent = contactData.comment || "-";
});
