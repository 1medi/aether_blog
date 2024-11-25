// Dark mode toggle
const themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggler.textContent = "☀️"; // Switch to sun icon
  } else {
    themeToggler.textContent = "🌙"; // Switch to moon icon
  }
});
