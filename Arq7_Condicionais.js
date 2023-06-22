//Estrutura condicionais com operador lógico E (&&)

const Nota = 70
const Faltas = 2
const QuantidadeAulasCurso = 10

/*Para que o aluno seja APROVADO a nota deve ser maior ou igual que 50 e as faltas menores ou igual a 25% do total de aulas*/

//Sem operador E

if(Nota >= 50){
    if(Faltas <=0.25 * QuantidadeAulasCurso){
        console.log('APROVADO!!')
    }else{
        console.log('REPROVADO por faltas')
    }
}else{
    console.log('REPROVADO por Notas')
}

//Com o operador E (&&)
if(Nota >=  50 && Faltas <= 0.25 * QuantidadeAulasCurso){
    console.log("Você está APROVADO")
}else{
    console.log("Você está REPROVADO")
}