let prompt = require('prompt-sync')()

let salario = parseFloat(prompt("Digite o salário: "))

if(salario < 500) {
    // Calcular o acrescimo
    salario = salario * 1.3
    console.log("O novo salário é de: R$" + salario.toFixed(2))
} else {
    // Exibe mensagem
    console.log(`Seu salário é de R$${salario}, você não tem direito ao reajuste.`)
}