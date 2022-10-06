let option;
const tranins = [
  {
    id: 1,
    train: "mancuernas de pie",
    bodyPart: "BRAZO",
    difficulty: "MEDIO",
  },
];

// option = Number(
//   prompt(
//     "CONSOLA DE ENTRENADOR, ingrese una opción:\n1. Agrega un ejercicio al cliente\n2. ver los ejercicios del cliente\n0. Salir"
//   )
// );
function agregar() {
  let agregarEjercicios = document.getElementById("cambiarSection");
  agregarEjercicios.innerHTML = `
  <h2>Por favor selecciona el entreno</h2>
  <button id="agregarPecho">PECHO</button>
  <button id="agregarPecho">BRAZO</button>
  <button id="agregarPecho">PIERNA</button>
  <button id="agregarPecho">ESPALDA</button>
  <button id="agregarPecho">HOMBRO</button>
  <button id="agregarPecho">ABDOMINALES</button>
  <button id="agregarPecho">PECHO</button>
  `;
  // " <h2>Por favor selecciona el entreno</h2> <button>PECHO</button> <button>BRAZO</button> <button>PIERNA</button> <button>ESPALDA</button>";

  // let bodyPart = prompt(
  //   "Ingrese la parte del cuerpo del entreno que va a crear:\n1. pecho\n2. brazo\n3. pierna\n4. espalda\n5. hombro\n6. abdominales\n7. cardio "
  // );

  // switch (bodyPart) {
  //   case "1":
  //     bodyPart = "PECHO";
  //     break;
  //   case "2":
  //     bodyPart = "BRAZO";
  //     break;
  //   case "3":
  //     bodyPart = "PIERNA";
  //     break;
  //   case "4":
  //     bodyPart = "ESPALDA";
  //     break;
  //   case "5":
  //     bodyPart = "HOMBRO";
  //     break;
  //   case "6":
  //     bodyPart = "ABDOMINALES";
  //     break;
  //   case "7":
  //     bodyPart = "CARDIO";
  //     break;

  //   default:
  // }

  // switch (option) {
  //   case 1:
  //     let bodyPart = prompt(
  //       "Ingrese la parte del cuerpo del entreno que va a crear:\n1. pecho\n2. brazo\n3. pierna\n4. espalda\n5. hombro\n6. abdominales\n7. cardio "
  //     );

  //     switch (bodyPart) {
  //       case "1":
  //         bodyPart = "PECHO";
  //         break;
  //       case "2":
  //         bodyPart = "BRAZO";
  //         break;
  //       case "3":
  //         bodyPart = "PIERNA";
  //         break;
  //       case "4":
  //         bodyPart = "ESPALDA";
  //         break;
  //       case "5":
  //         bodyPart = "HOMBRO";
  //         break;
  //       case "6":
  //         bodyPart = "ABDOMINALES";
  //         break;
  //       case "7":
  //         bodyPart = "CARDIO";
  //         break;

  //       default:
  //         break;
  //     }
  //     const train = prompt("Ingrese el ejercicio:");

  //     let difficulty = prompt(
  //       "Ingrese la dificultad del ejercicio:\n1. suave\n2. medio\n3. dura"
  //     );
  //     switch (difficulty) {
  //       case "1":
  //         difficulty = "SUAVE";
  //         break;
  //       case "2":
  //         difficulty = "MEDIO";
  //         break;
  //       case "3":
  //         difficulty = "DURO";
  //         break;
  //     }
  //     const id = getLastId() + 1;
  //     createTrain(id, bodyPart, train, difficulty);
  //     break;
  //   case 2:
  //     getAllTrains();
  //     break;
  //   case 0:
  //     alert("Gracias, regrese pronto");
  //     break;
  //   default:
  //     alert("Intente nuevamente");
  //     break;
  // }
}
function ver() {
  tranins.forEach((train) => {
    let agregarEjercicios = document.getElementById("cambiarSection");
    agregarEjercicios.innerHTML = `
    <h2>Estos son los entrenos asignados</h2>
    <p">Tu entrenador te ha asignado un ejercicio de:</p>
    <h3>"${ train.bodyPart}"</h3>
    <p">El ejercicio que vas a hacer es:</p>
    <h3>"${train.train}"</h3>
    <p">su dificultad es:</p>
    <h3>"${train.difficulty}"</h3>

    `;
    // console.log(
    //   "Tu entrenador te ha asignado un ejercicio de: " +
    //     train.bodyPart +
    //     ", El ejercicio que vas a hacer es " +
    //     train.train +
    //     ", su dificultad es " +
    //     train.difficulty +
    //     ", y este ejercicio se identifica con el ID # " +
    //     train.id
    // );
  });
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
  `
}

function createTrain(id, bodyPart, train, difficulty) {
  tranins.push({
    id,
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
