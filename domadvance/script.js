let id = 1;
function  addlist() {
    const readtxt = document.querySelector("input")
    const spanEl = document.createElement("span")
    const buttonEl = document.createElement("button")
    spanEl.innerHTML = readtxt.value;
    buttonEl.innerHTML = "delete";
    const newDiv = document.createElement("div")
    newDiv.appendChild(spanEl)
    newDiv.appendChild(buttonEl)

    document.querySelector("body").appendChild(newDiv)
}

