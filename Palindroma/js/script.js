// Variable Declaration
const userString = prompt("Inserisci una parola");
console.log(userString);

const stringArray = [];
let listElm = "";

for(let i = 0; i < userString.length; i++){
    const curString = userString[i];
    listElm = `${curString}`;
    console.log(listElm);
    let add = stringArray.push(listElm);
    console.log(add, stringArray);
 }

 if (stringArray === stringArray.length && stringArray.length === userString.length - 1) {
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

12

// Program Logic

// Output