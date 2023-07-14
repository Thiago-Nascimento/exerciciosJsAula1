//Exercício: Verificação de idade
//Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos.
//Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let prompt = require('prompt-sync')();

let anoNascimento = parseInt(prompt('Digite o ano de nascimento: '));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}