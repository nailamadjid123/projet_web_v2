// script.js
document.addEventListener("DOMContentLoaded", () => {
    const airplane = document.querySelector(".airplane");
    const path = document.querySelector("#flight-path");
  
    const length = path.getTotalLength();
  
    airplane.style.offsetPath = `path("${path.getAttribute("d")}")`;
    airplane.style.offsetDistance = "0%";
    airplane.style.transition = "offset-distance 4s ease-in-out";
  
    // Start animation
    setTimeout(() => {
      airplane.style.offsetDistance = "100%";
    }, 900); // Delay to start animation
  });
  