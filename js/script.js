const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let btnNxt = document.querySelector('.next');
let btnPre = document.querySelector('.prev');

/* Contatore dei click */
let click = 0;

/* Collegamento per l'immagine */
const imgElement = document.querySelector('img');
const titleElement = document.querySelector('h2');
const textElement = document.querySelector('h5');

/* Funzione per il bottone next */
const nextView = () => {
    /* Modifica del percorso per l'immagine */
    if (click != images.length - 1) {
        click++;
        imgElement.src = images[click].image;
        titleElement.innerText = images[click].title;
        textElement.innerText = images[click].text;
        images[click].image;
    } else {
        click = 0;
        imgElement.src = images[click].image;
        titleElement.innerText = images[click].title;
        textElement.innerText = images[click].text;
    }
}

const prevView = () => {
    if (click != 0) {
        click--;
        imgElement.src = images[click].image;
        titleElement.innerText = images[click].title;
        textElement.innerText = images[click].text;
    } else {
        click = images.length - 1;
        imgElement.src = images[click].image;
        titleElement.innerText = images[click].title;
        textElement.innerText = images[click].text;
    }
}

const menuView = () => {
    for(key in images){
        let imgStyle = document.getElementById('photo' + key);
        if(key == click){
            
            imgStyle.style.filter = 'brightness(100%)'
            console.log(key)
            console.log(click)
            console.log(imgStyle)
        }else{
            imgStyle.style.filter = 'brightness(50%)'
        }
    }
}


/* Ascolto del click per il bottone Next */
btnNxt.addEventListener('click', function () {
    nextView()
    menuView();
}
)

btnPre.addEventListener('click', function () {
    prevView()
    menuView();
}
)

const TIME_SCROLL = 2000;

let isPaused = false;
setInterval(function(){
    if(!isPaused){
        nextView()
    }
}, TIME_SCROLL);

setInterval(function(){
    if(!isPaused){
        menuView()
    }
}, TIME_SCROLL);

let pauseBtn = document.getElementById('pauseButton');
 pauseBtn.addEventListener('click', function(){
    
    

    if(!isPaused){
        isPaused = true;
        pauseBtn.innerText = 'Riprendi';
    }else{
        isPaused = false;
        pauseBtn.innerText = 'Metti in pausa';
    }
 })





