document.getElementById("complaintForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");
  complaints.push({ category, description, status: "Pending" });
  localStorage.setItem("complaints", JSON.stringify(complaints));
  alert("Complaint submitted.");
  this.reset();
});