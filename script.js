let nextButton = document.querySelector('.next')
let backButton = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')


function moveItensOnClick(type) {
    let listItens = document.querySelectorAll('.list .list-item')
    let thumbItens = document.querySelectorAll('.thumb .thumb-item')
    console.log(listItens)
    console.log(thumbItens)

    if (type == 'next') {
        list.appendChild(listItens[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add('next') //criar uma classe fora do css para o css

    } else {
        list.prepend(listItens[listItens.length - 1])
        thumb.prepend(thumbItens[thumbItens.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}


nextButton.onclick = () => moveItensOnClick('next')
backButton.onclick = () => moveItensOnClick('back')
