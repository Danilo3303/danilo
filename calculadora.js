function soma(numero1,b){
    return numero1 + b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

function subtracao(a,b){
    return a - b;
}

function floor(numero1){
    return Math.floor(numero1);
 }

 function teto(a){
    return Math.ceil(a);
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}

