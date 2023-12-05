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
console.log(click);

/* Collegamento per l'immagine */
const imgElement = document.querySelector('img');

/* Funzione per il bottone next */
const nextView = () => { 
    
    /* Modifica del percorso per l'immagine */
    

    if(click != images.length - 1){
        click++;
        imgElement.src = images[click].image;
    }else{
        click = 0;
        imgElement.src = images[click].image;
    }

    console.log(click);
}

const prevView = () => { 

    if(click != 0){
        click--;
        imgElement.src = images[click].image;
    }else{
        click = images.length - 1;
        imgElement.src = images[click].image;
    }

    console.log(click);
}



/* Ascolto del click per il bottone Next */
btnNxt.addEventListener('click', nextView)
btnPre.addEventListener('click', prevView)