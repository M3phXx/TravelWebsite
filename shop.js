window.onload = () => {
    /* Ustawia Theme */
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
    /* Karty */
    let cards = [
        {
            id: "1",
            name: "Bathing Shoes",
            type: "flops",
            describe: "",
            img: "./images/shoppingCard-Images/flops/flopsBathingShoes.jpg",
            price: "34.99$",
            amount: "0"
        },
        {
            id: "2",
            name: "Beach Sand Sea",
            type: "flops",
            describe: "",
            img: "./images/shoppingCard-Images/flops/flopsBeachSandSea.jpg",
            price: "39.99$",
            discount: "50$",
            amount: "0"
        },
        {
            id: "3",
            name: "Pink",
            type: "flops",
            describe: "",
            img: "./images/shoppingCard-Images/flops/flopsbeach.jpg",
            price: "34.99$",
            discount: "40$",
            amount: "0"
        },
        {
            id: "4",
            name: "Travel Lake",
            type: "shoes",
            describe: "",
            img: "./images/shoppingCard-Images/shoes/shoesTravelLake.jpg",
            price: "89.99$",
            amount: "0"
        },
        {
            id: "5",
            name: "Sport",
            type: "shoes",
            describe: "",
            img: "./images/shoppingCard-Images/shoes/shoesSport.jpg",
            price: "85$",
            discount: "99.99$",
            amount: "0"
        },
        {
            id: "6",
            name: "Forest",
            type: "shoes",
            describe: "",
            img: "./images/shoppingCard-Images/shoes/shoesForest.jpg",
            price: "89.99$",
            amount: "0"
        },
        {
            id: "7",
            name: "City",
            type: "sunglasses",
            describe: "",
            img: "./images/shoppingCard-Images/sunglasses/sunglassesCity.jpg",
            price: "49.99$",
            amount: "0"
        },
        {
            id: "8",
            name: "Shades Eyewear",
            type: "sunglasses",
            describe: "",
            img: "./images/shoppingCard-Images/sunglasses/sunglassesShadesEyewear.jpg",
            price: "44.49$",
            amount: "0"
        },
        {
            id: "9",
            name: "Fashion",
            type: "sunglasses",
            describe: "",
            img: "./images/shoppingCard-Images/sunglasses/sunglassesFashion.jpg",
            price: "30$",
            discount: "39.99$",
            amount: "0"
        },

        {
            id: "10",
            name: "ShadesEyewear",
            type: "sunglasses",
            describe: "",
            img: "./images/shoppingCard-Images/sunglasses/sunglassesSwimming.jpg",
            price: "15$",
            discount: "29.99$",
            amount: "0"
        },
        {
            id: "11",
            name: "Box",
            type: "suitcases",
            describe: "",
            img: "./images/shoppingCard-Images/suitcases/suitcasesBox.jpg",
            price: "115.99$",
            amount: "0"
        },
        {
            id: "12",
            name: "Vintage Open",
            type: "suitcases",
            describe: "",
            img: "./images/shoppingCard-Images/suitcases/suitcasesVintageOpen.jpg",
            price: "79.99$",
            amount: "0"
        },
        {
            id: "13",
            name: "Teddy Bear",
            type: "suitcases",
            describe: "",
            img: "./images/shoppingCard-Images/suitcases/suitcaseTeddyBear.jpg",
            price: "79.99$",
            discount: "89.99$",
            amount: "0"
        },
        {
            id: "14",
            name: "Art",
            type: "backpacks",
            describe: "",
            img: "./images/shoppingCard-Images/backpacks/backpacksArt.jpg",
            price: "22.99$",
            amount: "0"
        },
        {
            id: "15",
            name: "Outdoor",
            type: "backpacks",
            describe: "",
            img: "./images/shoppingCard-Images/backpacks/backpacksOutdoor.jpg",
            price: "35.99$",
            amount: "0"
        },
        {
            id: "16",
            name: "Park Walk",
            type: "backpacks",
            describe: "",
            img: "./images/shoppingCard-Images/backpacks/backpacksParkWalk.jpg",
            price: "19.99$",
            amount: "0"
        },
        {
            id: "17",
            name: "School",
            type: "backpacks",
            describe: "",
            img: "./images/shoppingCard-Images/backpacks/backpacksSchool.jpg",
            price: "25.99$",
            amount: "0"
        },
        {
            id: "18",
            name: "Snow",
            type: "backpacks",
            describe: "",
            img: "./images/shoppingCard-Images/backpacks/backpacksSnow.jpg",
            price: "29.99$",
            discount: "35.99$",
            amount: "0"
        },
    ]
    /* Tworzy localCards */
    if(!(JSON.parse(localStorage.getItem("cards"))))
    {
    localStorage.setItem("cards", JSON.stringify(cards));
    }
    let cartAmount = document.getElementById("cartAmount");
    cartAmount.innerHTML = JSON.parse(localStorage.getItem("cartAmount"));

    /* Wyswietla karty */
    discountFilter();
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
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
}
function setTheme(theme) {
    document.body.style.backgroundColor = 'rgb(' + theme[1] + ',' + theme[1] + ',' + theme[1] + ')';
    let themeButton = document.getElementById("themeButton");
    document.getElementsByClassName("filters")[0].style.color = theme[0];
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
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card mt-3">
            <img src="${newCards[i].img}" alt="" class="w-100" height="200px">
            <h4 class="card-header">${newCards[i].name}</h4>
            <div class="card-body">
            <h6>${newCards[i].type}<h6>
            ${newCards[i].describe}
            </div>
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
        },5000);
}
function orderProducts() {
    newAlert();
    clearCart();
    let cartAmount = document.getElementById("cartAmount");
    cartAmount.innerHTML = "";
    let localProducts = JSON.parse(localStorage.getItem("cards")); 
    let clearAmount = localProducts.filter((e)=>{
        /*zeruje localAmount */
        e.amount = "0";
        return e;
    });
    localStorage.setItem("cards", JSON.stringify(clearAmount));
    let amount = 0;
    localStorage.setItem("cartAmount", JSON.stringify(amount))
    discountFilter();
}