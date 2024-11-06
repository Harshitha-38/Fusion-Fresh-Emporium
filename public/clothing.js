const menClothingLink = document.getElementById('men-clothing-link');
        const menClothingNavbar = document.getElementById('men-clothing-navbar');
        const womenClothingLink = document.getElementById('women-clothing-link');
        const womenClothingNavbar = document.getElementById('women-clothing-navbar');
        clothingLink.addEventListener('click', function(event) {
          event.preventDefault();
          clothingNavbar.style.display = clothingNavbar.style.display === 'none' || clothingNavbar.style.display === '' ? 'block' : 'none';
      });
      const clothingItems = clothingNavbar.querySelectorAll('a');
      clothingItems.forEach(item => {
          item.addEventListener('click', function(event) {
              event.preventDefault();
              const itemType = item.getAttribute('data-item');
              if (itemType === "men-clothing.html") {
                  loadMenClothing();
              } else if (itemType === "women-clothing.html") {
                  loadWomenClothing();
              } else {
                  window.location.href = itemType;
              }

          });
      });