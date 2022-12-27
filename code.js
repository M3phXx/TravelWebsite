window.onload = () => {
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
                console.log("xD");
            }
            else {
                console.log("xP");
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
    console.log(cards);
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
    if (emailValue.indexOf(".", checkBoxMonkey) >= 0 && !(emailValue.indexOf("@", checkBoxMonkey + 1) >= 0) && !(emailValue.indexOf(".", checkBoxDot + 1) >= 0) && passwordValue.length > 5) {

    }
}

