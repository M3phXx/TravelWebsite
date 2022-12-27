window.onload = () => {
    if (localStorage.getItem("login")) {
        document.getElementById("inputEmail").value = localStorage.getItem("login");
        document.getElementById("inputCheckbox").checked = true;
    }
}
function darkTheme(e) {
    document.body.style.backgroundColor = 'rgb(' + 30 + ',' + 30 + ',' + 30 + ')';
    let pCon = document.getElementById("postContainer").style.color = "white";
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

    let checkBoxMoney = emailValue.indexOf("@");
    let checkBoxDot = emailValue.indexOf(".", checkBoxMoney);

    if (emailValue.indexOf(".", checkBoxMoney) >= 0 && !(emailValue.indexOf("@", checkBoxMoney + 1) >= 0) && !(emailValue.indexOf(".", checkBoxDot + 1) >= 0)) {
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
    if (emailValue.indexOf(".", checkBoxMoney) >= 0 && !(emailValue.indexOf("@", checkBoxMoney + 1) >= 0) && !(emailValue.indexOf(".", checkBoxDot + 1) >= 0) && passwordValue.length > 5) {

    }
}

