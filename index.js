window.onload = () => {
    //Dodaje karty
    addCards(cards);
    if (localStorage.getItem("login")) {
        document.getElementById("inputEmail").value = localStorage.getItem("login");
        document.getElementById("inputCheckbox").checked = true;
    }
    //Ustawia Theme
    if(JSON.parse(localStorage.getItem("theme"))) {
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
    //..
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
    /* Popovers */
    let popoversNodes = document.querySelectorAll("[data-toggle='popover']");
    let popovers = [];
    for (const el of popoversNodes) {
        popovers.push(new bootstrap.Popover(el));
    }
}
//----------------- Theme ---------------- //
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
    document.getElementById("postContainer").style.color = theme[0];
    document.getElementById("bottomCards").style.color = theme[0];
    document.getElementById("asideBar").style.color = theme[0];
    if (theme[1] == "30") {
        themeButton.classList = "rounded border-light";
        themeButton.innerHTML = "Light";
    }
    else {

        themeButton.classList = "rounded bg-dark text-light border-light";
        themeButton.innerHTML = "Dark";
    }
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
        img: "images/baloon.jpg",
        readMoretitle: "Balloon flight",
        readMoreBody: "Flight above the clouds."
    },
    {
        name: "Desert island",
        describe: "Tropical adventure",
        img: "images/tropical.jpg",
        readMoretitle: "Desert island",
        readMoreBody: "An amazing adventure, feel like a castaway."
    },
    {
        name: "Monuments",
        describe: "Back to the past",
        img: "images/monuments.jpg",
        readMoretitle: "Monuments",
        readMoreBody: "If you love history, this trip is for you. An old castle full of ghosts."
    },
    {
        name: "Mountains",
        describe: "Reach the tops",
        img: "images/mountainsTrip.jpg",
        readMoretitle: "Mountains",
        readMoreBody: "Do you like winter ? these mountains will bring you joy."
    },
    {
        name: "Balloon Pyramids",
        describe: "Watch out for Pharaoh",
        img: "images/balloonPyramids.jpg",
        readMoretitle: "Balloon Pyramids",
        readMoreBody: "Egypt. The legendary place where the Pharaoh lives."
    },
    {
        name: "Balloon Desert",
        describe: "Hot adventure",
        img: "images/balloonDesert.jpg",
        readMoretitle: "Balloon Desert",
        readMoreBody: "A trip close to the sun and sand. Be sure to bring water."
    },
    {
        name: "Sea Waves",
        describe: "Big waves",
        img: "images/seaWaves.jpg",
        readMoretitle: "Sea Waves",
        readMoreBody: "Feel like a real pirate! An expedition of landlubbers among the stormy waves."
    },
    {
        name: "Forest House",
        describe: "Close to nature",
        img: "images/forestHouse.jpg",
        readMoretitle: "Forest House",
        readMoreBody: "Peace, quiet, fresh air. Attention! Ents live in the forest :)."
    },
    {
        name: "Forest Lake",
        describe: "Beautiful Water",
        img: "images/forestLake.jpg",
        readMoretitle: "Forest Lake",
        readMoreBody: "purest source of water."
    },
    {
        name: "Mountain peak",
        describe: "Don't go down!",
        img: "images/Mountain-stone-peak.jpg",
        readMoretitle: "Mountain peak",
        readMoreBody: "If you are not afraid, try to ride a few kilometers above the ground."
    },
    {
        name: "Animal Forest",
        describe: "Animal friends",
        img: "images/animalForest.jpg",
        readMoretitle: "Animal Forest",
        readMoreBody: "Awesome animals. Please do not feed Them."
    },
    {
        name: "Japan",
        describe: "Tokyo",
        img: "images/japan.jpg",
        readMoretitle: "Japan",
        readMoreBody: "Have you ever dreamed of a trip to Tokyo? check our offer."
    },
    {
        name: "Paris",
        describe: "Big City",
        img: "images/france.jpg",
        readMoretitle: "Paris",
        readMoreBody: "Eiffel Tower"
    },
    {
        name: "Sea Beach",
        describe: "More Sand",
        img: "images/seaBeach.jpg",
        readMoretitle: "Sea Beach",
        readMoreBody: "Storm, many adventures, puzzles. We have prepared many surprises!"
    }
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
                <button class="btn btn-primary" data-toggle="popover" title="${newCards[i].readMoretitle}" data-content="${newCards[i].readMoreBody}" id="readMore">info</button>
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
    let popoversNodes = document.querySelectorAll("[data-toggle='popover']");
    let popovers = [];
    for (const el of popoversNodes) {
        popovers.push(new bootstrap.Popover(el));
    }
})
let saveNumber = 1;
document.body.addEventListener('mouseover', function () {
    $('.popover').popover('hide');
});

