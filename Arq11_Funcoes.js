//Declaração e execução de funções 


//Declarar Função
/*function NomeFuncao (Parâmetros){

    Ação da função 

    Retorno
}*/

//Executar Função declarada 

NomeFuncao(Parâmetros)

function EscreveTexto (Texto){
    console.log(Texto)
}

EscreveTexto("Bom dia Pessoal")

function Soma (){
    return 5 + 3
}

//Poderia ser console.log tambem 
EscreveTexto(Soma())

function Soma2 (N1, N2){
    return N1 + N2
}

EscreveTexto(Soma2(9, 5))

function Divisao (N1, N2){
    return N1 / N2
}

EscreveTexto(Divisao(9, 3))

EscreveTexto(Divisao(3, 9))
EscreveTexto(Divisao(3, 9).toFixed(2))