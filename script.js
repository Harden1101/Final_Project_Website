document.addEventListener("DOMContentLoaded", function () {
    // Get the navbar toggler, navigation links, and navbar collapse
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Add click event listener to the navbar toggler
    navbarToggler.addEventListener("click", function () {
        // Toggle the "show" class on the navigation menu
        navbarCollapse.classList.toggle("show");

        // Toggle the aria-expanded attribute
        var isExpanded = navbarToggler.getAttribute("aria-expanded");
        navbarToggler.setAttribute("aria-expanded", isExpanded === "true" ? "false" : "true");
    });

    // Add click event listener to each link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Collapse the navigation menu
            navbarCollapse.classList.remove("show");
            navbarToggler.setAttribute("aria-expanded", "false");
        });
    });
});