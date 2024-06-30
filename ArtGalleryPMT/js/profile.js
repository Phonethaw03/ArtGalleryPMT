// profile.js

// Toggle the navigation menu for mobile view
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Ensure dropdowns work in the navigation bar
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        event.stopPropagation(); // Prevent the click event from bubbling up to other elements
        this.nextElementSibling.classList.toggle('show');
    });
});
// Function to confirm logout
function confirmLogout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "../html/logout.html"; // Redirect to logout page
    } else {
        // Do nothing or handle the cancellation
    }
}
// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        });
    }
});
