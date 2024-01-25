document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.navbar-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.querySelector('.navbar-toggler').click(); // Simulate a click on the hamburger icon
      });
    });
  });
  
  
  