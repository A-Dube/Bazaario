const cartItems = document.getElementById('cartItems');
const total = document.getElementById('total');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
displayCart();
function displayCart() {
    let totalPrice = 0;
    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = `
        <div class="empty-state">
            Your basket is empty. Head back to the market and find something you like! 🪔
        </div>
        `;
        total.innerHTML = "";
        return;
    }
    cart.forEach(item => {
        const itemPrice = Math.round(item.price * 85);
        totalPrice += itemPrice;
        cartItems.innerHTML += `
        <div class="cart-card">
            <div class="cart-left">
                <img src="${item.thumbnail}" />
                <div class="cart-info">
                    <h3>${item.title}</h3>
                    <p>
                      ₹${itemPrice.toLocaleString('en-IN')}
                    </p>
                </div>
            </div>
            <button onclick="removeItem(${item.id})">
                Remove
            </button>
        </div>
        `;
    });
    total.innerHTML = `
        Total Bill : ₹${totalPrice.toLocaleString('en-IN')}
    `;
}
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}
