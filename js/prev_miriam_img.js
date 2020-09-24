//---------------------------------IMAGES PREV CUBE GAME---------------------------------//
var imagenes = ['../img/news3.png', '../img/news1.png', '../img/news2.png'],
    cont = 0;

document.querySelector('.miriam_prev').addEventListener('click', e => {
    tgt = e.target;
    img = document.querySelector('.miriam_prev');

    if(tgt = img){
        if(cont > 0){
            img.src = imagenes[cont -1 ];
            cont--;
        }
        else{
            img.src = imagenes[imagenes.length - 1];
            cont = imagenes.length - 1;
        }
    }
});