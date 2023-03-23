let nombres = [];
const fullName = [];
// Función para generar nombres aleatorios
function generarNombre(count) {
  Papa.parse("csv/nombres.csv", {
    download: true,
    header: true,
    complete: function(result) {
      nombres = result.data;
      for (let i = 0; i < count; i++) {
        // Seleccionar una fila aleatoria del archivo CSV
        var filaAleatoria = nombres[Math.floor(Math.random() * nombres.length)];
        // Seleccionar un número aleatorio de nombres de la fila
        var numeroNombres = Math.floor(Math.random() * 3) + 1; // Seleccionar entre 1 y 3 nombres
        // Crear una lista con los nombres seleccionados
        var nombresSeleccionados = [];
        if (filaAleatoria.nombre1 !== "") { nombresSeleccionados.push(filaAleatoria.nombre1); }
        if (filaAleatoria.nombre2 !== "") { nombresSeleccionados.push(filaAleatoria.nombre2); }
        if (filaAleatoria.nombre3 !== "") { nombresSeleccionados.push(filaAleatoria.nombre3); }
        // Seleccionar los nombres aleatorios de la lista
        var nombresAleatorios = [];
        for (var j = 0; j < numeroNombres; j++) {
          nombresAleatorios.push(nombresSeleccionados[Math.floor(Math.random() * nombresSeleccionados.length)]);
        }
        // Seleccionar los apellidos aleatorios
        var apellidoAleatorio1 = filaAleatoria.apellido1;
        var apellidoAleatorio2 = filaAleatoria.apellido2;
        // Concatenar los nombres y apellidos en una sola cadena
        var nombreCompleto = nombresAleatorios.join(" ") + " " + apellidoAleatorio1 + " " + apellidoAleatorio2;
        // Mostrar el nombre generado en el área de texto
        const fullN = `${nombreCompleto}`;
        fullName.push(fullN);
      }
    } 
  });
  return fullName;
}
