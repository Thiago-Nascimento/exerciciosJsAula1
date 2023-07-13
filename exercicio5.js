let prompt = require('prompt-sync')()

let primeiroNumero = parseInt( prompt('Digite o primeiro numero: ') )
let segundoNumero = parseInt( prompt('Digite o segundo numero: ') )

if (primeiroNumero > segundoNumero) {
    console.log("O numero " + primeiroNumero + " é maior que " + segundoNumero)
} else if (segundoNumero > primeiroNumero){
    console.log("O numero " + segundoNumero + " é maior que " + primeiroNumero)
} else {
    console.log(`Os números ${primeiroNumero} e ${segundoNumero} são iguais`)
}