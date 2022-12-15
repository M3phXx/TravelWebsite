let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        let serialName = document.getElementById("searchInput").value;
        chooseSerialList.getJsonAPI(serialName);
    }
});

let chooseSerialList = {
    mContainer: document.getElementsByClassName("mainContainer")[0],
    getJsonAPI: function (serialName) {
        fetch("http://api.tvmaze.com/search/shows?q=" + serialName)
            .then(response => response.json())
            .then(data => this.jsonData(data))
    },
    jsonData: function (data) {
        let show = "";
        let img = "";
        let date = "";
        let network = "";
        let summary = "";
        let allBox = "";
        let genres = "";
        let info;
        for (let i = 0; i < data.length; i++) {
            info = data[i].show;
            if(info.name) {show = info.name}
            else {continue;}
            if(info.premiered) {date = info.premiered;}
            else {continue;}
            if(info.network) {network = info.network.name;}
            else {continue;}
            if(info.summary) {summary = info.summary;}
            else {continue;}
            if(info.image) {img = info.image.medium;}
            else {img = "images/notFound.png";}
            if(info.genres) {genres = info.genres;}
            else {continue;}
            allBox += `
            <div class="serialContainer">
            <div id="img"><img src="${img}" alt=""></div>
            <div id="title">Title: ${show}</div>
            <div id="describe">${genres}</div>
            <div id="info">Show: ${show} <br> Date: ${date} <br> Network: ${network} <br><br> ${summary}</div>
        </div>
            `;
        }
        this.mContainer.innerHTML = allBox;
    }
}