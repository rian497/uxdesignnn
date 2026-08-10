// Allows a Bootstrap tab on the Guides page to be opened directly using a URL hash
document.addEventListener("DOMContentLoaded", function() {

      // Check the current URL hash
      function activateTabFromHash() {
        if (window.location.hash) {
          const hash = window.location.hash;
          const targetTab = document.querySelector(`[data-bs-target="${hash}"]`);
          if (targetTab) {
            let tab = new bootstrap.Tab(targetTab);
            tab.show();
          }
        }
      }

      // Activate the correct tab on initial page load
      activateTabFromHash();
      window.addEventListener("hashchange", activateTabFromHash);
    });
