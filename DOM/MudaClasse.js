const Rectang = document.querySelector('.Retangulo')
const Botao = document.querySelector('.btn')


function MudaClasse (){

    Rectang.classList.toggle ('Muda-Cor')
}

Botao.addEventListener('click', MudaClasse)