let inputSecondi = document.querySelector('#secondi');
let display = document.querySelector('#display');
let messaggio = document.querySelector('#messaggio');
let btnAvvia = document.querySelector('#btnAvvia');
let btnPausa = document.querySelector('#btnPausa');
let btnAzzera = document.querySelector('#btnAzzera');

let secondiRimanenti = null;
let intervallo = null;

function fermaIntervallo() {
    clearInterval(intervallo);
    intervallo = null;
}

btnAvvia.addEventListener('click', () => {
    if (intervallo !== null) {
        return;
    }

    if (secondiRimanenti === null) {
        let secondi = Number(inputSecondi.value);

        if (!Number.isInteger(secondi) || secondi < 1) {
            messaggio.textContent = 'Inserisci un numero intero di secondi maggiore di 0.';
            return;
        }

        secondiRimanenti = secondi;
        display.textContent = secondiRimanenti;
    }

    messaggio.textContent = '';

    intervallo = setInterval(() => {
        secondiRimanenti--;
        display.textContent = secondiRimanenti;

        if (secondiRimanenti === 0) {
            fermaIntervallo();
            secondiRimanenti = null;
            messaggio.textContent = 'Tempo scaduto!';
        }
    }, 1000);
});

btnPausa.addEventListener('click', () => {
    if (intervallo === null) {
        return;
    }

    fermaIntervallo();
    messaggio.textContent = 'In pausa';
});

btnAzzera.addEventListener('click', () => {
    fermaIntervallo();
    secondiRimanenti = null;
    inputSecondi.value = '';
    display.textContent = 0;
    messaggio.textContent = '';
});
