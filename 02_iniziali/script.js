/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(arr) {
    const arrInitials = [];
    for (let i = 0; i < arr.length; i++) {
        arrInitials[i] = arr[i].slice(0, 1)
    }
    return arrInitials
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]