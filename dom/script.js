let id = 1;
function todolist() {
    const readele = document.querySelector("input");
    const value = readele.value;

    const newdiv = document.createElement("div");
    newdiv.setAttribute("id", id);
    newdiv.innerHTML = `<div>${value} <button onclick="deletetoto(${id})">delete</button> </div>`;
    document.querySelector("body").appendChild(newdiv);
    id = id + 1;
}


function deletetoto(index) {
    const element = document.getElementById(index)
    element.parentNode.removeChild(element);
}
