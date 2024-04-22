const email = prompt("Inserisci la tua email");
let utentiRegistrati = ["prova1", "prova2", "prova3"];
utentiRegistrati.push("funziona");
console.log(utentiRegistrati);
console.log(utentiRegistrati.length, typeof utentiRegistrati.length);


for (let c = 0; c <= utentiRegistrati.lenght; c = c + 1) {
    if (email == utentiRegistrati[c]) {
        console.log("Sei registrato");
        document.getElementById("email").innerHTML = ("ciao");
    }
    else {
        console.log("Non sei registrato");
        document.getElementById("email").innerHTML = ("no!");
    }
}


// Non funziona innerhtml con getElement con class