// typed js 

var typed = new Typed('#typing-content', {
    strings: ["Inspire !","Ideate !!", "Innovate !!!",],
    typeSpeed: 200,
    backSpeed: 150,
    showCursor:false,
    loop:true,
  });


// CLOSE NAV ON CLICK

// document.addEventListener("DOMContentLoaded", function() {
//   var navLinks = document.querySelectorAll(".navbar-nav>li>a");
//   navLinks.forEach(function(link) {
//     link.addEventListener("click", function() {
//       var navbarCollapse = document.querySelector(".navbar-collapse");
//       if (navbarCollapse.classList.contains("show")) {
//         navbarCollapse.classList.remove("show");
//       }
//     });
//   });
// });


// AOS INIT

AOS.init()