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

/* Collegamento per il bottone next */
let btnNxt = document.querySelector('.next');

/* Collegamento per il bottone prev */
let btnPre = document.querySelector('.prev');

/* Collegamento con il bottone di pausa */
let pauseBtn = document.getElementById('pauseButton');

/* Collegamento con il bottone di inversione dello scorrimento */
let invertBtn = document.getElementById('invertButton');

/* Contatore dei click */
let click = 0;

/* Collegamento per l'immagine */
const imgElement = document.querySelector('img');

/* Collegamento per il titolo */
const titleElement = document.querySelector('h2');

/* Collegamento per il testo */
const textElement = document.querySelector('h5');

/* Funzione per il bottone next */
const nextView = () => {
    if (click != images.length - 1) {   /* Se il numero di click è diverso dalla lunghezza del vettore */
        click++; /* Incremento dei click */
        imgElement.src = images[click].image;  /* Cambio immagine con indice il numero di click */
        titleElement.innerText = images[click].title; /* Cambio titolo con indice il numero di click */
        textElement.innerText = images[click].text; /* Cambio testo con indice il numero di click */
    } else {    /* Se il numero di click è uguale alla lunghezza del vettore */
        click = 0;  /* Il numero di click si resetta */
        imgElement.src = images[click].image; 
        titleElement.innerText = images[click].title;
        textElement.innerText = images[click].text;
    }
}

/* Funzione per il bottone prev */
const prevView = () => {
    if (click != 0) { /* Se il numero di click è diverso da 0 */
        click--; /* Decremento dei click */
        imgElement.src = images[click].image; /* Cambio immagine con indice il numero di click */
        titleElement.innerText = images[click].title; /* Cambio titolo con indice il numero di click */
        textElement.innerText = images[click].text; /* Cambio testo con indice il numero di click */
    } else { /* Se il numero di click è 0 */
        click = images.length - 1; /* Il valore di click è ugale alla lunghezza del vettore */
        imgElement.src = images[click].image;
        titleElement.innerText = images[click].title;
        textElement.innerText = images[click].text;
    }
}

/* Funzione per la visualizzazione laterale delle immagini */
const menuView = () => {

    /* Ciclo per le chiavi della classe images */
    for (key in images) {
        let imgStyle = document.getElementById('photo' + key); /* Collegamento con l'id photo + l'indice */
        if (key == click) { /* Se il numero dell'indice è uguale ai click */

            imgStyle.style.filter = 'brightness(100%)' /* Imposta la luminosità al massimo */
        } else {
            imgStyle.style.filter = 'brightness(50%)'  /* Altrimenti luminosità 50% */
        }
    }
}


/* Ascolto del click per il bottone Next */
btnNxt.addEventListener('click', function () {
    nextView()
    menuView();
}
)

/* Ascolto del click per il bottone Prev */
btnPre.addEventListener('click', function () {
    prevView()
    menuView();
}
)

/* Tempo di scorrimento automatico */
const TIME_SCROLL = 2000;

/* Valore di default per la pausa */
let isPaused = false;

/* Valore di default per l'inversione dello scorrimento automatico */
let inverted = false;

setInterval(function () {
    if (inverted) { /* Se inverted == true */
        if (!isPaused) { /* Se isPaused != false */
            prevView() /* Scorrimento invertito */
            menuView()
        }
    }
}, TIME_SCROLL);

setInterval(function () {
    if (!inverted) { /* Se inverted != true */
        if (!isPaused) { /* Se isPaused != true */
            nextView() /* Scorrimento default */
            menuView()
        }
    }
}, TIME_SCROLL);

/* Ascolto del bottone di pausa */
pauseBtn.addEventListener('click', function () {

    if (!isPaused) { /* Se isPaused != true */
        isPaused = true; /* Imposta isPaused su true */
        pauseBtn.innerText = 'Riprendi'; /* Cambiamento del testo sul bottone */
    } else { /* Se isPaused == true */
        isPaused = false; /* Imposta isPaused su false */
        pauseBtn.innerText = 'Metti in pausa';
    }

})

/* Ascolto del bottone per inversione scorrimento carosello */
invertBtn.addEventListener('click', function () {
    if (!inverted) {  /* Se inverted != true */
        inverted = true; 
    } else { /* Se inverted == true */
        inverted = false;
    }
})





