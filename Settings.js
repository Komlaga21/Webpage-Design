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
        // Show "Checking for updates"
        document.getElementById("updateStatus").innerHTML = "Checking for updates...";
        document.getElementById("updateStatus").style.color = "yellow"; // Set color to yellow

        // Simulate an update check process (this is where you'd normally fetch from a server)
        setTimeout(function() {
            // After 3 seconds, show "Your software is up to date"
            document.getElementById("updateStatus").innerHTML = "Your software is up to date.";
            document.getElementById("updateStatus").style.color = "green"; // Set color to green
        }, 3000); // 3-second delay
    }

    // Make functions accessible from HTML
    window.showTab = showTab;
    window.checkUpdates = checkUpdates;

    // Manage "active" class on settings menu buttons
    const buttons = document.querySelectorAll(".settings-menu button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            
            // Add 'active' class only to the clicked button
            this.classList.add("active");
        });
    });

    // Optional: Adding event listener to check for updates button
    const checkUpdatesBtn = document.getElementById("check-updates");
    const updateStatus = document.getElementById("update-status");

    if (checkUpdatesBtn && updateStatus) {
        checkUpdatesBtn.addEventListener("click", function () {
            console.log("Check for Updates button clicked!"); // Debugging line
            updateStatus.innerHTML = "Checking for updates...";
            updateStatus.style.color = "yellow"; // Set color to yellow

            setTimeout(() => {
                updateStatus.innerHTML = "Your software is up to date!";
                updateStatus.style.color = "green"; // Set color to green
            }, 3000); // 3-second delay
        });
    }
});
// Function to toggle the menu
function toggleMenu() {
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Function to log out
function logout() {
    let confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        alert("You have been logged out.");
        // Redirect to login page or perform logout action
        window.location.href = "login.html"; 
    }
}

// Function to delete account
function deleteAccount() {
    let confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmDelete) {
        alert("Your account has been deleted.");
        // Perform account deletion logic here
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
// Function to log out and redirect to the sign-in page
function logout() {
    let confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        alert("You have been logged out.");
        window.location.href = "edulib.html"; // Update with your actual sign-in page
    }
}

// Function to delete the account and redirect to the sign-in page
function deleteAccount() {
    let confirmDelete = confirm("⚠️ Are you sure you want to delete your account? This action cannot be undone!");
    if (confirmDelete) {
        alert("Your account has been deleted.");
        window.location.href = "edulib.html"; // Update with the appropriate page
    }
}
<script>
  function openBook(pdfPath) {
    document.getElementById("book-grid").style.display = "none";
    document.getElementById("reader").style.display = "flex";
    document.getElementById("pdf-viewer").src = pdfPath;
  }

  function closeBook() {
    document.getElementById("reader").style.display = "none";
    document.getElementById("pdf-viewer").src = "";
    document.getElementById("book-grid").style.display = "flex";
  }
</script>
