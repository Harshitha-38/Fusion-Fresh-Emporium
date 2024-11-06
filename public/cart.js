let cart = [];
        let total = 0;

        function addToCart(itemName, itemPrice) {
            const item = {
                name: itemName,
                price: itemPrice
            };

            cart.push(item);
            total += itemPrice;

            updateCartDisplay();
        }

        function updateCartDisplay() {
            document.getElementById('cart-count').innerText = cart.length;
            document.getElementById('total-price').innerText = total.toFixed(2);

            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = '';

            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerText = `${item.name} - $${item.price.toFixed(2)}`;
                cartItemsContainer.appendChild(itemDiv);
            });
        }

        function toggleCartMediumBox() {
            const cartBoxMedium = document.getElementById('cart-box-medium');
            cartBoxMedium.classList.toggle('active');
        }

        document.getElementById('cart-box').addEventListener('click', function() {
            toggleCartMediumBox();
        });