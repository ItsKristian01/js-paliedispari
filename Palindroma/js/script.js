// Variable Declaration
const userString = prompt("Inserisci una parola");
console.log(userString);

let listElm = "";

for(let i = 0; i < userString.length; i++){
    const curString = userString[i];
    listElm = `${curString}`;
    console.log(listElm);
 }

 if (listElm === listElm.length && userString.length === userString) {
    console.log("La parola inserita e' Palindroma")
 } else {
    console.log("La parola inserita non e' Palindroma")
 }


/**
 * Description placeholder.
 *
 * @param {number} 
 * @example Example placeholder.
 * @returns {string}
 */



// Program Logic

// Output