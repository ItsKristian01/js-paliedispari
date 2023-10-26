// Variable Declaration

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

cpuNumber = Math.floor(Math.random() * 5) + 1;
console.log(cpuNumber);

let sum = userNumber + cpuNumber;
console.log(`Questa e' la somma ${sum}`);

// Program Logic
validatorNumber(userNumber);
oddEvenNumber(sum);
winner(userNumber, sum);






/**
 * Description placeholder.
 *
 * @param {number}
 * @returns {string}
 */
function validatorNumber(userNumber) {
  if (userNumber > 5) {
    alert("Numero non valido");
  } else if (userNumber < 1) {
    alert("Numero non valido");
  } 
  return;
}

/**
 * Description placeholder.
 *
 * @param {number}
 * @returns {string}
 */
function oddEvenNumber(sum) {
  if (sum % 2 === 0) {
    sum = "pari";
    console.log("Il numero e' pari");
  } else {
    sum = "dispari";
    console.log("Il numero e' dispari");
  }
  return;
}

/**
 * Description placeholder.
 *
 * @param {number}
 * @returns {string}
 */
function winner(userNumber, sum) {
  if (userNumber === "pari" && sum === "pari") {
    console.log("Hai vinto");
  } else if (userNumber === "dispari" && sum === "dispari") {
    console.log("Hai vinto");
  } else {
    console.log("Ha vinto il Computer");
  }
  return;
}
