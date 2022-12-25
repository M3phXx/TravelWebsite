function darkTheme(e) {
    document.body.classList = "bg-dark";
    let pCon = document.getElementById("postContainer").style.color = "white";
    e.preventDefault();
}
function lightTheme(e) {
    document.body.classList = "bg-light";
    let pCon = document.getElementById("postContainer").style.color = "black";
    e.preventDefault();
}