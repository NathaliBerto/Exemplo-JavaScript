const LinhasFiltro = document.querySelectorAll('.Filtra-Linha')
const InputFiltro = document.querySelector('#Input-Filtra')

console.log(LinhasFiltro, InputFiltro)

function Filtrar(Event){

    const TextoInput = InputFiltro.value.toUpperCase()

    for(let Index = 0; Index < LinhasFiltro.length; Index++){
        
        const LinhaAtual = LinhasFiltro[Index]
        //const ConteudoLinhaAtual = LinhaAtual.textContent
        const ConteudoLinhaAtual = LinhasFiltro[Index].textContent
        
        if(ConteudoLinhaAtual.toUpperCase().includes(TextoInput)){
            LinhaAtual.style.display=""
        }else{
            LinhaAtual.style.display="none"
        }
    }
}
InputFiltro.addEventListener('keyup', Filtrar)