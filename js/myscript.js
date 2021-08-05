

let numeroChilometri = parseInt( prompt ("Inserisci numero di chilometri") );
let anniPasseggero = parseInt (prompt ("Inserisci età"));

let prezzoGiovani = (numeroChilometri * 0.21) * 0.8
let prezzoAdulti = (numeroChilometri * 0.21) * 0.60


document.getElementById("primo-risultato").innerHTML = "Il valore del biglietto è: " + prezzoGiovani;
document.getElementById("secondo-risultato").innerHTML = "Il valore del prodotto scontato è: " + prezzoAdulti;


if (anniPasseggero <= 18){
    document.getElementById("risposta-venditore").innerHTML = "Sei minorenne, hai uno sconto del 20%"
} else if (anniPasseggero >=65){
    document.getElementById("risposta-venditore").innerHTML = "hai uno sconto del 40%"
} else {
    document.getElementById("risposta-venditore").innerHTML = "Non hai sconti!"
}