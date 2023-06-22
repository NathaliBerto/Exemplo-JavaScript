//Estrutura de laço com for

const ListaDeDestinos = new Array(
    'São Paulo',
    'Paraná',
    'Rio de Janeiro',
    'Espirito Santo',
    'Santa Catarina',
    'Bahia',
    'Pernambuco'
)

const DestinoDesejado = 'Pernambuco'
const Idade = 17



let DestinoEncontrado = true

for(let Indice = 0; Indice <ListaDeDestinos.length; Indice++){

    if(ListaDeDestinos[Indice] == DestinoDesejado){
        DestinoEncontrado = true
        break
    }else{
        DestinoEncontrado = false
    }
}



if(Idade >= 18 && DestinoEncontrado){
    console.log('Viagem Autorizada')
}else{
    console.log('Viagem NÃO Autorizada')
}

const Valor = 7.5

for(let Multiplo = 1; Multiplo <= 10; Multiplo++){
    console.log(Valor * Multiplo)
}
