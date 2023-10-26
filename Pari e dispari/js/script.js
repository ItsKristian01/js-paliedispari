// Variable Declaration

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

cpuNumber = Math.floor(Math.random() * 5) + 1;
console.log(cpuNumber);

if (userNumber > 5) {
    alert("Numero non valido");
} else if (userNumber < 1) {
    alert("Numero non valido");
} 

let sum = userNumber + cpuNumber;
console.log(`Questa e' la somma ${sum}`);

if (sum % 2 === 0) {
    sum = "pari";
    console.log("Il numero e' pari")
} else {
    sum = "dispari";
    console.log("Il numero e' dispari")
}

if (userNumber === "pari" && sum === "pari" ) {
    console.log("Hai vinto");
} else if (userNumber === "dispari" && sum === "dispari" ) {
    console.log("Hai vinto");
} else {
    console.log("Ha vinto il Computer");
}



// Program Logic

// Output