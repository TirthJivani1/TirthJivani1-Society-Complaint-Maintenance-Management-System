const statusTable = document.getElementById("statusTable");
const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");

complaints.forEach((c) => {
  const row = `<tr><td>${c.category}</td><td>${c.description}</td><td>${c.status}</td></tr>`;
  statusTable.innerHTML += row;
});

// Clear all complaints
// localStorage.removeItem("complaints");
// alert("All complaints have been removed.");