document.addEventListener("DOMContentLoaded", function() {
      function activateTabFromHash() {
        if (window.location.hash) {
          let hash = window.location.hash;
          let targetTab = document.querySelector(`[data-bs-target="${hash}"]`);
          if (targetTab) {
            let tab = new bootstrap.Tab(targetTab);
            tab.show();
          }
        }
      }

      activateTabFromHash();
      window.addEventListener("hashchange", activateTabFromHash);
    });