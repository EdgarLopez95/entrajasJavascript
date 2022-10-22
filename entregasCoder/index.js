const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  console.log(data);
  //return data;

  // muestra el detalle de ese ejercicio en esa pantalla
  function mostrarDetalle(ejercicio) {
    const contenedorDeEjercicios = document.getElementById(
      "contenedor-de-ejercicios"
    );
    contenedorDeEjercicios.innerHTML = "";

    contenedorDeEjercicios.innerHTML = `
  <img src="${ejercicio.imagen}" alt="${ejercicio.titulo}">
  <h3>${ejercicio.titulo}</h3>
  <p> ${ejercicio.parteDelCuerpo}</p>
  <p> ${ejercicio.difucultad}</p>
  <a href="${ejercicio.link}" target="_blank">Ver Trailer</a>
  `;
    crearBotonVolver();
  }
  // crea el boton de regresar en el detalle
  function crearBotonVolver() {
    const contenedorDeEjercicios = document.getElementById(
      "contenedor-de-ejercicios"
    );
    const botonVolver = document.createElement("button");
    botonVolver.innerText = "volver";
    botonVolver.addEventListener("click", () => {
      mostrarEjercicios(data);
    });
    contenedorDeEjercicios.append(botonVolver);
  }
  // crea boton ver detalle
  function crearBotonVerDetalle(ejercicio) {
    const button = document.createElement("button");
    button.innerText = "Ver Detalle";
    button.addEventListener("click", () => {
      mostrarDetalle(ejercicio);
      crearBotonVolver();
    });
    return button;
  }

  //muestra los ejercicios
  function mostrarEjercicios(ejercicios) {
    const contenedorDeEjercicio = document.getElementById(
      "contenedor-de-ejercicios"
    );
    contenedorDeEjercicio.innerHTML = "";

    ejercicios.forEach((ejercicio) => {
      const divEjercicio = document.createElement("div");

      divEjercicio.innerHTML = `
    <img src="${ejercicio.imagen}" alt="${ejercicio.titulo}">
    <h3>${ejercicio.titulo}</h3>
    <p> ${ejercicio.parteDelCuerpo}</p>
    <p> ${ejercicio.difucultad}</p>
    <a href="${ejercicio.link}" target="_blank">Ver Ejemplo</a>
    `;
      const button = document.createElement("button");
      divEjercicio.append(button);
      button.innerText = "Ver Detalle";
      button.addEventListener("click", () => {
        mostrarDetalle(ejercicio);
      });

      console.log(crearBotonVerDetalle(ejercicio));

      contenedorDeEjercicio.appendChild(divEjercicio);
    });
  }

  mostrarEjercicios(data);
};

getData();
