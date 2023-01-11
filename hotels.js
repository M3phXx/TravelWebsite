window.onload = ()=>{
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
};
function changeTheme() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    if(theme[1] == "30") {
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
    setTheme();
}
function setTheme() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    console.log(JSON.parse(localStorage.getItem("theme")));
    document.body.style.backgroundColor = `rgb(${theme[1]}, ${theme[1]}, ${theme[1]})`
}