
AOS.init();
$(document).ready(function() {
  // Define a function to update the counter
  
  function updateCounter() {
    const counters = document.querySelectorAll(".count");
  
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = +counter.getAttribute("data-speed");
      const increment = target / speed;
  
      let currentValue = 0; // Start from 0
  
      const updateCount = () => {
        if (currentValue < target) {
          currentValue += increment;
          counter.textContent = Math.ceil(currentValue);
          setTimeout(updateCount, 1); // Increase the delay to slow it down
        } else {
          counter.textContent = target;
        }
      };
  
      updateCount();
    });
  }
  
  updateCounter();
  
  var hasScrolledPast = false;

  // Function to check the active media query
  function checkActiveMediaQuery() {
    if (window.matchMedia("(min-width: 320px) and (max-width: 900px)").matches) {
      // Execute code for small screens (e.g., mobile phones)
      $(window).scroll(function() {
        var $height = $(window).scrollTop();

        // Check if the user has scrolled past the specific point and the function hasn't been called yet
        if ($height > 600 && !hasScrolledPast) {
          updateCounter();
          hasScrolledPast = true; // Set the flag to true so that the function won't be called again
        }
      });
    } else if (window.matchMedia("(min-width: 900px) and (max-width: 1023px)").matches) {
      // Execute code for medium screens (e.g., tablets)
      // Add your tablet-specific code here
      $(window).scroll(function() {
        var $height = $(window).scrollTop();

        // Check if the user has scrolled past the specific point and the function hasn't been called yet
        if ($height > 400 && !hasScrolledPast) {
          updateCounter();
          hasScrolledPast = true; // Set the flag to true so that the function won't be called again
        }
      });
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
      // Execute code for large screens (e.g., desktops)
      // Add your desktop-specific code here
      $(window).scroll(function() {
        var $height = $(window).scrollTop();

        // Check if the user has scrolled past the specific point and the function hasn't been called yet
        if ($height > 1130 && !hasScrolledPast) {
          updateCounter();
          hasScrolledPast = true; // Set the flag to true so that the function won't be called again
        }
      });
    }
  }

  // Call the function to check the active media query and execute code accordingly
  checkActiveMediaQuery();

  // Handle window resize events to re-check the active media query
  $(window).resize(checkActiveMediaQuery);
});
 //working file
// document.addEventListener("DOMContentLoaded", function () {
//    const scrollPosition = window.scrollY;
    


// var hasScrolledPast = false; // Flag to track if the user has scrolled past the specific point

// $(window).scroll(function() {
//   var $height = $(window).scrollTop();
  
//   // Check if the user has scrolled past the specific point and the function hasn't been called yet
//   if ($height > 1130 && !hasScrolledPast) {
//     updatecounter();
//     hasScrolledPast = true; // Set the flag to true so that the function won't be called again
//   }
// });


//  function updatecounter() {
//     const counters = document.querySelectorAll(".count");
//      // Speed of the counting animation (in milliseconds)
  
//     counters.forEach(counter => {
//       const target = +counter.getAttribute("data-target");
//       const speed = +counter.getAttribute("data-speed");
//       const increment = target / speed;
  
//       const updateCount = () => {
//         const currentValue = +counter.textContent;
//         if (currentValue < target) {
//           counter.textContent = Math.ceil(currentValue + increment);
//           setTimeout(updateCount, 1);
//         } else {
//           counter.textContent = target;
//         }
//       };
  
//       updateCount();
//     });
//   };

// }
// );






// document.addEventListener("DOMContentLoaded", function () {
//   const countItems = document.querySelectorAll(".count");
//   const counterSection = document.querySelector(".counts");
  
//   let isCounting = false;

//   function updateCounters() {
//       const scrollPosition = window.scrollY;
//       const sectionPosition = counterSection.offsetTop;

//       // Check if the user has scrolled to or past the counter section
//       if (scrollPosition >= sectionPosition && !isCounting) {
//           countItems.forEach((item) => {
//               const targetValue = parseInt(item.getAttribute("data-target"));
//               let currentCount = 0;
              
//               const increment = Math.ceil(targetValue / 100); // Adjust the speed here

//               const interval = setInterval(() => {
//                   if (currentCount < targetValue) {
//                       currentCount += increment;
//                       item.textContent = currentCount;
//                   } else {
//                       clearInterval(interval);
//                   }
//               }, 10); // Adjust the interval as needed for the counting speed

//               isCounting = true;
//           });
//       }
//   }

//   // Add an event listener to update the counters when the user scrolls
//   window.addEventListener("scroll", updateCounters);

//   // Initialize AOS (if you're using it)
//   AOS.init();
// });






// console.log(scrollPosition);

//    $(window).scroll(function() {
//     var $height = $(window).scrollTop();
//     if($height > 1139) {
//      updatecounter();
     
//     }
     
//   });
 



