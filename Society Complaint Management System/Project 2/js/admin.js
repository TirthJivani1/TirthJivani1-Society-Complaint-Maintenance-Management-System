const adminTable = document.getElementById("adminTable");
const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");

function updateTable() {
  adminTable.innerHTML = "";
  complaints.forEach((c, i) => {
    adminTable.innerHTML += `<tr>
      <td>${c.category}</td>
      <td>${c.description}</td>
      <td>${c.status}</td>
      <td>
        <select onchange="changeStatus(${i}, this.value)">
          <option ${c.status === "Pending" ? "selected" : ""}>Pending</option>
          <option ${c.status === "In Progress" ? "selected" : ""}>In Progress</option>
          <option ${c.status === "Resolved" ? "selected" : ""}>Resolved</option>
        </select>
      </td>
    </tr>`;
  });
}

function changeStatus(index, newStatus) {
  complaints[index].status = newStatus;
  localStorage.setItem("complaints", JSON.stringify(complaints));
  updateTable();
}

function sendAnnouncement() {
  const message = document.getElementById("announcement").value;
  if (message.trim() !== "") {
    alert("Announcement sent:\n" + message);
    document.getElementById("announcement").value = "";
  }
}

function updatePayments() {
  const payments = JSON.parse(localStorage.getItem("payments") || "[]");
  const paymentList = document.getElementById("paymentList");
  paymentList.innerHTML = payments.map(p => `<li>${p.date} — ₹${p.amount}</li>`).join("");
}

updateTable();
updatePayments();