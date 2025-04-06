document.addEventListener("DOMContentLoaded", function () {
    // Function to show the selected tab and hide others
    function showTab(tabId) {
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.classList.remove("active-content");
        });

        document.querySelectorAll(".tab").forEach(tab => {
            tab.classList.remove("active");
        });

        document.getElementById(tabId).classList.add("active-content");
        document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add("active");
    }

    // Function to check for updates
    function checkUpdates() {
        document.getElementById("updateStatus").innerHTML = "Checking for updates...";
        document.getElementById("updateStatus").style.color = "yellow";

        setTimeout(function () {
            document.getElementById("updateStatus").innerHTML = "Your software is up to date.";
            document.getElementById("updateStatus").style.color = "green";
        }, 3000);
    }

    // Make functions globally accessible
    window.showTab = showTab;
    window.checkUpdates = checkUpdates;

    // Toggle "active" class for sidebar settings menu buttons
    const buttons = document.querySelectorAll(".settings-menu button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Extra check for updates button (if needed)
    const checkUpdatesBtn = document.getElementById("check-updates");
    const updateStatus = document.getElementById("update-status");

    if (checkUpdatesBtn && updateStatus) {
        checkUpdatesBtn.addEventListener("click", function () {
            console.log("Check for Updates button clicked!");
            updateStatus.innerHTML = "Checking for updates...";
            updateStatus.style.color = "yellow";

            setTimeout(() => {
                updateStatus.innerHTML = "Your software is up to date!";
                updateStatus.style.color = "green";
            }, 3000);
        });
    }
});

// Toggle dropdown menu visibility
function toggleMenu() {
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Logout function
function logout() {
    let confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        alert("You have been logged out.");
        window.location.href = "edulib.html";
    }
}

// Delete account function
function deleteAccount() {
    let confirmDelete = confirm("⚠️ Are you sure you want to delete your account? This action cannot be undone!");
    if (confirmDelete) {
        alert("Your account has been deleted.");
        window.location.href = "edulib.html";
    }
}

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.getElementById("menuDropdown");
    let button = document.querySelector(".dots-button");

    if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});
