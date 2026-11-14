# Taller: Interactividad con el DOM y React Native

Taller compuesto por dos versiones de una misma aplicación de contador de likes:

1. **Versión web** con HTML, CSS y JavaScript, manipulando el DOM.
2. **Versión móvil** con React Native + Expo, usando el estado de React.

## Parte 1: aplicación web

Aplicación construida con **HTML, CSS y JavaScript puro**. Cada clic actualiza
el contador y agrega una fila a la tabla de registros con la hora exacta, sin
usar frameworks ni librerías.

### Funcionalidad

- Contador de likes que inicia en cero.
- Botón **Dar like**: incrementa el contador y registra el clic.
- Botón **Restar like**: disminuye el contador sin bajar de cero (**Reto 1**).
- Registro de clics con la hora en formato `HH:MM:SS`, del más reciente al más antiguo.
- Tema oscuro automático al superar los 10 likes (**Reto 2**).
- Contador y registros accesibles (`aria-live` en el contador).

### Ejecutar la versión web

No requiere instalación. Abre `index.html` en el navegador o, si usas
Visual Studio Code, inicia la extensión **Live Server**.

```bash
# Opción con Python instalado
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Parte 2: aplicación móvil

La carpeta `aplicacionClics/` contiene la misma aplicación desarrollada con
**React Native + Expo**. No hay manipulación del DOM: la interfaz se construye
con `View`, `Text` y `TouchableOpacity`, y el estado se maneja con `useState`.

### Funcionalidad

- Contador que inicia en cero y registra cada clic con la hora (`HH:MM:SS`).
- Botón **Restar like** que no permite bajar de cero.
- Tema oscuro automático al superar los 10 likes.
- Registros ordenados del más reciente al más antiguo.

### Ejecutar la app móvil

```bash
cd aplicacionClics
npm install
npx expo start
```

Escanea el código QR con **Expo Go** o abre la versión web con
`npx expo start --web`.

## Estructura

```
Taller_DOM_React/
├── index.html              # Estructura de la versión web
├── css/
│   └── styles.css          # Estilos, tabla y tema destacado
├── js/
│   └── script.js           # Lógica del contador y manipulación del DOM
├── aplicacionClics/        # Versión móvil con React Native + Expo
│   ├── index.ts
│   ├── app.json
│   ├── package.json
│   └── src/app/index.tsx
├── README.md
└── taller_DOM_React.pdf
```

## Tecnologías

- HTML5 semántico
- CSS3 (Flexbox y transiciones)
- JavaScript (DOM API y eventos)
- React Native + Expo
- TypeScript
