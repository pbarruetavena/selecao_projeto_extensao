let indiceSlide = 0;
let linksArr = document.querySelectorAll('.container-link');

function giraHeader() {

    for(let i of linksArr) {
        i.classList.remove('slide-selecionado');
        i.classList.remove('slide-esquerdo');
        i.classList.remove('slide-direito');
    }

    linksArr[indiceSlide].classList.add('slide-selecionado');

    for(let i = indiceSlide - 1; i >= 0; i--) {
        linksArr[i].classList.add('slide-esquerdo');
    }
    for(let i = indiceSlide + 1; i <= 3; i++) {
        linksArr[i].classList.add('slide-direito');
    }
}