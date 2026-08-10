// Elements for the Saved Guides page
const savedGrid = document.getElementById('savedGrid');
const savedCount = document.getElementById('savedCount');
const emptyState = document.getElementById('emptyState');

// Recalculate how many guides are currently marked as saved.
function updateSavedCount() {
    const count = savedGrid.querySelectorAll('.save-toggle.is-saved').length;
    savedCount.textContent = count + (count === 1 ? ' guide' : ' guides');
    emptyState.style.display = count === 0 ? 'block' : 'none';
}

// Toggle the saved state on a guide when its save button is clicked.
document.querySelectorAll('.save-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        btn.classList.toggle('is-saved');
        // Only refresh the count if the button lives inside the saved grid
        if (savedGrid.contains(btn)) {
            updateSavedCount();
        }
    });
});

// Set the initial count/empty-state on page load.
updateSavedCount();
