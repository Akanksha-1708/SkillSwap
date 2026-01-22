document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No account found. Please sign up first ❌");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful ✅");
    localStorage.setItem("loggedIn", "true");
    window.location.href = "profile.html";
  } else {
    alert("Wrong email or password ❌");
  }
});
