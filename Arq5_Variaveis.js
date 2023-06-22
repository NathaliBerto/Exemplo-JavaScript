//Trabalhando com  Arrays

const Cidades = new Array(
    'São Paulo',
    'Cotia',
    'Itapevi',
    'Carapicuíba'
)

Cidades.push('Osasco', 'Vargem Grande') //O método push() adiciona elementos ao Array 

Cidades.splice(2,1) //O método splice() remove elementos do Array



console.log(Cidades) //Mostra em linha 
console.table(Cidades) //Mostra em tabela 
console.log(Cidades[1]) //Exibe só o elemento de índice 1 do array cidades

