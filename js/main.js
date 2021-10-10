let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Cyberpunk',
        tag: 'Cyberpunk',
        price: 29.99,
        inCart: 0
    },
    {
        name: 'Ping Pong',
        tag: 'Ping Pong',
        price: 9.99,
        inCart: 0
    },
    {
        name: 'Assassin',
        tag: 'Assassin',
        price: 19.99,
        inCart: 0
    },
    {
        name: 'black',
        tag: 'black',
        price: 24.99,
        inCart: 0
    },
    {
        name: 'Super Duper',
        tag: 'Super Duper',
        price: 5.99,
        inCart: 0
    },
    {
        name: 'Furious',
        tag: 'Furious',
        price: 13.99,
        inCart: 0
    },
    {
        name: 'Space War',
        tag: 'Space War',
        price: 12.99,
        inCart: 0
    },
    {
        name: 'Racing',
        tag: 'Racing',
        price: 17.99,
        inCart: 0
    },
    {
        name: 'Forge Legend',
        tag: 'Forge Legend',
        price: 8.99,
        inCart: 0
    },
    {
        name: 'Boxer',
        tag: 'Boxer',
        price: 3.99,
        inCart: 0
    },
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1); 
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    }
}
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    //console.log("The products price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("my cartcost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product1");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product1">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price1">$${item.price}</div>
            <div class="quantity1">
                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class="total1">
                $${item.inCart * item.price}
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="baskerTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost},00
                </h4>
        `
    }
}
function alertbox() {
    alert("Item Added To Cart");
}

onLoadCartNumbers();
displayCart();

