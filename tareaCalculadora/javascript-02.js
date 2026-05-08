let resultado = document.getElementById("resultado");
let botones = document.querySelectorAll("button");

let operacion = "";

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        let valor = boton.innerText;

        if (valor === "CE") {
            operacion = "";
            resultado.value = "";
        } 
        else if (valor === "=") {
            resultado.value = eval(operacion);
            operacion = resultado.value;
        } 
        else {
            operacion += valor;
            resultado.value = operacion;
        }
    });
});