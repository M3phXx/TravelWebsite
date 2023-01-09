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
        name: "Japonki2",
        type: "flips",
        describe: "Around the World",
        img: "./images/shoppingCard-Images/flops1.jpg",
        price: "50$",
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
    for (var i = 0; i < newCards.length; i++) {
        document.getElementById("cards").innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card mt-3">
            <img src="${newCards[i].img}" alt="" class="w-100" height="200px">
            <h4 class="card-header">${newCards[i].name}</h4>
            <div class="card-body">${newCards[i].describe}</div>
            <div class="card-footer cardFooter">
                <h5>${newCards[i].price}</h5>
                <div>
                    <span class="mr-2" onclick="minus()">-</span>
                    <span>${newCards[i].amount}</span>
                    <span class="ml-2" onclick="plus()">+</span>
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
    console.log(filteredCards);
    addCards(filteredCards);
}