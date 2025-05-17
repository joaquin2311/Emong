
// Typing Effect
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const phrases = ["Hi I'm Joaquin Narbonita", "BSIT Student at Global Reciprocal Colleges" ];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const currentLetters = currentPhrase.substring(0, letterIndex);
  typedText.textContent = currentLetters;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    phraseIndex = !isDeleting ? (phraseIndex + 1) % phrases.length : phraseIndex;
    setTimeout(typeEffect, isDeleting ? 1000 : 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  // Auto-close navbar on link click (mobile)
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('authForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    // Simulate login success
    alert(`Welcome back, ${email}! You are now logged in.`);
    
    // You can add redirect here if needed
    // window.location.href = 'dashboard.html';
  });

  // Optional: simulate sign up redirect
  const signUpBtn = document.querySelector('.btn-secondary');
  signUpBtn.addEventListener('click', () => {
    const confirmSignup = confirm('Do you want to sign up with Google?');
    if (confirmSignup) {
      window.open('https://accounts.google.com/signup', '_blank');
    }
  });
});

// Email format validator
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

