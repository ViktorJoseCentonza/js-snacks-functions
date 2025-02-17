/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function vowelCounter(str) {
    const vowels = "aeiouAEIOU";
    let numberOfVowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            numberOfVowels++
        }
    }
    return numberOfVowels
}
// Invoca la funzione qui e stampa il risultato in console

console.log(vowelCounter(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)