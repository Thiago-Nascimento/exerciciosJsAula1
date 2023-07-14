let prompt = require('prompt-sync')()

let numero = prompt("Digite um numero de 1 à 7: ")

if (numero == "1") {
    console.log("O dia corresponde à Segunda-Feira")
} else if(numero == "2"){
    console.log("O dia corresponde à Terça-Feira")
} else if(numero == "3"){
    console.log("O dia corresponde à Quarta-Feira")
} else if(numero == "4"){
    console.log("O dia corresponde à Quinta-Feira")
} else if(numero == "5"){
    console.log("O dia corresponde à Sexta-Feira")
} else if(numero == "6"){
    console.log("O dia corresponde à Sábado")
} else if(numero == "7"){
    console.log("O dia corresponde à Domingo")
} else {
    console.log("O valor digitado não corresponde à um dia da semana")
}


switch (numero) {
    case "1":
        console.log("O dia corresponde à Segunda-Feira")
        break;

    case "2":
        console.log("O dia corresponde à Terça-Feira")
        break;

    case "3":
        console.log("O dia corresponde à Quarta-Feira")
        break;
    
    case "4":
        console.log("O dia corresponde à Quinta-Feira")
        break;

    case "5":
        console.log("O dia corresponde à Sexta-Feira")
        break;  
       
    case "6":
        console.log("O dia corresponde à Sábado")
        break;

    case "7":
        console.log("O dia corresponde à Domingo")
        break;

    default:
        console.log("O valor digitado não corresponde à um dia da semana")
        break;
}