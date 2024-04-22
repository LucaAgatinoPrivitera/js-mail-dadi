const email = prompt("Inserisci la tua email");
let utentiRegistrati = ["prova1", "prova2", "prova3"];
utentiRegistrati.push("funziona");
console.log(utentiRegistrati);
console.log(utentiRegistrati.length, typeof utentiRegistrati.length);


for (let c=0; c <= utentiRegistrati.length; c++) {
    if (email == utentiRegistrati[c]) {
        console.log("Sei registrato");
        document.getElementById("email").innerHTML = ("Sei iscritto");
        // utentiRegistrati.push(email); Funziona in parte, scrive infinite volte "funziona"
    }
    else {
        console.log("Non sei registrato");
        document.getElementById("email").innerHTML = ("Non sei iscritto");
    }
}


// for (let c = 0; email != utentiRegistrati[c] && c <= utentiRegistrati.length; c++) {
//     if (email == utentiRegistrati[c]) {
//         console.log("Sei registrato");
//         document.getElementById("email").innerHTML = ("Sei iscritto");
//         // utentiRegistrati.push(email); Funziona in parte, scrive infinite volte "funziona"
//     }
//     else {
//         console.log("Non sei registrato");
//         document.getElementById("email").innerHTML = ("Non sei iscritto");
//     }
// }


// Non funziona innerhtml con getElement con class