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
    let cards = [
        {
            id: "1",
            name: "Japonki",
            type: "flips",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "50$",
            amount: "0"
        },
        {
            id: "2",
            name: "Japonki22",
            type: "flips",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "38$",
            discount: "51$",
            amount: "0"
        },
        {
            id: "3",
            name: "Japonki3",
            type: "flips",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "50$",
            amount: "0"
        },
        {
            id: "4",
            name: "Japonki4",
            type: "shoes",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "50$",
            amount: "0"
        }
    ]
    if(!(JSON.parse(localStorage.getItem("cards"))))
    {
        localStorage.setItem("cards", JSON.stringify(cards));
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
function listProducts(cardType) {
    let filteredCards = [];
    let localCards = JSON.parse(localStorage.getItem("cards"));
    filteredCards = localCards.filter(function (e) {
        if (e.type.toLowerCase().includes(cardType)) {
            return e.type;
        }
    });
    addCards(filteredCards);
}

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
                    <a onclick="changeAmount('-', ${newCards[i].id})"><i class="bi bi-dash-circle-fill"></i></a>
                    <span id="${newCards[i].id}">${newCards[i].amount}</span>
                    <a onclick="changeAmount('+', ${newCards[i].id})"><i class="bi bi-plus-circle-fill"></i></a>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}
function changeAmount(sign , cardId) {
    /*pobiera kartę po cardId*/
    let localCards = JSON.parse(localStorage.getItem("cards"));
    let cardAmount = document.getElementById(cardId);
    let specificCard = localCards.filter((e) => {
        if(e.id == cardId){
            return e.id;
        }
    });
    /*Zmienia wartosc amount w card i localCards*/
    switch(sign) {
        case "+":
            cardAmount.innerHTML = `${parseInt(cardAmount.innerHTML) + 1}`;
            specificCard[0].amount = parseInt(specificCard[0].amount) + 1;
        break;
        case "-":
            cardAmount.innerHTML = `${parseInt(cardAmount.innerHTML) - 1}`;
            specificCard[0].amount = parseInt(specificCard[0].amount) - 1;
        break;
    }
    let newCards = localCards.filter((e)=>{
        if(e.id == specificCard.id) {
            e = specificCard;
        }
        return e;
    });
    localStorage.setItem("cards", JSON.stringify(newCards));
}