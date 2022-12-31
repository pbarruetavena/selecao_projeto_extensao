let indiceSlide = 0;
let linksArr = document.querySelectorAll('.container-link');

function giraHeader() {
    if(indiceSlide < 0) { indiceSlide = 0; }
    if(indiceSlide > 3) { indiceSlide = 3; }

    for(let i = 0; i < 4; i++) {
        linksArr[i].classList.remove('link-slide-selecionado');
        linksArr[i].classList.remove('link-slide-esquerdo');
        linksArr[i].classList.remove('link-slide-direito');
        document.querySelectorAll('.container-link p')[i].innerHTML = linksArr[i].dataset.txt;
    }

    linksArr[indiceSlide].classList.add('link-slide-selecionado');
    document.querySelectorAll('.container-link p')[indiceSlide].innerHTML = linksArr[indiceSlide].dataset.exp;

    for(let i = indiceSlide - 1; i >= 0; i--) {
        linksArr[i].classList.add('link-slide-esquerdo');
    }
    for(let i = indiceSlide + 1; i <= 3; i++) {
        linksArr[i].classList.add('link-slide-direito');
    }
}

giraHeader();

// lista de links dos slides
document.querySelector('#link-sobre').addEventListener('click', () => {
    indiceSlide = 0;
    giraHeader();
});
document.querySelector('#link-porque').addEventListener('click', () => {
    indiceSlide = 1;
    giraHeader();
});
document.querySelector('#link-espectativa').addEventListener('click', () => {
    indiceSlide = 2;
    giraHeader();
});
document.querySelector('#link-projetos').addEventListener('click', () => {
    indiceSlide = 3;
    giraHeader();
});


document.addEventListener('keydown', (e)=> {
    if(e.key == "ArrowLeft") {
        if(indiceSlide > 0) {
            indiceSlide--;
            giraHeader();
        } 
    }
    if(e.key == "ArrowRight") {
        if(indiceSlide < 3) {
            indiceSlide++;
            giraHeader();
        }
    }
});