let aux = 0;
let indiceSlide = 0;
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


    // footer
document.querySelector('#btn-github').addEventListener('click', () => open("https://github.com/pbarruetavena", "_blank"));
document.querySelector('#btn-insta').addEventListener('click', () => open("https://www.instagram.com/pedrogabrielb.vieira/", "_blank"));
document.querySelector('#btn-email').addEventListener('click', () => location.href = "mailto:pbarruetavenavieira@gmail.com");

let indiceAjuda = 0;
let txtAjuda = ["Pedro Gabriel Barruetavena Vieira", 'Novo por aqui? Tente usar <i class="fa fa-caret-square-o-left" aria-hidden="true"></i> ou <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>'];

document.querySelector('#btn-ajuda').addEventListener('click', () => {
    indiceAjuda = (indiceAjuda + 1) % 2;
    let pAjuda = document.querySelector('#display-footer');
    pAjuda.classList.toggle('typing');
    pAjuda.innerHTML = txtAjuda[indiceAjuda]
    document.querySelector('#btn-ajuda').classList.toggle('ajuda-ativada');
});
