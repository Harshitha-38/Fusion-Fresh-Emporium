const menClothingLink = document.getElementById('men-clothing-link');
        const menClothingNavbar = document.getElementById('men-clothing-navbar');
        const womenClothingLink = document.getElementById('women-clothing-link');
        const womenClothingNavbar = document.getElementById('women-clothing-navbar');
        menClothingLink.addEventListener('click', function(event) {
          event.preventDefault();
          menClothingNavbar.style.display = menClothingNavbar.style.display === 'none' || menClothingNavbar.style.display === '' ? 'block' : 'none';
      });

      womenClothingLink.addEventListener('click', function(event) {
          event.preventDefault();
          womenClothingNavbar.style.display = womenClothingNavbar.style.display === 'none' || womenClothingNavbar.style.display === '' ? 'block' : 'none';
      });
      const menClothingItems = menClothingNavbar.querySelectorAll('a');
        menClothingItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                const itemType = item.getAttribute('data-item');
                window.location.href = itemType;
            });
        });
        const womenClothingItems = womenClothingNavbar.querySelectorAll('a');
        womenClothingItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                const itemType = item.getAttribute('data-item');
                window.location.href = itemType;
            });
        });