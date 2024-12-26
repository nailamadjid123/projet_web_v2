const destinations = [
    { title: "Santorini", subtitle: "Bouatit, Travel", image: "C:/path/to/santorini.jpg" },
    { title: "Paris", subtitle: "City of Lights", image: "C:/path/to/paris.jpg" },
    { title: "Maldives", subtitle: "Tropical Paradise", image: "C:/path/to/maldives.jpg" },
];

const destinationList = document.getElementById("distinationList");

destinations.forEach(destination => {
    const item = `
        <li class="distination_item">
            <a href="#" class="distination_link">
                <img src="${destination.image}" alt="${destination.title}" class="distination_img">
                <div class="distination_text">
                    <h3 class="distination_title">${destination.title}</h3>
                    <p class="distination_subtitle">${destination.subtitle}</p>
                </div>
                <span class="material-symbols-outlined">arrow_forward</span>
            </a>
        </li>
    `;
    destinationList.innerHTML += item;
});
document.getElementById("myButton").addEventListener("click", function () {
    alert("Bouton cliqué !");
});
