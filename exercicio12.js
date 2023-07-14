//Exercício: Cálculo de IMC
//Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
//Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura).
//Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra,
//de acordo com a tabela a seguir:

//IMC menor que 18.5: Abaixo do peso
//IMC de 18.5 a 24.9: Peso normal
//IMC de 25.0 a 29.9: Sobrepeso
//IMC de 30.0 a 34.9: Obesidade grau 1
//IMC de 35.0 a 39.9: Obesidade grau 2
//IMC maior ou igual a 40.0: Obesidade grau 3


let prompt = require('prompt-sync')();

let peso = parseFloat(prompt('Digite o seu peso (em kg): '));

let altura = parseFloat(prompt('Digite a sua altura (em metros): '));

let imc = peso / (altura * altura);

console.log('Seu IMC é: ' + imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log('Sobrepeso');
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log('Obesidade grau 1');
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log('Obesidade grau 2');
} else {
    console.log('Obesidade grau 3');
}