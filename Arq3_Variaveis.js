//Tipos de variáveis => Tipagem dinâmica

const Idade = 30
const Idade2 = 30.5
const Idade3 = '30'
const MaiorDeIdade = true
const Nomes = ['Marivaldo', 'Genivaldo', 'Mariano']

console.log(`O tipo da variável idade é ${typeof(Idade)}`)
console.log(`O tipo da variável Idade2 é ${typeof(Idade2)}`)
console.log(`O tipo da vaiável Idade3 é ${typeof(Idade3)}`)
console.log(`O tipo da vaiável MaiorDeIdade é ${typeof(MaiorDeIdade)}`)
console.log(`O tipo da vaiável Nomes é ${typeof(Nomes)}`)

//Exemplo de tipagm Fraca - pode atribuir outro tipo á variável 
console.log(Idade3 / 2)

//Diferença entre ponto e vírgula 
console.log(4.5)
console.log(4,5)
