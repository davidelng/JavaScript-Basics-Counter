// Selezioniamo il div vuoto nel body
const root = document.querySelector('#root');

// Creiamo gli elementi che ci servono: i bottoni +/-, reset e il contatore
const counter = document.createElement('h2');
const augmentButton = document.createElement('button');
const decrementButton = document.createElement('button');
const resetButton = document.createElement('button');

// Aggiungiamo delle classi agli elementi per implementare il CSS
counter.className = 'counter';
augmentButton.className = 'augment';
decrementButton.className = 'decrement';
resetButton.className = 'reset';

// Definiamo e inizializziamo la variabile del counter
let count = 0

// Inseriamo del testo negli elementi creati
counter.innerText = count;
augmentButton.innerText = '+';
decrementButton.innerText = '-';
resetButton.innerText = 'Reset';

// Appendiamo gli elementi al div
root.appendChild(counter);
root.appendChild(decrementButton);
root.appendChild(augmentButton);
root.appendChild(resetButton);

// Funzione per aumentare il contatore
function augment() {
    count++;
    counter.innerText = count;
}

// Funzione per decrementare il contatore
function decrement() {
    if (count === 0) { 
        return
    } else {
        count--;
        counter.innerText = count;
    }
}

// Funzione per resettare il contatore (extra)
function reset() {
    count = 0;
    counter.innerText = count;
}

// Aggiungiamo gli Event Listener sui bottoni per rendere il tutto funzionante
augmentButton.addEventListener('click', augment);
decrementButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);