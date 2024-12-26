// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;
    let nextIndex = 0;
    
    // Afficher la première image au chargement
    images[currentIndex].classList.add("active");
    
    function fadeOut(element) {
        element.style.opacity = "1";
        
        let opacity = 1;
        const timer = setInterval(() => {
            if (opacity <= 0.1) {
                clearInterval(timer);
                element.style.opacity = "0";
                element.classList.remove("active");
            }
            element.style.opacity = opacity;
            opacity -= 0.1;
        }, 50);
    }
    
    function fadeIn(element) {
        element.classList.add("active");
        element.style.opacity = "0";
        
        let opacity = 0;
        const timer = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    }
    
    function showNextImage() {
        // Calculer l'index de la prochaine image
        nextIndex = (currentIndex + 1) % images.length;
        
        // Fade out l'image courante
        fadeOut(images[currentIndex]);
        
        // Fade in la prochaine image
        setTimeout(() => {
            fadeIn(images[nextIndex]);
            currentIndex = nextIndex;
        }, 500);
   
   