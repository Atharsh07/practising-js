
function deletetodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
}
