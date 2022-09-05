alert("Bienvenido al gimnacio bodytech");

const personas = [
  {
    nombre: "Edgar",
    plan: "intermedio",
    precio: "20 USD",
  },
  {
    nombre: "Felipe",
    plan: "Basico",
    precio: "10 USD",
  },
  {
    nombre: "Andres",
    plan: "Avanzado",
    precio: "30 USD",
  },
  {
    nombre: "Marco",
    plan: "intermedio",
    precio: "20 USD",
  },
  {
    nombre: "Matias",
    plan: "Basico",
    precio: "10 USD",
  },
];

let informacion;
do {
  informacion = parseInt(
    prompt(
      "Que información desea observar ?: \n1)Nombres de las personas registradas \n2)planes las personas registradas \n3)precios las personas registradas "
    )
  );
} while (informacion != 1 && informacion != 2 && informacion != 3);

switch (informacion) {
  case 1:
    for (persona of personas) {
      console.log(persona.nombre);
    }
    break
  case 2:
    for (persona of personas) {
      console.log(persona.plan);
    }
    break
  case 3:
    for (persona of personas) {
      console.log(persona.precio);
    }
    break
}
