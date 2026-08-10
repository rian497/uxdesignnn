/* ==========================================================================
   SIGN IN / AUTH & NAVBAR MANAGEMENT
   ========================================================================== */

// 1. Simulate logging in
function loginUser(userName, userEmail) {
  const user = {
    name: userName || "User",
    email: userEmail || "user@domain.com",
    isLoggedIn: true
  };
  localStorage.setItem("zephra_user", JSON.stringify(user));
  updateNavbar(); // Refresh navbar appearance immediately
}

// 2. Simulate logging out
function logoutUser() {
  localStorage.removeItem("zephra_user");
  updateNavbar(); // Refresh navbar appearance
  window.location.href = "index.html"; // Redirect home on logout
}

// 3. Read user state and update Navbar UI across all pages
function updateNavbar() {
  const user = JSON.parse(localStorage.getItem("zephra_user"));
  const signInNavLink = document.querySelector('a[href="signin.html"]');

  if (!signInNavLink) return;

  if (user && user.isLoggedIn) {
    // Replace Sign In link with a User Profile / Logout link
    signInNavLink.textContent = `Sign Out (${user.name})`;
    signInNavLink.href = "#";
    signInNavLink.onclick = function (e) {
      e.preventDefault();
      logoutUser();
    };
  } else {
    // Reset to default Sign In link
    signInNavLink.textContent = "Sign In";
    signInNavLink.href = "signin.html";
    signInNavLink.onclick = null;
  }
}

// 4. Sign In / Create Account tab switcher
function switchTab(mode) {
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const tabSignIn = document.getElementById('tabSignIn');
  const tabSignUp = document.getElementById('tabSignUp');

  if (!signInForm || !signUpForm) return;

  if (mode === 'signin') {
    signInForm.classList.remove('d-none');
    signUpForm.classList.add('d-none');
    tabSignIn.classList.add('active');
    tabSignUp.classList.remove('active');
  } else {
    signInForm.classList.add('d-none');
    signUpForm.classList.remove('d-none');
    tabSignIn.classList.remove('active');
    tabSignUp.classList.add('active');
  }
}

document.addEventListener("DOMContentLoaded", function () {

  // Always refresh navbar state on load
  updateNavbar();

  // Sign In Form: log user in, then redirect 
  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const name = email.split('@')[0] || 'User';
      loginUser(name, email);
      window.location.href = 'index.html';
    });
  }

  // Sign Up Form: log user in, then redirect 
  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('registerName').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      loginUser(name, email);
      window.location.href = 'index.html';
    });
  }

});
