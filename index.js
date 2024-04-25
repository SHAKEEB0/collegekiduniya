
// index.js

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Listen for scroll events
  window.addEventListener("scroll", function () {
      // Check if the page has scrolled beyond a certain threshold
      if (window.scrollY > 50) {
          // Add the class to change the navbar color
          navbar.classList.add("navbar-scrolled");
      } else {
          // Remove the class to revert to the transparent navbar
          navbar.classList.remove("navbar-scrolled");
      }
  });
});


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the navbar toggler button
  const navbarToggler = document.querySelector(".navbar-toggler");
  
  // Get the navbar collapse content
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Add click event listener to the navbar toggler button
  navbarToggler.addEventListener("click", function () {
      // Toggle the "show" class on the navbar collapse content
      navbarCollapse.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var aboutLink = document.querySelector('.navbar-nav .nav-item:nth-child(3) .nav-link');
  var subMenu = document.querySelector('.sub-menu');

  aboutLink.addEventListener('click', function () {
    if (subMenu.style.display === 'block') {
      subMenu.style.display = 'none';
    } else {
      subMenu.style.display = 'block';
    }
  });
});