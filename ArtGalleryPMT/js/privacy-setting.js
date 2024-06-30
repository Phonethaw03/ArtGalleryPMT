document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Add form submission handling logic here
        const privacyOption = document.getElementById('privacy-option').value;
        const notifications = document.getElementById('notifications').value;
        const password = document.getElementById('password').value;
        const twoFactor = document.getElementById('2fa').value;
        
        // Placeholder for actual form submission logic
        console.log("Privacy Option:", privacyOption);
        console.log("Notifications:", notifications);
        console.log("New Password:", password);
        console.log("Two-Factor Authentication:", twoFactor);
        
        alert("Changes saved successfully!");
    });

    const downloadButton = document.querySelector("button.btn-info");
    downloadButton.addEventListener("click", function() {
        // Placeholder for actual data download logic
        alert("Your data is being prepared for download...");
        // Simulate data download
        setTimeout(() => {
            alert("Data download complete!");
        }, 2000);
    });

    const deleteButton = document.querySelector("button.btn-danger");
    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            // Placeholder for actual account deletion logic
            alert("Your account has been deleted.");
        }
    });
});
