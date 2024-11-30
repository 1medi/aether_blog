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

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const popupModal = document.getElementById("popupModal");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault(); 

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      comments: document.getElementById("comments").value,
    };

    try {
      const response = await fetch("/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        popupMessage.textContent = "Your comment has been submitted successfully!";
        popupModal.classList.remove("hidden"); 
        contactForm.reset();
      } else {
        popupMessage.textContent = "An error occurred. Please try again.";
        popupModal.classList.remove("hidden");
      }
    } catch (error) {
      console.error("Error:", error);
      popupMessage.textContent = "An unexpected error occurred. Please check your connection.";
      popupModal.classList.remove("hidden"); 
    }
  });
}

// Close popup when the "Close" button is clicked
if (closePopup) {
  closePopup.addEventListener("click", () => {
    popupModal.classList.add("hidden"); 
  });
}
