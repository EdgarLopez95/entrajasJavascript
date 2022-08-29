function solicitarNombre() {
  alert("Bienvenido al bodytech");
  let nombre = prompt("Ingrese su nombre");
  while (nombre === "") {
    nombre = prompt("Ingrese su nombre");
  }
}

function mostrarPlanes(){
  let plan = prompt ("Que plan le interesa ?: \n1)Básico\n2)Intermedio\n3)avanzado");
}

solicitarNombre();
mostrarPlanes();