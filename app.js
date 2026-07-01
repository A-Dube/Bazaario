let allProducts = [];
const productsContainer = document.getElementById('products');
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
fetch("https://dummyjson.com/products?limit=194")
    .then(res => res.json())
    .then(data => {
        allProducts = data.products;
        displayProducts(allProducts);
    });
function displayProducts(products) {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        productsContainer.innerHTML += `
        <div class="card">
            <a href="product.html?id=${product.id}">
                <img src="${product.thumbnail}" />
            </a>
            <h3>${product.title}</h3>
            <p>
              ₹${Math.round(product.price * 85).toLocaleString('en-IN')}
            </p>
            <a href="product.html?id=${product.id}">
                <button>
                    View Details
                </button>
            </a>
        </div>
        `;
    });
}
