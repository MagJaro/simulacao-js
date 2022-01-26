//crie uma função que recebe o peso e a altura de alguem, calcule seu imc e retorne o imc 
//e a mensagem sobre o peso da pessoa. segue os dados abaixo para cada caso:
// IMC Resultado
// Menos do que 18,5 Abaixo do peso
// Entre 18,5 e 24,9 Peso normal
// Entre 25 e 29,9 Sobrepeso
// Entre 30 e 34,9 Obesidade grau 1
// Entre 35 e 39,9 Obesidade grau 2
// Mais do que 40 Obesidade grau 3



function calculoIMC(peso,altura){
    let IMC = peso / (altura * altura);

    if (IMC < 18.5){
        console.log( "Voce está abaixo do peso");
    } else if (IMC >= 18.5 && IMC <= 24.9){
        console.log( "Peso considerado normal");
    }else if (IMC >= 25 && IMC <= 29.9){
        console.log("Sobrepeso");
    } else if (IMC >= 30 && IMC <= 34.9){
        console.log( "Obesidade grau 1");
    } else if(IMC >=35 && IMC <= 39.9){
        console.log( "Obesidade grau 2")
    }else{
        console.log( "Obesidade grau 3");
    }
    return IMC.toFixed(2);
}

let resultado = calculoIMC(55, 1.67);
console.log(resultado);