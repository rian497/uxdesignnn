const savedGrid = document.getElementById('savedGrid');
const savedCount = document.getElementById('savedCount');
const emptyState = document.getElementById('emptyState');

function updateSavedCount() {
    const count = savedGrid.querySelectorAll('.save-toggle.is-saved').length;
    savedCount.textContent = count + (count === 1 ? ' guide' : ' guides');
    emptyState.style.display = count === 0 ? 'block' : 'none';
}

document.querySelectorAll('.save-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        btn.classList.toggle('is-saved');
        if (savedGrid.contains(btn)) {
            updateSavedCount();
        }
    });
});

updateSavedCount();
