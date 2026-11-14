# Taller: Interactividad con el DOM

Aplicación web de un contador de likes construida con **HTML, CSS y JavaScript puro**.
Cada clic actualiza el contador y agrega una fila a la tabla de registros con la
hora exacta, sin usar frameworks ni librerías.

## Funcionalidad

- Contador de likes que inicia en cero.
- Botón **Dar like**: incrementa el contador y registra el clic.
- Botón **Restar like**: disminuye el contador sin bajar de cero (**Reto 1**).
- Registro de clics con la hora en formato `HH:MM:SS`, del más reciente al más antiguo.
- Tema oscuro automático al superar los 10 likes (**Reto 2**).
- Contador y registros accesibles (`aria-live` en el contador).

## Estructura

```
Taller_DOM_React/
├── index.html          # Estructura de la página
├── css/
│   └── styles.css      # Estilos, tabla y tema destacado
├── js/
│   └── script.js       # Lógica del contador y manipulación del DOM
├── aplicacionClics/    # Versión móvil con React Native + Expo
└── taller_DOM_React.pdf
```

## Ejecutar la versión web

No requiere instalación. Abre `index.html` en el navegador o, si usas
Visual Studio Code, inicia la extensión **Live Server**.

```bash
# Opción con Python instalado
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Tecnologías

- HTML5 semántico
- CSS3 (Flexbox, transiciones y variables de estado por clase)
- JavaScript (DOM API, eventos y manipulación dinámica de nodos)
