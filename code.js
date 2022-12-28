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
    /* Popovers */
    let popoversNodes = document.querySelectorAll("[data-toggle='popover']");
    let popovers = [];
    for (const el of popoversNodes) {
        popovers.push(new bootstrap.Popover(el));
    }
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
        img: "images/ForestLake.jpg",
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
        readMoreBody: "Wspaniałę zwierzaki, Prosimy nie dokarmiać."
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
                <button class="btn btn-primary" data-toggle="popover" title="${newCards[i].readMoretitle}" data-content="${newCards[i].readMoreBody}">Czytaj więcej</button>
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

function changePage(pageNumber) {
    let posts = document.getElementById("postContainer");
    switch(pageNumber) {
        case 1: {
            posts.innerHTML = `<div class="blog-post">
            <img src="images/post1Picture.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <h4 class="blog-post-title">Przykładowy post</h4>
            <p class="blog-post-date">10 stycznia <a href="#">Adam</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, commodi?</p>
            <hr>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>Podtytuł</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aspernatur?</p>
            <ul>
                <li>lorem 10</li>
                <li>lorem 10</li>
                <li>lorem 10</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur enim repellat?
                Quia
                non itaque in libero. Reprehenderit, omnis eveniet.</p>
            <ol>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            </ol>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eveniet, laborum maxime
                maiores vitae provident eius ab voluptatem aut voluptate.</p>
        </div>
        <div class="blog-post mt-5">
            <img src="images/camera.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
            <h4 class="blog-post-title">Przykładowy post</h4>
            <p class="blog-post-date">10 stycznia <a href="#">Adam</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, commodi?</p>
            <hr>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>Podtytuł</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aspernatur?</p>
            <ul>
                <li>lorem 10</li>
                <li>lorem 10</li>
                <li>lorem 10</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur enim repellat?
                Quia
                non itaque in libero. Reprehenderit, omnis eveniet.</p>
            <ol>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            </ol>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eveniet, laborum maxime
                maiores vitae provident eius ab voluptatem aut voluptate.</p>
        </div>`
        }
        break;
        case 2: {
            console.log("2");
        }
        break;
        case 3: {
            console.log("3");
        }
        break;
        case 4: {
            console.log("4");
        }
        break;
        case 5: {
            console.log("5");
        }
        break;
        case 6: {
            console.log("6");
        }
        break;
        case 7: {
            console.log("7");
        }
        break;
    }
}

