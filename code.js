window.onload = () => {
    addCards(cards);
    if (localStorage.getItem("login")) {
        document.getElementById("inputEmail").value = localStorage.getItem("login");
        document.getElementById("inputCheckbox").checked = true;
    }
    let formElements = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(formElements).forEach(function (form) {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            let newsletterEmail = document.getElementById("emailInput").value;
            let newsletterEmailMonkey = newsletterEmail.indexOf("@");
            let newsletterEmailDot = newsletterEmail.indexOf(".", newsletterEmailMonkey);
            if (newsletterEmailMonkey >= 0 && newsletterEmail.indexOf(".", newsletterEmailMonkey) >= 0 && !(newsletterEmail.indexOf("@", newsletterEmailMonkey + 1) >= 0) && !(newsletterEmail.indexOf(".", newsletterEmailDot + 1) >= 0)) {
                form.classList.add("was-validated");
            }
            else {
                form.classList.remove("was-validated");
            }
        });
    });
}
function darkTheme(e) {
    document.body.style.backgroundColor = 'rgb(' + 30 + ',' + 30 + ',' + 30 + ')';
    let pCon = document.getElementById("postContainer").style.color = "white";
    let bCards = document.getElementById("bottomCards").style.color = "white";
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.border = "1px solid rgba(0,0,0,.875)";
    }
    e.preventDefault();
}
function lightTheme(e) {
    document.body.style.backgroundColor = 'rgb(' + 225 + ',' + 225 + ',' + 225 + ')';
    let pCon = document.getElementById("postContainer").style.color = "black";
    let bCards = document.getElementById("bottomCards").style.color = "black";
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.border = "1px solid rgba(0,0,0,.125)";
    }
    e.preventDefault();
}
function localEmail() {
    let email = document.getElementById("inputEmail");
    let emailInput = document.getElementById("inputCheckbox");
    if (emailInput.checked == true) {
        localStorage.setItem("login", email.value);
    }
    else if (emailInput.checked == false) {
        localStorage.removeItem("login");
    }
}
function checkInputs() {
    let emailBox = document.getElementById("inputEmail");
    let emailValue = document.getElementById("inputEmail").value;
    let passwordBox = document.getElementById("inputPassword");
    let passwordValue = document.getElementById("inputPassword").value;

    let checkBoxMonkey = emailValue.indexOf("@");
    let checkBoxDot = emailValue.indexOf(".", checkBoxMonkey);

    if (checkBoxMonkey >= 0 && emailValue.indexOf(".", checkBoxMonkey) >= 0 && !(emailValue.indexOf("@", checkBoxMonkey + 1) >= 0) && !(emailValue.indexOf(".", checkBoxDot + 1) >= 0)) {
        emailBox.style.border = "1px solid green";
    }
    else {
        emailBox.style.border = "1px solid red";
    }
    if (passwordValue.length > 5) {
        passwordBox.style.border = "1px solid green";
    }
    else {
        passwordBox.style.border = "1px solid red";
    }
}

let filteredCards = [];
let cards = [
    {
        name: "Balloon flight",
        describe: "Around the World",
        img: "images/baloon.jpg"
    },
    {
        name: "Desert island",
        describe: "Tropical adventure",
        img: "images/tropical.jpg"
    },
    {
        name: "Monuments",
        describe: "Back to the past",
        img: "images/monuments.jpg"
    },
    {
        name: "Mountains",
        describe: "Reach the tops",
        img: "images/mountainsTrip.jpg"
    },
    {
        name: "Balloon Pyramids",
        describe: "Watch out for Pharaoh",
        img: "images/balloonPyramids.jpg"
    },
    {
        name: "Balloon Desert",
        describe: "Hot adventure",
        img: "images/balloonDesert.jpg"
    },
    {
        name: "Forest House",
        describe: "Close to nature",
        img: "images/forestHouse.jpg"
    },
    {
        name: "Forest Lake",
        describe: "Beautiful Water",
        img: "images/ForestLake.jpg"
    },
    {
        name: "Mountain peak",
        describe: "Don't go down!",
        img: "images/Mountain-stone-peak.jpg"
    },
    {
        name: "Animal Forest",
        describe: "Animal friends",
        img: "images/animalForest.jpg"
    },
    {
        name: "Japan",
        describe: "Tokyo",
        img: "images/japan.jpg"
    },
    {
        name: "Mountains",
        describe: "Reach the tops",
        img: "images/france.jpg"
    },
]

function addCards(newCards) {
    document.getElementById("cards").innerText = "";
    for (var i = 0; i < newCards.length; i++) {
        document.getElementById("cards").innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card mt-3">
            <img src=${newCards[i].img} alt="" class="cart-img-top">
            <div class="card-body">
                <h5 class="card-title">${newCards[i].name}</h5>
                <p class="card-text">${newCards[i].describe}</p>
                <a href="#" class="btn btn-primary">Czytaj więcej</a>
            </div>
        </div>
    </div>
        `;
    }
}

document.getElementById("searchInput").addEventListener("keyup", () => {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    filteredCards = cards.filter(function (e) {
        if (e.name.toLowerCase().includes(searchInput)) {
            return e.name;
        }
    });
    addCards(filteredCards);
})

