// ============================================================
// Contador de likes con manipulación del DOM
// ============================================================

// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const botonLike = document.getElementById("btn-like");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const mensajeSinRegistros = document.getElementById("sin-registros");

// 2. Variable de estado numérica
let likes = 0;

// 3. Formatear la hora actual en formato HH:MM:SS
function obtenerHoraActual() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

// 4. Actualizar el contador en la interfaz
function actualizarInterfaz() {
  textoContador.textContent = likes;
}

// 5. Registrar un clic en la tabla (siempre arriba)
function registrarClic() {
  const fila = document.createElement("tr");
  const celdaClic = document.createElement("td");
  const celdaHora = document.createElement("td");

  celdaClic.textContent = likes;
  celdaHora.textContent = obtenerHoraActual();

  fila.appendChild(celdaClic);
  fila.appendChild(celdaHora);

  cuerpoTabla.prepend(fila);
  mensajeSinRegistros.hidden = true;
}

// 6. Evento click del botón "Dar like"
botonLike.addEventListener("click", () => {
  likes++;
  registrarClic();
  actualizarInterfaz();
});

// 7. Estado inicial (contador en cero)
actualizarInterfaz();
