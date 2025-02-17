/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function getFilteredByInitials(arr, initial) {
    const arrFilterNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, 1) === initial) {
            arrFilterNames.push(arr[i])
        }
    }
    return arrFilterNames
}
// Invoca la funzione qui e stampa il risultato in console

console.log(getFilteredByInitials(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]