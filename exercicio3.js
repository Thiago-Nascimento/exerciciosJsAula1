let prompt = require('prompt-sync')()

let numeroInteiro = parseInt( prompt("Digite um número inteiro: ") )

if(numeroInteiro > 0) {
    console.log("O número inserido é Positivo")
} else if (numeroInteiro < 0) {
    console.log("O número inserido é Negativo")
} else {
    console.log("O número inserido é Zero")
}
