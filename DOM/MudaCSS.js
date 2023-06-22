const Paragrafos = document.querySelectorAll('.Paragrafo')

console.log(Paragrafos)

for(let I = 0; I < Paragrafos.length; I++){

    Paragrafos[I].style.color = 'blue'
    Paragrafos[I].style.fontSize = '30px'
    Paragrafos[I].style.fontWeight = '800'
}