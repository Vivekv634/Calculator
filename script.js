function display(value) {
    document.getElementById("screen").value += value;
}
function solve() {
    var expression = document.getElementById("screen").value;
    var result = eval(expression);
    document.getElementById("screen").value = result;
}
function clr() {
    document.getElementById('screen').value = '';
}

function backspace() {
    var expression = document.getElementById("screen").value;
    document.getElementById("screen").value = expression.slice(0, expression.length - 1);
}