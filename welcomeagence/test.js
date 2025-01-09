document.addEventListener("DOMContentLoaded", () => {
    const airplane = document.querySelector(".airplane");
    const path = document.querySelector("#flight-path");
  
    // S'assurer que l'avion est visible au début
    airplane.style.visibility = "visible";
    
    // Démarrer l'animation CSS
    // L'animation est maintenant gérée par CSS, donc nous n'avons pas besoin 
    // de beaucoup de JavaScript
    
    // Optionnel : Ajouter une classe pour démarrer l'animation
    airplane.classList.add('animate');
  });