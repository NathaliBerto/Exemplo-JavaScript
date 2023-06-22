//Estrututas condicionais

const Idade = 18 
const SenhaCorreta = '138ManhaFic'
const SenhaDigitada = '138ManhaFic'

const Numero = 5
const NumeroTexto = '5'

// =se(Teste Lógico ; Valor se VERDADEIRO ; valor ser FALSO)

/*if(Teste Lógico){
    Valor se VERDADEIRO
 } else{
        Valor se FALSO
    }*/
    if(Idade >= 18){
        console.log('È maior de idade')
    }else{
            console.log('È menor de idade')
        }
        //Verifica se um valor é igual ao outro
        if(SenhaCorreta == SenhaDigitada){
            console.log('Permitir acesso')
        }else{
            console.log('NÃO permitir acesso')
        }
    
        //Verifica se um valor é exatamente igual (valor e tipo) ao outro (===)
        if(Numero === NumeroTexto){
            console.log('Os valores são exatamente iguais')
        }else{
            console.log('Os valores NÃO são exatamente iguais')
        }


        //Nota

        const Nota = 50
        const NotaMaiorque = '50'
        const NotaMenorque = '50'
        if(Nota >=50){
            console.log('Aprovado')
        }else{
            console.log('Reprovado')
        }
       
      