document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find(u => u.username === username) || username === "Admin") {
    alert("Username already exists or reserved.");
  } else {
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully! Please log in.");
    window.location.href = "login.html";
  }
});