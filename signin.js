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

// Global Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  
  // Sign In Form Redirect
  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  // Sign Up Form Redirect
  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

});
/* ==========================================================================
   USER AUTHENTICATION & NAVBAR MANAGEMENT
   ========================================================================== */

// 1. Simulate logging in
function loginUser(userName, userEmail) {
  const user = {
    name: userName || "User",
    email: userEmail || "user@domain.com",
    isLoggedIn: true
  };
  localStorage.setItem("zephra_user", JSON.stringify(user));
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
    // Replace "Sign In" link with a User Profile / Logout link
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