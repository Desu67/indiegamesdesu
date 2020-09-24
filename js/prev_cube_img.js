//---------------------------------IMAGES PREV CUBE GAME---------------------------------//
var imagenes2 = ['../img/news4.png', '../img/news1.png', '../img/news3.png'],
    cont = 0;

document.querySelector('.cube_prev').addEventListener('click', e => {
    tgt = e.target;
    img = document.querySelector('.cube_prev');

    if(tgt = img){
        if(cont > 0){
            img.src = imagenes2[cont -1 ];
            cont--;
        }
        else{
            img.src = imagenes2[imagenes2.length - 1];
            cont = imagenes2.length - 1;
        }
    }
});