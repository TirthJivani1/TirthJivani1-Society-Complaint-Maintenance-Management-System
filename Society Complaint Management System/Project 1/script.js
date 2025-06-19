let complaints = [];
let selectedComplaintIndex = null; 

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("userRole").value;

    if (username === "" || password === "") {
        alert("Please enter valid credentials.");
        return;
    }

    if (role === "admin") {
        if (username === "Admin" && password === "000000") {
            document.getElementById("adminPanel").classList.remove("hidden");
            document.getElementById("userPanel").classList.add("hidden");
            displayComplaints();
        } else {
            alert("Invalid Admin Credentials!");
        }
    } else {
        document.getElementById("userPanel").classList.remove("hidden");
        document.getElementById("adminPanel").classList.add("hidden");
    }

    displayComplaints();
}

function submitComplaint() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    
    if (title === "") {
        alert("Please enter a complaint title!");
        return;
    }

    complaints.push({ title, category, status: "Pending" });

    displayComplaints();
    document.getElementById("title").value = ""; 
}

function displayComplaints() {
    const userList = document.getElementById("complaintDisplay");
    const adminList = document.getElementById("adminComplaints");
    
    userList.innerHTML = "";
    adminList.innerHTML = "";

    complaints.forEach((comp, index) => {
        const userItem = document.createElement("li");
        userItem.textContent = `${comp.title} - ${comp.category} (${comp.status})`;
        userList.appendChild(userItem);

        const adminItem = document.createElement("li");
        adminItem.textContent = `${comp.title} - ${comp.category} (${comp.status})`;
        adminItem.dataset.index = index;
        adminItem.onclick = () => selectComplaint(index); 
        adminList.appendChild(adminItem);
    });
}

function selectComplaint(index) {
    selectedComplaintIndex = index;
    alert(`Selected complaint: ${complaints[index].title}`);
}

function updateStatus() {
    if (selectedComplaintIndex === null) {
        alert("Please select a complaint first!");
        return;
    }

    const newStatus = document.getElementById("statusUpdate").value;
    complaints[selectedComplaintIndex].status = newStatus;

    alert(`Complaint status updated to ${newStatus}!`);
    displayComplaints(); 
    selectedComplaintIndex = null; 
}
