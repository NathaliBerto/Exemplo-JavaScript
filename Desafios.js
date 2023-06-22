//Desafio 1
const MeuPeso = 70
const MinhaAltura = 1.70

function  CalculaIMC(Peso, Altura){
    const IMC = Peso / (Altura * Altura)
   
    if(IMC < 18.5){
        return "Baixo peso"
    } if(IMC < 25){
        return "Normal"
    } if(IMC < 30){
        return "Sobrepeso"
    }else{
        return "Obeso"
    }
}

console.log(CalculaIMC(MeuPeso, MinhaAltura))


//Desafio 2
const N1 = 10
const N2 = 3

function ComparaNumeros(Valor1, Valor2){
    if(Valor1 > Valor2){
        return `${Valor1} È MAIOR que ${Valor2}`
    }if(Valor1 < Valor2){
        return `${Valor1} È MENOR que ${Valor2}`
    }else{
        return `${Valor1} È IGUAL a ${Valor2}`
    }
}
console.log(ComparaNumeros(N1, N2))
