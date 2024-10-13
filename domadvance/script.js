let id = 1;
function  addlist() {
    const getelement = document.querySelector("input")
    const value = getelement.value;
    const newdiv = document.createElement("div")
    newdiv.setAttribute("id", id)
    newdiv.innerHTML = `<div>${value} <button onclick="todelete(${id})">delete</button></div>`
    document.querySelector("body").appendChild(newdiv);
    id = id + 1;
}

function todelete(index) {
    const element = document.getElementById(index)
    element.parentNode.removeChild(element);
}
