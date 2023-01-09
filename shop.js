window.onload = () => {
    if (JSON.parse(localStorage.getItem("theme"))) {
        let theme = JSON.parse(localStorage.getItem("theme"));
        setTheme(theme);
    }
    else {
        let theme = [];
        theme[0] = "black";
        theme[1] = "225";
        theme[2] = "0.125";
        localStorage.setItem("theme", JSON.stringify(theme));
    }
}
function changeTheme() {
    let theme = JSON.parse(localStorage.getItem("theme") || "[]");
    if (theme[1] == "30") {
        theme[0] = "black";
        theme[1] = "225";
        theme[2] = "0.125"
    }
    else {
        theme[0] = "white";
        theme[1] = "30";
        theme[2] = "0.875"
    }
    localStorage.setItem("theme", JSON.stringify(theme));
    setTheme(theme);
}
function setTheme(theme) {
    document.body.style.backgroundColor = 'rgb(' + theme[1] + ',' + theme[1] + ',' + theme[1] + ')';
    let themeButton = document.getElementById("themeButton");
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.border = `1px solid rgba(0,0,0,${theme[2]})`;
    }
    if (theme[1] == "30") {
        themeButton.classList = "rounded border-light";
        themeButton.innerHTML = "Light";
    }
    else {

        themeButton.classList = "rounded bg-dark text-light border-light";
        themeButton.innerHTML = "Dark";
    }
}
let filteredCards = [];
let cards = [
    {
        name: "Japonki",
        type: "flips",
        describe: "Around the World",
        img: "./images/shoppingCard-Images/flops1.jpg",
        price: "50$",
        amount: "0"
    },
    {
        name: "Japonki22",
        type: "flips",
        describe: "Around the World",
        img: "./images/shoppingCard-Images/flops1.jpg",
        price: "38$",
        discount: "51$",
        amount: "0"
    },
    {
        name: "Japonki3",
        type: "flips",
        describe: "Around the World",
        img: "./images/shoppingCard-Images/flops1.jpg",
        price: "50$",
        amount: "0"
    },
    {
        name: "Japonki4",
        type: "shoes",
        describe: "Around the World",
        img: "./images/shoppingCard-Images/flops1.jpg",
        price: "50$",
        amount: "0"
    }
]
function addCards(newCards) {
    document.getElementById("cards").innerText = "";
    let discount = ``;  
    for (var i = 0; i < newCards.length; i++) {
        if(newCards[i].discount) {
            discount = newCards[i].discount;
        }
        else
        {
            discount = ``;
        }
        document.getElementById("cards").innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card mt-3">
            <img src="${newCards[i].img}" alt="" class="w-100" height="200px">
            <h4 class="card-header">${newCards[i].name}</h4>
            <div class="card-body">${newCards[i].describe}</div>
            <div class="card-footer cardFooter">
                <del class="changeWidth">${discount}</del>
                <h5>${newCards[i].price}</h5>
                <div class="changeWidth">
                    <a onclick="changeAmount('-')"><i class="bi bi-dash-circle-fill"></i></a>
                    <span>${newCards[i].amount}</span>
                    <a onclick="changeAmount('+')"><i class="bi bi-plus-circle-fill"></i></a>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}
function listProducts(cardType) {
    filteredCards = cards.filter(function (e) {
        if (e.type.toLowerCase().includes(cardType)) {
            return e.type;
        }
    });
    addCards(filteredCards);
}