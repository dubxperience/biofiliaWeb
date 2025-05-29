# Bitácora del cacao

**Bitácora del cacao** es un sitio interactivo que narra el proceso de **domesticación del cacao** a través de una **línea del tiempo digital**, acompañado de **dos juegos dinámicos** que buscan educar de forma lúdica sobre el contexto biológico y cultural del cacao. Es un complemento de la experiencia física de Alianza Biofilia

---

## Estructura del proyecto

```
biofiliaWeb/
│
├── public/                 # Archivos estáticos, logos, imágenes generales
│
├── src/
│   ├── assets/             # Recursos importados directamente en los componentes (íconos, imágenes específicas)
│   ├── components/         # Componentes reutilizables y UI
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── StepsNavigator.jsx
│   │   └── Templates/      # Plantillas y layouts
│   │
│   ├── data/               # Archivos .json con las preguntas de los juegos
│   │   ├── game1.json
│   │   └── game2.json
│   │
│   ├── pages/              # Páginas principales del sitio
│   │   ├── timeline/       # Línea del tiempo
│   │   │   ├── fase-1/
│   │   │   ├── fase-2/
│   │   │   └── ...
│   │   ├── this-or-that/   # Juego tipo "esto o aquello"
│   │   └── mapa-game/      # Juego interactivo del mapa
│   │
│   └── styles/             # Estilos globales (CSS)
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Instalación y ejecución local

1. **Clona el repositorio:**

```bash
git clone https://github.com/dubxperience/biofiliaWeb.git
cd biofiliaWeb
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Ejecuta el proyecto en modo desarrollo:**

```bash
npm run dev
```

> El proyecto corre en el puerto **4200** por defecto.

---

## Despliegue en Firebase

Este proyecto está configurado para desplegarse en Firebase Hosting.

1. **Compila el proyecto:**

```bash
npm run build
```

2. **Despliega a Firebase (requiere tener CLI configurada):**

```bash
firebase deploy
```

---

## Dependencias clave

Estas son las librerías principales utilizadas en el desarrollo:

### **Frontend e interactividad**

- `react` y `react-dom`: Librería principal de UI.
- `react-router-dom`: Navegación entre rutas y páginas.
- `@dnd-kit/core`: Sistema de drag-and-drop usado para la línea del tiempo o juegos.
- `sweetalert2`: Alertas y popups interactivos.
- `motion`: Animaciones fluidas.

### **Íconos**

- `@fortawesome/react-fontawesome`: Iconografía moderna y configurable.

### **Dev & Build**

- `vite`: Empaquetador rápido para desarrollo.

---

## Descripción general del sitio

**Bitácora del cacao** es una experiencia digital educativa centrada en la historia del cacao. Presenta:

- Una **línea del tiempo interactiva** dividida por fases, que narra la domesticación del cacao desde sus orígenes.
- Un juego tipo **“This or That”**, que pone al usuario a decidir entre dos opciones.
- Un **Drag and Drop en Mapa**, donde se relacionan lugares con eventos históricos.
- Un diseño responsivo, accesible y animado, enfocado en públicos jóvenes.
- Integración con Firebase para despliegue.

---

## Autores

- **Dubier Barrientos**
- **Xiomara Marulanda**
- **Isabel Melguizo**
- **Sofía Chamorro**
- **Simón Estrada**

---

## Contacto

Si deseas contribuir, reportar errores o proponer mejoras, no dudes en abrir un issue o contactarnos por GitHub.
