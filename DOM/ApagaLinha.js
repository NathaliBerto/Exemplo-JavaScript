const Linhas = document.querySelectorAll('.Linha-Apagar')
console.log(Linhas)

function ApagarLinha(Event){
    
    const LinhaClicada = Event.target 

    LinhaClicada.remove()
}

    for(let Index = 0; Index < Linhas.length; Index++){

        Linhas[Index].addEventListener('click', ApagarLinha)
    }