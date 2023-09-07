// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * 11);
    arr.push(random);
  }

  return arr;
}
let arrNumeriCasuali = giveMeRandom(5);
console.log(arrNumeriCasuali);

function checkArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log("Maggiore di 5");
      sum += arr[i];
    } else {
      console.log("Minore di 5");
    }
  }
  return sum;
}
let sum = checkArray(arrNumeriCasuali);
console.log(sum);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
  {
    price: 150,
    name: "pen",
    id: 203,
    quantity: 1,
  },
  {
    price: 550,
    name: "pen",
    id: 203,
    quantity: 1,
  },
  {
    price: 400,
    name: "pen",
    id: 203,
    quantity: 1,
  },
];
console.log(shoppingCart);
function shoppingCartTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let prodotto = arr[i]; //creo un nuovo oggetto a cui assegno le proprietà dell'oggetto dell'array shoppingCart puntato dal for
    total += prodotto.price * prodotto.quantity;
  }
  return total;
}
let totaleCarrello = shoppingCartTotal(shoppingCart);
console.log(totaleCarrello);
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nuovoOggetto = {
  price: 250,
  name: "table",
  id: 207,
  quantity: 1,
};
function addToShoppingCart(obj) {
  shoppingCart.push(obj);
  return shoppingCart.length;
}
const numeroAggiornatoOggetti = addToShoppingCart(nuovoOggetto);
console.log(numeroAggiornatoOggetti);
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart(arr) {
  let maxItemCost = {};
  let oggetto = {};
  for (i = 0; i < arr.length; i++) {
    let oggetto = arr[i];
    if (i === 0) {
      maxItemCost = oggetto;
    }
    for (i = 0; i < arr.length; i++) {
      let oggetto = arr[i];
      if (oggetto.price > maxItemCost.price && i !== 0) {
        maxItemCost = oggetto;
      }
    }
  }
  return maxItemCost;
}
let maxItemCost = maxShoppingCart(shoppingCart);
console.log(maxItemCost);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(arr) {
  const lastItem = arr[arr.length - 1];
  return lastItem;
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil(n) {
  for (let i = 0; i <= 2; ) {
    let random = Math.floor(Math.random() * 10);
    if (random > n) {
      i++;
      console.log(random, i + " tentativo");
    } else {
      console.log(random, i, " azzero");
      i = 0;
    }
  }
  return;
}

console.log(loopUntil(1));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [1, 2, 3, "b", "ciao", 5, 7];
function average(arr) {
  let sum = 0;
  let cont = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      cont++;
    }
  }
  return sum / cont;
}
console.log(average(array));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arrString = [
  "ciao mi chiamo giovanni",
  "oggi non sono riuscito a fare tutti gli extra",
  "ma sto cercando di recuperare",
  "spero domani il test vada bene                   ",
];
//const longest = function (arr) {
//let lunghezza = 0;
//let posizione = 0;
//for (let i = 0; i <= arr.length; i++) {
//  if (arr[i].length >= lunghezza) {
//    lunghezza = arr[i].length;
//    console.log(lunghezza);
//    posizione = i;
//    console.log(posizione);
//  }
//}
//return lunghezza;
//};

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const email =
  "aisbfjdsbf ahsjifkjdsanfkjdnsa ahsijbfkjasdbfkj SPAM ajsdhfkjdasnkfj ajsdfjasndkjfnsdkjnf";

const antiSpam = function (emailContent) {
  if (
    emailContent.search("SPAM") === -1 &&
    emailContent.search("SCAM") === -1
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(antiSpam(email));
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giorniPassati = function () {};

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
