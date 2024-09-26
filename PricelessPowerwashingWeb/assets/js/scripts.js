// Menu dropdown functionality
const menuItems = document.querySelectorAll('.menu-item');
let activeDropdown = null;

const dropdownContents = {
    'residential-services': `...`,  // Your actual dropdown content here
    'commercial-services': `...`    // Your actual dropdown content here
};

function toggleDropdown(menuItem) {
    const dropdown = menuItem.querySelector('.dropdown-content');
    // Dropdown toggle logic
}

menuItems.forEach(item => {
    const link = item.querySelector('.menu-link');
    if (dropdownContents[item.id]) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleDropdown(item);
        });
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu-item') && activeDropdown) {
        activeDropdown.classList.remove('active');
        activeDropdown = null;
    }
});

// Leaflet map functionality
var map = L.map('map').setView([40.5882, -83.1267], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var serviceAreaCoords = [
    [40.8537, -83.3923], [40.8520, -82.7450], [40.2810, -82.7450], [40.2800, -83.5311], 
    [40.5860, -83.5300], [40.8537, -83.3923]
];

var serviceAreaOutline = L.polygon(serviceAreaCoords, {
    color: 'red',
    weight: 3,
    fillColor: 'transparent',
    fillOpacity: 0.0
}).addTo(map);

serviceAreaOutline.bindPopup("Service Area: Marion County and Surrounding Counties");
