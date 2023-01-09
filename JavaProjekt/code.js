window.onload = () => {
    reloadProducts();
}
function addProduct() {
    let name = document.getElementById("inputName").value;
    let description = document.getElementById("inputDescription").value;
    let serial = document.getElementById("inputSerial").value;
    let quantity = document.getElementById("inputQuantity").value;
    let newTr = document.createElement("tr");

    if (localStorage.getItem("ID") === null) {
        localStorage.setItem("ID", 1);
        newTr.innerHTML = add(localStorage.getItem("ID"), name, description, serial, quantity);
    }
    else {
        localStorage.setItem("ID", parseInt(localStorage.getItem("ID")) + 1);
        newTr.innerHTML = add(localStorage.getItem("ID"), name, description, serial, quantity);
    }
}

function add(id, name, description, serial, quantity) {
    let container = document.getElementById("productContainer");
    container.innerHTML = ``;
    let product = {
        id: id,
        name: name,
        description: description,
        serial: serial,
        quantity: quantity,
        button: `<button class="badge rounded-pill text-dark" onclick="changeAmount(-1, ${id})">-</button> <button class="badge rounded-pill text-dark" onclick="changeAmount(1, ${id})">+</button> <button class="btn bg-dark text-light" onclick="dropProduct(${id})">drop</button>`
    };
    var productList = JSON.parse(localStorage.getItem("productList") || "[]");
    console.log(productList);
    productList[id] = product;
    localStorage.setItem("productList", JSON.stringify(productList));
    reloadProducts();
}

function dropProduct(productID) {
    var productList = JSON.parse(localStorage.getItem("productList"));
    let remainingProducts = [];
    remainingProducts = productList.filter(function (e) {
        if (!(e === null)) {
            if (!(e.id.includes(productID))) {
                return e;
            }
        }
    });
    localStorage.setItem("productList", JSON.stringify(remainingProducts));
    reloadProducts()
}
function reloadProducts() {
    let container = document.getElementById("productContainer");
    var productList = JSON.parse(localStorage.getItem("productList") || "[]");
    var filtered = productList.filter(function (e) { // pozbywam sie null
        return e != null;
    });
    localStorage.setItem("productList", JSON.stringify(filtered));
    productList = filtered;
    container.innerHTML = ``;
    for (var i = 0; i < productList.length; i++) {
        if (i >= 0) {
            container.innerHTML += `
            <tr>
                <th class="col-1">${productList[i].id}</th>
                <th class="col-2">${productList[i].name}</th>
                <th class="col-5">${productList[i].description}</th>
                <th class="col-1">${productList[i].serial}</th>
                <th class="col-1">${productList[i].quantity}</th>
                <th class="col-2">${productList[i].button}</th>
            </tr>
            `;
        }
    }
}
function changeAmount(number, productID) {
    var productList = JSON.parse(localStorage.getItem("productList"));
    switch(number)
    {
        case -1:
            changedProduct = productList.filter(function (e) {
                if (!(e === null)) {
                    if (e.id.includes(productID)) {
                        if(e.quantity >= 1) {
                            e.quantity -= 1; 
                        }
                    }
                }
                return e;
            });
            break;
            case 1:
                changedProduct = productList.filter(function (e) {
                    if (!(e === null)) {
                        if (e.id.includes(productID)) {
                            if(e.quantity >= 1) {
                                e.quantity = parseInt(e.quantity) + 1; 
                            }
                        }
                    } 
                    return e;
                });
                break;
    }
    localStorage.setItem("productList", JSON.stringify(changedProduct));
    reloadProducts();
}


