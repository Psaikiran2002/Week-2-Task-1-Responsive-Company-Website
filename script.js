// ===== 1. MOBILE MENU =====
// Find the button and the menu list on the page
var menuButton = document.getElementById("menu-button");
var menuList = document.getElementById("menu");

// When the button is clicked, add or remove the class "show"
menuButton.addEventListener("click", function () {
  menuList.classList.toggle("show");
});

// ===== 2. CONTACT FORM CHECK =====
// This only runs on the Contact page (other pages have no form)
var form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var isValid = true;

  }
    // Clear old messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

  // Check each field
  if (name.trim() === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    isValid = false;
  }
  if (email.indexOf("@") === -1) {
    document.getElementById("email-error").textContent = "Please enter a valid email.";
    isValid = false;
  }
  if (message.trim().length < 10) {
    document.getElementById("message-error").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // If everything is OK, show success message and clear the form
  if (isValid) {
    document.getElementById("success").style.display = "block";
    form.reset();
  }
);
}
// ===== 3. FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();
