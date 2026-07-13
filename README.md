# PokéDex App ⚡

Aplicación web desarrollada con **React**, **Vite** y **Tailwind CSS** que consume la **PokéAPI** para mostrar información de Pokémon de forma dinámica. El proyecto fue desarrollado siguiendo una arquitectura modular, aplicando separación de responsabilidades y buenas prácticas para facilitar su mantenimiento y escalabilidad.

---

# 🚀 Características

* Consumo de datos desde la PokéAPI mediante servicios independientes.
* Arquitectura modular con separación entre componentes, hooks y servicios.
* Uso de **Custom Hooks** para centralizar la lógica de negocio.
* Diseño responsivo utilizando Tailwind CSS.
* Manejo de estados de carga durante las peticiones asíncronas.
* Componentes reutilizables y fáciles de mantener.

---

# 📁 Estructura del Proyecto

```text
src/
│
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes reutilizables
├── hooks/           # Custom Hooks
├── services/        # Consumo de la PokéAPI
├── App.jsx
└── main.jsx
```

### Descripción

| Carpeta       | Descripción                                                       |
| ------------- | ----------------------------------------------------------------- |
| `components/` | Componentes visuales reutilizables como Navbar, Hero, Cards, etc. |
| `hooks/`      | Hooks personalizados encargados de la lógica y manejo de estados. |
| `services/`   | Funciones encargadas del consumo de la API.                       |
| `assets/`     | Recursos estáticos como imágenes e íconos.                        |

---

# 🛠️ Tecnologías Utilizadas

* React
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* PokéAPI

---
## 🛠️ Instalación

### Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* **Node.js** (versión 18 o superior recomendada)
* **pnpm** como gestor de paquetes

Si aún no tienes **pnpm**, puedes instalarlo con:

```bash
npm install -g pnpm
```

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/rherndz/poke-app-proyect.git
```

Entrar al proyecto:

```bash
cd pokedex-app
```

---

### 2. Instalar las dependencias

```bash
pnpm install
```

---

### 3. Ejecutar el proyecto

```bash
pnpm run dev
```

Abrir el navegador en:

```text
http://localhost:****
```

---

# 🌐 Variables de Entorno

Este proyecto **no requiere variables de entorno** para su ejecución.

La información se obtiene directamente desde la API pública de PokéAPI:

```text
https://pokeapi.co/api/v2/pokemon
```

Al ser un servicio público, no es necesario configurar archivos `.env` ni credenciales de acceso.

---

# 🧪 Pruebas Realizadas

Durante el desarrollo se realizaron pruebas manuales para verificar el correcto funcionamiento de la aplicación.

### ✅ Consumo de la API

* Verificación de respuestas HTTP exitosas.
* Obtención correcta de los datos desde PokéAPI.

### ✅ Renderizado de Componentes

* Visualización correcta de las tarjetas de Pokémon.
* Renderizado dinámico de imágenes, nombres e identificadores.

### ✅ Estado de Carga

* Validación del indicador de carga mientras se obtienen los datos.

### ✅ Responsive Design

Pruebas realizadas en diferentes tamaños de pantalla para verificar:

* Desktop
* Tablet
* Mobile

### ✅ Manejo de Errores y Carga

Para evitar que la aplicación se quede en blanco si la API falla o tarda en responder, se agregaron tres controles sencillos y efectivos:

1. **Pantalla de Carga (`isLoading`):** Muestra un spinner animado mientras se descargan los datos. Esto evita que los componentes intenten renderizar Pokémon que aún no existen en la aplicación.

2. **Control de Datos Vacíos (`!pokemons`):** Si por alguna razón la lista llega vacía, el código frena el renderizado inmediatamente para que no ocurra un error crítico en el navegador.

3. **Interfaz de Rescate (`error`):** Si la API de Pokémon se cae o no hay internet, la página no se rompe; en su lugar, muestra un mensaje amigable con un botón para reintentar la carga.

---

### 🖥️ Vista de Escritorio
<p align="center">
  <img src="../src/assets/images_desing/responsive-desing-desktop.webp" alt="Vista General Escritorio" width="800">
</p>

<p align="center">
  <img src="../src/assets/images_desing/responsive-desing-desktop-grid.webp" alt="Grid de Pokémon Escritorio" width="800">
</p>

### 📱 Vista Mobile & Tablet
<p align="center">
  <img src="../src/assets/images_desing/responsive-desing-tablet.webp" alt="Vista Tablet" width="600">
</p>

<p align="center">
  <img src="../src/assets/images_desing/responsive-desing-mobile.webp" alt="Vista Móvil" width="350">
</p>

<p align="center">
  <img src="../src/assets/images_desing/responsive-desing-mobile-menu.webp" alt="Vista Móvil" width="350">
</p>


---

# 📌 Convención de Commits

Durante el desarrollo se utilizó una nomenclatura basada en prefijos semánticos para mantener un historial de cambios organizado.

| Prefijo     | Descripción                                                  |
| ----------- | ------------------------------------------------------------ |
| `feat:`     | Nueva funcionalidad para el usuario.                         |
| `fix:`      | Corrección de un error o bug en el código.                   |
| `style:`    | Cambios visuales, estilos (Tailwind/CSS) o formato.          |
| `assets:`   | Inclusión o actualización de archivos multimedia (imágenes, iconos). |
| `chore:`    | Tareas de mantenimiento, configuraciones iniciales o del entorno. |
| `docs:`     | Cambios o mejoras en la documentación (README).              |
| `refactor:` | Reestructuración del código sin modificar su funcionamiento. |
---

# 👨‍💻 Autor

**Roberto Hernández**

Proyecto desarrollado como parte de una prueba técnica utilizando React, Vite, Tailwind y la PokéAPI.
