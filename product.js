const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
console.log(productId);
const productDetails = document.getElementById('productDetails');
fetch(`https://dummyjson.com/products/${productId}`)
  .then(res => res.json())
  .then(product => {
    showProductDetails(product);
  });
function showProductDetails(product){
    const indianPrice = Math.round(product.price * 85);
    productDetails.innerHTML = `
    <div class="card">
        <img src="${product.thumbnail}" />
        <div class="product-content">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <h3>
              ₹${indianPrice.toLocaleString('en-IN')}
            </h3>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        </div>
    </div>
    `;
}
function addToCart(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.title} has been added to your cart!`);
    });
}
