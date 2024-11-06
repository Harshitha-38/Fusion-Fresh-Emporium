const electronicsLink = document.getElementById('electronics-link');
const electronicsNavbar = document.getElementById('electronics-navbar');
const clothingLink = document.getElementById('clothing-link');
const clothingNavbar = document.getElementById('clothing-navbar');
const menClothingLink = document.getElementById('men-clothing-link');
const menClothingNavbar = document.getElementById('men-clothing-navbar');
const womenClothingLink = document.getElementById('women-clothing-link');
const womenClothingNavbar = document.getElementById('women-clothing-navbar');

electronicsLink.addEventListener('click', function(event) {
    event.preventDefault();
    electronicsNavbar.style.display = electronicsNavbar.style.display === 'none' || electronicsNavbar.style.display === '' ? 'block' : 'none';
});
const electronicsItems = electronicsNavbar.querySelectorAll('a');
electronicsItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const itemType = item.getAttribute('data-item');
        if (itemType === "laptop.html") {
            loadLaptops();
        } else if (itemType === "headphones.html") {
            loadHeadphones();
        } else if (itemType === "cameras.html") {
            window.location.href = "cameras.html"; // Direct navigation
        } else {
            window.location.href = itemType;
        }
    });
});