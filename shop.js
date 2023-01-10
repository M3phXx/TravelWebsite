window.onload = () => {
    discountFilter();
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
            name: "Japonki311",
            type: "flips",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "50$",
            discount: "51$",
            amount: "0"
        },
        {
            id: "8",
            name: "Japonki3112",
            type: "flips",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "50$",
            amount: "0"
        },
        {
            id: "9",
            name: "Japonki31",
            type: "flips",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "50$",
            amount: "0"
        },
        {
            id: "4",
            name: "Japonki3",
            type: "flips",
            describe: "Around the World",
            img: "./images/shoppingCard-Images/flops1.jpg",
            price: "50$",
            amount: "0"
        },
        {
            id: "5",
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
    let cartAmount = document.getElementById("cartAmount");
    cartAmount.innerHTML = JSON.parse(localStorage.getItem("cartAmount"));
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
        console.log("xD");
    }
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
}
function setTheme(theme) {
    document.body.style.backgroundColor = 'rgb(' + theme[1] + ',' + theme[1] + ',' + theme[1] + ')';
    let themeButton = document.getElementById("themeButton");
    document.getElementsByClassName("filters")[0].style.color = theme[0];
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
function clearCart() {
    document.getElementById("cartCards").innerHTML = "";
}
/*-------------Filters--------------*/
function listProducts(cardType) {
    clearCart();
    let localCards = JSON.parse(localStorage.getItem("cards"));
    let filteredCards = localCards.filter(function (e) {
        if (e.type.includes(cardType)) {
            return e.type;
        }
    });
    let src = document.getElementById("cards");
    addCards(filteredCards, src);
}
function backetAddCarts() {

    let localCards = JSON.parse(localStorage.getItem("cards"));
    let filteredCards = localCards.filter((e)=>{
        if(e.amount > 0){
            return e;
        }
    });
    let src = document.getElementById("cartCards");
    addCards(filteredCards, src);
}
function discountFilter() {
    let localCards = JSON.parse(localStorage.getItem("cards"));
        let filteredCards = localCards.filter(function (e) {
        if (e.discount) {
            return e.type;
        }
    });
    console.log(filteredCards);
    let src = document.getElementById("cards");
    addCards(filteredCards, src);
}
/*-------------addCards--------------*/
function addCards(newCards, source) {
    source.innerHTML = "";
    let discount = ``;
    for (var i = 0; i < newCards.length; i++) { /*Dodaje discount do kart*/
        if(newCards[i].discount) {
            discount = newCards[i].discount;
        }
        else
        {
            discount = ``;
        }
        source.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
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
            if(parseInt(cardAmount.innerHTML) < 9){
            cardAmount.innerHTML = `${parseInt(cardAmount.innerHTML) + 1}`;
            specificCard[0].amount = parseInt(specificCard[0].amount) + 1;
            console.log(cardAmount.innerHTML);
            }
        break;
        case "-":
            if(parseInt(cardAmount.innerHTML) > 0){
                cardAmount.innerHTML = `${parseInt(cardAmount.innerHTML) - 1}`;
                specificCard[0].amount = parseInt(specificCard[0].amount) - 1;
            }
        break;
    }
    let newCards = localCards.filter((e)=>{
        if(e.id == specificCard.id) {
            e = specificCard;
        }
        return e;
    });
    localStorage.setItem("cards", JSON.stringify(newCards));
    /* Zmienia warosc koszyka */
    let cartAmount = document.getElementById("cartAmount");
    let count = 0;
    let amountOfProducts = newCards.filter((e)=>{
        count += parseInt(e.amount);
    });
    localStorage.setItem("cartAmount", JSON.stringify(count));
    cartAmount.innerHTML = count;
}

function newAlert() {
    let navContainer = document.getElementsByClassName("navContainer")[0];
    let newAlert = document.createElement("div");
    newAlert.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show");
    newAlert.innerHTML = `
        <h4>Zamowienie zlozone</h4>
        <p>Twoje zamowienie zostalo zgloszone poprawnie!</p>
        <button class="close" data-dismiss="alert">&times;</button>
        `;
        let b5Alert = new bootstrap.Alert(newAlert);
        navContainer.appendChild(newAlert);
        setTimeout(()=>{
            b5Alert.close();
        },4000);
}
function orderProducts() {
    newAlert();
    clearCart();
    let cartAmount = document.getElementById("cartAmount");
    cartAmount.innerHTML = "";
    let localProducts = JSON.parse(localStorage.getItem("cards"));
    let clearAmount = localProducts.filter((e)=>{
        e.amount = "0";
        return e;
    });
    localStorage.setItem("cards", JSON.stringify(clearAmount));
}