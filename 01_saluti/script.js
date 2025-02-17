/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function sayHi(str) {
    console.log(`Ciao ${str}`);
}
//Invoca la funzione qui e stampa il risultato in console
sayHi(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario

//bonus arrow declaration (comment the previous function and call to test)

// const sayHi= (str) => console.log(`Ciao ${str}`);
// sayHi(userName);
