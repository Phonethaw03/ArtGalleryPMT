// Toggle the navigation menu for mobile view
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Ensure dropdowns work in the navigation bar
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        event.stopPropagation(); // Prevent the click event from bubbling up to other elements
        this.nextElementSibling.classList.toggle('show');
    });
});

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

// Additional custom JavaScript for account settings page can be added here
