document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Payment processed successfully!");
  const payments = JSON.parse(localStorage.getItem("payments") || "[]");
  payments.push({ date: new Date().toLocaleDateString(), amount: this.amount.value });
  localStorage.setItem("payments", JSON.stringify(payments));
  this.reset();
});