const baseUrl = "https://sanderolsentestsites.one/wp-json/wc/store/products";
const productContainer = document.querySelector("#customID");

async function getProducts(baseUrl) {
    const response = await fetch (baseUrl);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="products">
        <img src="${product.images[0].src}">
        <h3>${product.name}</h3>
        <a class="add-cart price" onclick="alertbox()">${product.prices.price}$</a>
        </div>`;
    })

}

getProducts(baseUrl);