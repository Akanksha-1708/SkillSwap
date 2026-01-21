const form = document.querySelector("form");
const emailInput = document.querySelector("input[type='email']");
form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const email = emailInput.value;
  localStorage.setItem("loggedInUser", email);
  window.location.href = "dashboard.html";
});
