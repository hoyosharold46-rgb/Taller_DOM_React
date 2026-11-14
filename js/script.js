// ============================================================
// Contador de likes con manipulación del DOM
// ============================================================

// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const botonLike = document.getElementById("btn-like");

// 2. Variable de estado numérica
let likes = 0;

// 3. Actualizar el contador en la interfaz
function actualizarInterfaz() {
  textoContador.textContent = likes;
}

// 4. Evento click del botón "Dar like"
botonLike.addEventListener("click", () => {
  likes++;
  actualizarInterfaz();
});

// 5. Estado inicial (contador en cero)
actualizarInterfaz();
