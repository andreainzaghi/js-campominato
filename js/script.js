// genera numeri casualòi tra 0 a 100

function random() {

  var bombe = [];
  var bomba;

  var i = 0;

  while (i < 16) {
    bomba = Math.floor(Math.random() * 100) + 1;
    if (!(bombe.includes(bomba))){
      bombe.push(bomba);
      i++
    }
  }

  console.log(bombe);
  console.log(bombe.length);

};


// verifico i numeri inserirti

var numeri = [];
var utente;

var x = 0;

while (x > 100 && x < 0) {

  utente = parseInt(prompt("Inserisci un numero da 1 a 100"));

  if (!(numeri.includes(utente)) && !(isNaN(utente)) && !(utente < 1 || utente > 100)) {
    numeri.push(utente);
    x++
  }
  console.log(numeri);
}

console.log(numeri.length);
