let prompt = require("prompt-sync")()

let primeiroNumero = parseInt( prompt("Digite o primeiro numero: ") )
let segundoNumero = parseInt( prompt("Digite o segundo numero: ") )
let terceiroNumero = parseInt( prompt("Digite o terceiro numero: ") )

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
    console.log("Os números estão em ordem crescente!!")
} else {
    console.log("Os números NÃO estão em ordem crescente")
}