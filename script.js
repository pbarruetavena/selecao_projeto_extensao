let aux = 0;
let indiceSlide = 3;
let linksArr = document.querySelectorAll('.container-link');
let slidesArr = document.querySelectorAll('.slide');

function giraSlide() {
    if(indiceSlide < 0) { indiceSlide = 0; }
    else if(indiceSlide > 3) { indiceSlide = 3; }

    if(indiceSlide == aux) { return; }

    slidesArr[aux].classList.remove('selecionado');
    if(indiceSlide > aux) {
        for(let i = aux; i < indiceSlide; i++) {
            slidesArr[i].classList.add('esquerdo');
            slidesArr[i+1].classList.remove('direito');
        }
    }
    else if(indiceSlide < aux) {
        for(let i = aux; i > indiceSlide; i--) {
            slidesArr[i].classList.add('direito');
            slidesArr[i-1].classList.remove('esquerdo');
        }
    }
    slidesArr[indiceSlide].classList.add('selecionado');
}

function giraHeader() {
    if(indiceSlide < 0) { indiceSlide = 0; }
    if(indiceSlide > 3) { indiceSlide = 3; }


    document.querySelectorAll('.container-link p')[aux].innerHTML = linksArr[aux].dataset.txt;
    linksArr[aux].classList.remove('link-slide-selecionado');

    if(indiceSlide > aux) {
        for(let i = aux; i < indiceSlide; i++) {
            linksArr[i].classList.add('link-slide-esquerdo');
            linksArr[i+1].classList.remove('link-slide-direito');
        }
    }
    else if(indiceSlide < aux) {
        for(let i = aux; i > indiceSlide; i--) {
            linksArr[i].classList.add('link-slide-direito');
            linksArr[i-1].classList.remove('link-slide-esquerdo');
        }
    }

    linksArr[indiceSlide].classList.add('link-slide-selecionado');
    document.querySelectorAll('.container-link p')[indiceSlide].innerHTML = linksArr[indiceSlide].dataset.exp;
}

giraHeader();
giraSlide();

// lista de links dos slides
document.querySelector('#link-sobre').addEventListener('click', () => {
    indiceSlide = 0;
    giraHeader();
    giraSlide();
    aux = 0;
});
document.querySelector('#link-porque').addEventListener('click', () => {
    indiceSlide = 1;
    giraHeader();
    giraSlide();
    aux = 1;
});
document.querySelector('#link-espectativa').addEventListener('click', () => {
    indiceSlide = 2;
    giraHeader();
    giraSlide();
    aux = 2;
});
document.querySelector('#link-projetos').addEventListener('click', () => {
    indiceSlide = 3;
    giraHeader();
    giraSlide();
    aux = 3;
});


document.addEventListener('keydown', (e)=> {
    if(e.key == "ArrowLeft") {
        if(indiceSlide > 0) {
            indiceSlide--;
            giraHeader();
            giraSlide();
            aux = indiceSlide;
        } 
    }
    if(e.key == "ArrowRight") {
        if(indiceSlide < 3) {
            indiceSlide++;
            giraHeader();
            giraSlide();
            aux = indiceSlide;
        }
    }
});


let iconeGHEl = document.querySelector('#icone-gh');
let itensListaProjetosArr = document.querySelectorAll('#lista-projetos li');
iconeGHEl.addEventListener('click', ()=> {
    for(let item of itensListaProjetosArr)
        item.classList.toggle('gh-atv');
    iconeGHEl.classList.toggle('gh-atv');
});
