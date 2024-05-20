//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 22;
let num2 = 53;
let max = 0;

if (num1>num2){
   max = num1;
}
else{
  max = num2;
}
console.log(`Esercizio 1: Il più tra num1=${num1} e num2=${num2} è ${max}`);

console.log("-----------------------------------------------------------------------------------------");

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\n\n\nEsercizio 2: ");
let num3 = 14;


if (num3 < 5){
  console.log("Tiny")
}
else if (num3 < 10 && num3 > 4){
  console.log("Small");
}
else if (num3 < 15 && num3 > 9){
  console.log("Medium");
}
else if (num3 < 20 && num3 > 14){
  console.log("Large");
}
else if (num3 >= 20){
  console.log("Huge");
}
console.log("-----------------------------------------------------------------------------------------");

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
console.log("\n\n\nEsercizio 3: ");

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i=0; i<11; i++)
  {
    if (i === 3 || i === 8) { continue}
      
    console.log(`Numero: ${i}`);

  }

  console.log("-----------------------------------------------------------------------------------------");


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\n\n\nEsercizio 11: ");
for (let i=0; i<16; i++)
  {
    if (i %2 === 0) { 
      console.log(`Il numero ${i} è pari`)
    }
    else{
      console.log(`Il numero ${i} è dispari`)
    }
    
  }
  console.log("-----------------------------------------------------------------------------------------");

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\n\n\nEsercizio Extra 1: ");

const checkNum = 8;
const checkSum = 8;
const checkDiff = 8;

let iNum1 = prompt("Inserisci il primo numero");
let iNum2 = prompt("Inserisci il secondo numero");

if ((isNaN(iNum1) || isNaN(iNum2)) || (iNum1 === "" || iNum2 ==="")){
  alert("attenzione tutti e due i numeri devono essere interi");
}
else{
  if (parseInt(iNum1) === checkNum || parseInt(iNum2) === checkNum){
    alert("Hai inserito il numero " + iNum1);
  }

  if (parseInt(iNum1) + parseInt(iNum2) === checkSum){
    alert("La loro somma è uguale a " + checkSum);
  }
  if (parseInt(iNum1) - parseInt(iNum2) === checkDiff){
    alert("La loro differenza è uguale a " + checkDiff);
  }
}


console.log("-----------------------------------------------------------------------------------------");

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\n\n\nEsercizio Extra 2: ");

let totalShoppingCart = 0;

let priceArticle1 = 20;
let priceArticle2 = 31;

const promotionTotal = 50;
const priceDelivery = 10;8
//...
//....
totalShoppingCart = totalShoppingCart + priceArticle1;
//..
//..
totalShoppingCart = totalShoppingCart + priceArticle2;

if (totalShoppingCart > promotionTotal){
  console.log(`Complimenti, hai raggiunto la somma di ${totalShoppingCart} hai diritto alla spedizione gratuita!`);
}
else{
  totalShoppingCart = totalShoppingCart + priceDelivery;
  console.log(`Il totale da pagare comprese le spese di spedizione è di ${totalShoppingCart}`)
}

console.log("-----------------------------------------------------------------------------------------");





/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, 
  se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\n\n\nEsercizio Extra 3: Black Friday");
const discountPercentage = 0.2;

totalShoppingCart = 0;

//...
//....
totalShoppingCart = totalShoppingCart + priceArticle1;
//..
//..
totalShoppingCart = totalShoppingCart + priceArticle2;

// applichiamo lo sconto al totale 
totalShoppingCart = totalShoppingCart - discountPercentage * totalShoppingCart;

if (totalShoppingCart > promotionTotal){
  console.log(`Complimenti, hai raggiunto la somma di ${totalShoppingCart} hai diritto alla spedizione gratuita!`);
}
else{
  totalShoppingCart = totalShoppingCart + priceDelivery;
  console.log(`Il totale da pagare comprese le spese di spedizione è di ${totalShoppingCart}`)
}


console.log("-----------------------------------------------------------------------------------------");

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
console.log("\n\n\nEsercizio Extra 4: operatore ternario");
let isMale = true;

let gender = isMale ? "male" : "female";

console.log(`Risposta es. extra 4: ${gender} `);
console.log("-----------------------------------------------------------------------------------------");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" 
  e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
console.log("\n\n\nEsercizio Extra 5: iterazione numeri da 1 a 100");
for (let i = 1; i<101; i++){
  if (i % 3 ===0 && i % 5 === 0){ console.log("FizzBuzz")

  }
  else if (i % 3 ===0) {
    console.log("Fizz");
  }
  else if (i % 5 ===0) {
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}
console.log("-----------------------------------------------------------------------------------------");