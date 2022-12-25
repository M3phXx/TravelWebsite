function darkTheme(e) {
    document.body.style.backgroundColor = 'rgb(' + 30 + ',' + 30 + ',' + 30 + ')';
    let pCon = document.getElementById("postContainer").style.color = "white";
    let cards = document.getElementsByClassName("card");
    for(var i = 0; i < cards.length; i++) {
        cards[i].style.border = "1px solid rgba(0,0,0,.875)";
    }
    console.log(cards);
    e.preventDefault();
}
function lightTheme(e) {
    document.body.style.backgroundColor = 'rgb(' + 225 + ',' + 225 + ',' + 225 + ')';
    let pCon = document.getElementById("postContainer").style.color = "black";
    let cards = document.getElementsByClassName("card");
    for(var i = 0; i < cards.length; i++) {
        cards[i].style.border = "1px solid rgba(0,0,0,.125)";
    }
    e.preventDefault();
}