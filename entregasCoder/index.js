alert("Bienvenido al gimnacio bodytech");
function solicitarNombre() {
  let nombre = prompt("Ingrese su nombre");
  while (nombre === "") {
    nombre = prompt("Ingrese su nombre");
  }
  return nombre;
}

function mostrarPlanes() {
  let plan;
  do {
    plan = parseInt(
      prompt("Que plan le interesa ?: \n1)Básico\n2)Intermedio\n3)avanzado")
    );
  } while (plan != 1 && plan != 2 && plan != 3);

  switch (plan) {
    case 1:
      return "Básico";
    case 2:
      return "Intermedio";
    case 3:
      return "Avanzado";
  }
}

function validarPrecio(plan) {
  if (plan === "Básico") {
    return 20;
  } else if (plan === "Intermedio") {
    return 40;
  } else {
    return 80;
  }
}

function validarObjetivo() {
  let objetivo;
  do {
    objetivo = parseInt(
      prompt(
        "Cual es su objetivo ?: \n1)Subir Peso\n2)Quemar grasa\n3)Tener resistencia"
      )
    );
  } while (objetivo != 1 && objetivo != 2 && objetivo != 3);

  switch (objetivo) {
    case 1:
      return "Subir Peso";
    case 2:
      return "Quemar grasa";
    case 3:
      return "Tener resistencia";
  }
}

let personaNombre = solicitarNombre();
let planNombre = mostrarPlanes();
let precioPlan = validarPrecio(planNombre);
let ObjetivoPersona = validarObjetivo();
console.log(
  "Bienvenido al gimnacio Bodytech " +
    personaNombre +
    ", selecciono el plan " +
    planNombre +
    " y el objetivo de entrenar es " +
    ObjetivoPersona +
    " que tiene un costo de " +
    precioPlan +
    " Dolares"
);
