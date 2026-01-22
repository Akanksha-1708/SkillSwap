document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.querySelector("input[type='text']").value;
  const bio = document.querySelector("textarea").value;

  const teach = document.querySelectorAll("select")[0].value;
  const learn = document.querySelectorAll("select")[1].value;
  const language = document.querySelectorAll("select")[2].value;

  const profile = { username, bio, teach, learn, language };

  localStorage.setItem("profile", JSON.stringify(profile));

  alert("Profile saved successfully 🎉");
  window.location.href = "dashboard.html";
});
