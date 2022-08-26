console.log("adivina que animal es (es un mamifero, muy domestico)");

let palabra = "";
let vidas = 5;
console.log("tienes " + vidas + " vidas");

while (palabra != "perro" && vidas > 0) {
  palabra = prompt("escribe que animal es");
  if (palabra == "perro") {
    console.log("felicidades, adivinaste");
    break;
  }
  console.log("sigue intentando, te quedan: " + (vidas - 1) + " vidas");
  vidas--;
}

if (vidas < 0) {
  console.log("Perdiste");
}
