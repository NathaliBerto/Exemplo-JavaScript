const Lista = document.querySelector('.Lista')
const InputTexto = document.querySelector('#Input-Texto')
const btnInsereLinha = document.querySelector('#btn-Adiciona')

console.log(Lista, InputTexto, btnInsereLinha)

//Criar uma linha 
//Pegar o valor do input texto 
//Inserir o valor do input na linha 
//Inserir a linha na lista (atribuir paternidade)

function AdicionaLinha (){
    const Linha = document.createElement('Li')

    const TextoDoInput = InputTexto.value
    
    Linha.innerHTML = TextoDoInput 

    Lista.appendChild(Linha)
}

btnInsereLinha.addEventListener('click' , AdicionaLinha)