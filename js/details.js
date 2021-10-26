const productContainer = document.querySelector("#customID");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('game')
const url = "https://sanderolsentestsites.one/wp-json/wc/store/products/";

console.log(id);


async function fetchDetails() {

    try {
        const response = await fetch(url);
        var gameArray = await response.json();

        for (game in gameArray) {
          if (gameArray[game].name == id) {
            var gameDetails = gameArray[game];
            console.log(gameDetails);
          }
        }

        createHtml(gameDetails);
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchDetails();

function createHtml(gameDetails) {
    productContainer.innerHTML = `<div class="products">
    <img src="${gameDetails.images[0].src}">
    <h3>${gameDetails.name}</h3>
    <h3>${gameDetails.short_description}</h3>
    <a class="add-cart price" onclick="alertbox()">${gameDetails.prices.price}$</a>
    </div>`;
}