// 1. Receber 4 notas
let prompt = require('prompt-sync')()

let nota1 = parseFloat( prompt('Digite a primeira nota: ') )
let nota2 = parseFloat( prompt('Digite a segunda nota: ') )
let nota3 = parseFloat( prompt('Digite a terceira nota: ') )
let nota4 = parseFloat( prompt('Digite a quarta nota: ') )

// 2. Calcular a média das notas
let media = (nota1 + nota2 + nota3 + nota4) / 4

// 3. Imprimir a média
console.log(media)

// 4. Classificar a média

// SE média maior ou igual à 7 -> Mostrar msg APROVADO
// SENÃO SE média menor que 7 E média maior ou igual 5 -> Mostrar msg RECUPERAÇÃO
// SENÃO -> Mostrar msg REPROVADO

if (media >= 7) {
    console.log("Aprovado")
} else if (media < 7 && media >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}