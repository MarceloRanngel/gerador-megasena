function Sortear() {
  var numeros = [];
  var elemento1 = document.getElementById("numero-1");
  var elemento2 = document.getElementById("numero-2");
  var elemento3 = document.getElementById("numero-3");
  var elemento4 = document.getElementById("numero-4");
  var elemento5 = document.getElementById("numero-5");
  var elemento6 = document.getElementById("numero-6");

  for (var i = 0; i < 6; i++) {
    var numeroAleatorio = Math.floor(Math.random() * (61 - 1)) + 1;
    while (numeros.includes(numeroAleatorio)) {
      numeroAleatorio = Math.floor(Math.random() * (61 - 1)) + 1;
    }
    numeros[i] = numeroAleatorio;
  }

  numeros.sort(function (a, b) {
    return a - b;
  });

  elemento1.innerHTML = String(numeros[0]).padStart(2, "0");
  elemento2.innerHTML = String(numeros[1]).padStart(2, "0");
  elemento3.innerHTML = String(numeros[2]).padStart(2, "0");
  elemento4.innerHTML = String(numeros[3]).padStart(2, "0");
  elemento5.innerHTML = String(numeros[4]).padStart(2, "0");
  elemento6.innerHTML = String(numeros[5]).padStart(2, "0");
}