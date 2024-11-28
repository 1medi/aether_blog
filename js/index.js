// Light/Dark Mode Toggle
const themeToggler = document.getElementById("theme-toggler");
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
rootElement.setAttribute("data-theme", savedTheme);
themeToggler.textContent = savedTheme === "dark" ? "☀️" : "🌙";

themeToggler.addEventListener("click", () => {
  const currentTheme = rootElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  rootElement.setAttribute("data-theme", newTheme);
  themeToggler.textContent = newTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", newTheme);
});
