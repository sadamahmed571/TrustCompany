document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    let timeoutId;

    // Function to hide the navbar
    function hideNavbar() {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
    }

    // Auto-hide after 5 seconds when navbar is shown
    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        // Clear any existing timeout
        clearTimeout(timeoutId);

        // Set a new timeout to hide the navbar after 5 seconds
        timeoutId = setTimeout(hideNavbar, 8000);
    });

    // Clear timeout when navbar is hidden
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        clearTimeout(timeoutId);
    });

    // Hide navbar when clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the navbar is currently shown
        if (navbarCollapse.classList.contains('show')) {
            // Check if the click is outside the navbar collapse area and not on the toggler button
            if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
                hideNavbar();
            }
        }
    });

    // Prevent clicks inside the navbar from bubbling up and triggering the outside click handler
    navbarCollapse.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
