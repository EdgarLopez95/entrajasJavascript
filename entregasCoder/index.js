let option;
const tranins = [
  {
    train: "mancuernas de pie",
    bodyPart: "BRAZO",
    difficulty: "MEDIO",
  },
];

function agregar() {
  const agregarEjercicios = document.getElementById("cambiarSection");
  agregarEjercicios.innerHTML = `
  <h2>Por favor selecciona el entreno</h2>
  <button id="agregarPecho">PECHO</button>
  <button id="agregarBrazo">BRAZO</button>
  <button id="agregarPierna">PIERNA</button>
  <button id="agregarEspalda">ESPALDA</button>
  <button id="agregarHombro">HOMBRO</button>
  <button id="agregarAbdominales">ABDOMINALES</button>
  <button id="agregarCardio">CARDIO</button>
  `;
  (" <h2>Por favor selecciona el entreno</h2> <button>PECHO</button> <button>BRAZO</button> <button>PIERNA</button> <button>ESPALDA</button>");

  const PECHO = document.getElementById("agregarPecho");
  PECHO.addEventListener("click", () => {
    const agregarEjercicios = document.getElementById("cambiarSection");
    agregarEjercicios.innerHTML = `
  <h2>Por favor escribe el ejercicio y la dificultad</h2>
  <form action="">
  <label for="inputTrain">
    Escribe el ejercicio
  </label>
  <input
    type="text"
    id="inputTrain"
    placeholder="press plano"
  />
  <br>
    <label for="inputdif">
    Pon la difucultad
  </label>
  <input
    type="text"
    id="inputdif"
    placeholder="press plano"
  />
  <button type="button" id="botonDatos">Agregar</button>
  `;
    let botonDatos = document.getElementById("botonDatos");
    botonDatos.onclick = () => {
      const inputTrain = document.getElementById("inputTrain");
      const inputHard = document.getElementById("inputdif");
      const valTrain = inputTrain.value;
      const valtHard = inputHard.value;

      createTrain("PECHO", valTrain, valtHard);
      ver();
    };
  });
}

function ver() {
  const mostrarEjercicios = document.getElementById("cambiarSection");
  mostrarEjercicios.innerHTML = ";"
  tranins.forEach((train) => {
    const sectionEntrenos = document.createElement("section");
    sectionEntrenos.innerHTML = `
    <h2>Estos son los entrenos asignados</h2>
    <p">Tu entrenador te ha asignado un ejercicio de:</p>
    <h3>"${train.bodyPart}"</h3>
    <p">El ejercicio que vas a hacer es:</p>
    <h3>"${train.train}"</h3>
    <p">su dificultad es:</p>
    <h3>"${train.difficulty}"</h3>
    `;
    mostrarEjercicios.appendChild(sectionEntrenos);
  });
  //console.log(tranins);
}
function salir() {
  Toastify({
    text: "Usted salio de la app",
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    //stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #c29968, #c29968)",
    },
  }).showToast();
  let agregarEjercicios = document.getElementById("cambiarSection");
  agregarEjercicios.innerHTML = `
  <h2>USTED SALIO DE LA APP</h2>
  `;
}

function createTrain(bodyPart, train, difficulty) {
  tranins.push({
    bodyPart,
    train,
    difficulty,
  });
}

function getAllTrains() {}

function getLastId() {
  return;
  //return tranins.length;
}

console.log(tranins);
