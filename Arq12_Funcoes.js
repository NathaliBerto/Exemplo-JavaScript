//A função deve receber uma nota e retornar:
// => Aprovado para notas maiores ou iguais a 70
// => Recuperação para notas maiores ou iguais a 50
// => Reprovado para notas menores que 50

const NomeAluno = 'Marivaldo'
const NotaAluno = 70

function AvaliaNota(Nota, Nome){
    if(Nota >= 70){
        return `${Nome} está APROVADO`
    }if(Nota >= 50){
        return `${Nome} está de RECUPERAÇÃO`
    }else{
        return `${Nome} está REPROVADO`
    }
}

//console.log(AvaliaNota(NotaAluno, NomeAluno))

//A funçaõ deve receber uma Array(lista) de nomes e um nome específico e verificar se esse nome consta no Array(lista)

const ListaNomes = new Array(
    "João",
    "Maria",
    "Carlos",
    "Carla",
    "Ricardo"
)

const NomeProcurado = "Carla"
let EncontrouNome = ''

    function ProcuraNome (Nomes, Nome){

    for(let I = 0; I < Nomes.length; I++ ){
        if(Nomes[I] == Nome){
            EncontrouNome = true
            break
        }else{
            EncontrouNome = false
        }
    }
    if(EncontrouNome == true){
        console.log(`${Nome} ENCONTRADO`)
    }else{
        console.log(`${Nome} NÃO ENCONTRADO`)
    }
}

ProcuraNome(ListaNomes, NomeProcurado)



//Desafio 1: Cálculo de IMC;
const Altura = 1.60
const Peso= 70


for(let Altura = 1.60; Altura <= 1.60; Altura++){
    console.log(IMC = Peso/(Altura * Altura))
}




//Desafio 2: Comparação de números;
const Numero = 20
const NumeroMaiorque = '70'
const NumeroMenorque = '50'

if(Numero >=100){
    console.log('Maior que')
    NumeroMaiorque ==true
}else{
    console.log('Menor que ')
    NumeroMenorque ==false
}




//Desafio 3 Classificação de faixa etária;

//Faixas etárias 
const FaixasEtarias = new Array(
    'Criança: 0-12 anos',
    'Adolescente: 13-17 anos',
    'Adulto: 18-59 anos',
    'Idoso: 60 anos ou mais',
)
console.table(FaixasEtarias)




