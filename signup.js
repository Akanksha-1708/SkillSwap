document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector("input[placeholder='Full name']").value;
  const email = document.querySelector("input[placeholder='Email address']").value;
  const password = document.querySelectorAll("input[type='password']")[0].value;
  const confirm = document.querySelectorAll("input[type='password']")[1].value;

  if (password !== confirm) {
    alert("Passwords do not match ❌");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully ✅");

  window.location.href = "profile.html";
});
