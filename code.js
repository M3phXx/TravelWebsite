function darkTheme(e) {
    document.body.classList = "bg-dark";
    let pCon = document.getElementById("postContainer").style.color = "white";
    let cards = document.getElementsByClassName("card");
    for(var i = 0; i < cards.length; i++) {
        cards[i].style.border = "1px solid rgba(0,0,0,.875)";
    }
    console.log(cards);
    e.preventDefault();
}
function lightTheme(e) {
    document.body.classList = "bg-light";
    let pCon = document.getElementById("postContainer").style.color = "black";
    let cards = document.getElementsByClassName("card");
    for(var i = 0; i < cards.length; i++) {
        cards[i].style.border = "1px solid rgba(0,0,0,.125)";
    }
    e.preventDefault();
}