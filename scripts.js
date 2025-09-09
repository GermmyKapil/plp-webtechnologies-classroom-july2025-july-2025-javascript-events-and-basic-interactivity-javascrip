```javascript
// script.js

// ========== Dark/Light Mode Toggle ==========
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ========== Counter Game ==========
let count = 0;
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// ========== Collapsible FAQ ==========
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  });
});

// ========== Dropdown Menu ==========
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove("show");
  }
});

// ========== Tabbed Interface ==========
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    tabContents[index].classList.add("active");
  });
});

// ========== Progress Bar with Input ==========
const progressInput = document.getElementById("progressInput");
const progressBar = document.getElementById("progressBar");

progressInput.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value < 0) value = 0;
  if (value > 100) value = 100;
  progressBar.style.width = value + "%";
});

// ========== Form Validation ==========
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    setError(name, "Name is required");
    isValid = false;
  } else {
    clearError(name);
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    setError(email, "Enter a valid email");
    isValid = false;
  } else {
    clearError(email);
  }

  // Password validation
  if (password.value.length < 6) {
    setError(password, "Password must be at least 6 characters");
    isValid = false;
  } else {
    clearError(password);
  }

  if (isValid) {
    alert("🎉 Form submitted successfully!");
    form.reset();
  }
});

function setError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.display = "block";
}

function clearError(input) {
  const error = input.nextElementSibling;
  error.textContent = "";
  error.style.display = "none";
}
```
