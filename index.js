let multiply = 0;
table();

function table() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    multiply = num1 * num2;
    document.getElementById("question").innerText = num1 + " x " + num2;
    document.getElementById("question").style.border = ""
}

function calcul() {
    if (document.getElementById("reponse").value == multiply) {
        table();
        document.getElementById("reponse").value = "";
        message(1);
    } else {
        document.getElementById("question").style.borderBottom = "solid 3px rgba(255, 0, 0, 0.5)"
        message(0);
    }
}

function message(n) {
    document.getElementById("bravo-faut").innerText = ""
    n == 1 ? document.getElementById("bravo-faut").innerText = "Bravo!!" : document.getElementById("bravo-faut").innerText = "Faut";
}