//Estrutura de laço com while


const ListaDeDestinos = new Array(
    'São Paulo',
    'Paraná',
    'Rio de Janeiro',
    'Espirito Santo',
    'Santa Catarina',
    'Bahia',
    'Pernambuco'
)

console.log(ListaDeDestinos.length)

const DestinoDesejado = 'Pernambuco'

//console.table(ListaDeDestinos)
//console.log(ListaDeDestinos[1])


/*while(Condição){
  
    Ação(IF)

    Indice ++
}*/

    let Indice = 0

    let EncontrouDestino = false

while(Indice < ListaDeDestinos.length){
    if(ListaDeDestinos[Indice] == DestinoDesejado){
        //console.log('Destino Encontrado!')
        EncontrouDestino = true
        break
    }else{
        //console.log('Destino NÃO Encontrado!')
        EncontrouDestino = false
    }
    Indice ++
}
    if(EncontrouDestino){
        console.log('Destino Encontrado')
    }else{
        console.log('Destino NÂO Encontrado')
    }
    
   
   
    //Outro exemplo
    const Multiplicador = 7
    let Contador = 1 

    while (Contador <= 10){
        console.log(Multiplicador * Contador)

        Contador ++
    } 