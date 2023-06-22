//Estrutura condicionais com operador lógico OU (||)

/*Para que a pessoa possa viajar sozinha ela deve 
=> ter a idade maior ou igual a 18
ou
=> Estar acompanhado do responsável*/

const Idade = 17
const AcompanhadoDeResponsavel = true
const TemCNH = false

if(Idade >= 18 || AcompanhadoDeResponsavel){
    console.log('Autorizado a viajar')
}else{
    console.log('NÃO está autorizado a viajar')
}

//Uso do operador lógico &&
if(Idade >= 18 && TemCHN){
    console.log('Pode dirigir tem CNH')
}else{
    console.log('Não pode dirigir não tem CNH')
} 