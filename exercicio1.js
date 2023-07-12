let prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do funcionário: ")
let cargo = prompt("Digite o cargo do funcionário: ")
let salario = parseFloat(prompt("Digite o salario do funcionário: "))

if(salario < 1000) {
    // salario = salario * 1.1
    salario = salario + ( (salario / 100) * 10 )
}

console.log("Nome: " + nome)
console.log("Cargo:", cargo)
// console.log(`Salario: ${salario.toFixed(2)}`)
console.log("Salario: " + salario.toFixed(2))