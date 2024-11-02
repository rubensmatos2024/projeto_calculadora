// VARIAVEL GLOBAL

const visor = document.getElementById("resultado");


function insert(num) {
    visor.textContent += num;

}

function clean() {
    visor.textContent = "";
}

function backSpace() {
    let numeroVisor = visor.textContent;

    visor.textContent = numeroVisor.substring(0, numeroVisor.length - 1);
}

function calcular() {
    let calculo = visor.textContent;

    visor.textContent = eval(calculo);



    if (calculo.length > 2) {

        visor.textContent = eval(calculo);

    } else {

        visor.textContent = "Error!";
        visor.style.color = '#f00';
        visor.style.textAlign = 'center';


        setTimeout(() => {
            clean();
            visor.style.color = '#000';
            visor.style.textAlign = 'right';

        }, 1000);
    }

}

