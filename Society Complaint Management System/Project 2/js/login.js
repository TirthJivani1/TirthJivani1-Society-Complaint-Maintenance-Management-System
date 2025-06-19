document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (username === "Admin" && password === "000000") {
    alert("Welcome Admin!");
    window.location.href = "admin.html";

  } else if (username === "User" && password === "111111") {
    alert("Welcome User!");
    window.location.href = "dashboard.html";

  } else {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", username);
      alert(`Welcome ${username}!`);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials.");
    }
  }
});