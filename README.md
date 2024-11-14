# RIMAC Frontend Challenge

Esta prueba técnica, organizada por Softtek, consiste en desarrollar una aplicación frontend moderna utilizando prácticas de desarrollo recomendadas.

Este proyecto fue construido con **React.js** y **TypeScript**, garantizando un código escalable y con tipado robusto. Además, se empleó **Sass** para una gestión eficiente de los estilos, siguiendo principios de buenas prácticas en el desarrollo frontend.

## Funcionalidades

- **React.js**: Implementación de una interfaz de usuario dinámica y escalable con React.
- **Consumo de APIs**: Integración de APIs para obtener datos de usuarios y planes.
- **Metodología BEM**: Uso de BEM para mantener organizados los estilos en SCSS.
- **Componentización**: Creación de componentes reutilizables utilizando Sass.
- **Responsive Design**: Adaptabilidad de la aplicación a múltiples tamaños de pantalla.
- **Validación de Formularios**: Manejo de formularios con validaciones para mejorar la experiencia del usuario.
- **Código limpio y modular**: Organización basada en principios SOLID y estructura clara de carpetas.

## Criterios de Evaluación

1. **Estilos**:  
   Aplicación de **Sass** y buenas prácticas de CSS junto con la organización mediante BEM donde sea pertinente.

2. **Clean Code**:
   Adopción de **clean code** para asegurar un código sencillo, comprensible y bien organizado.

3. **React**:  
   Uso eficiente de componentes funcionales reutilizables.

4. **Responsive Design**:  
   Diseño adaptable a varias resoluciones mediante un **Grid System** y media queries.

## Tecnologías

Las tecnologías utilizadas en este proyecto son:

- **React**: Biblioteca para crear interfaces interactivas.
- **TypeScript**: Añade tipado estático a JavaScript.
- **Sass**: Preprocesador CSS que mejora la gestión de estilos.
- **Axios**: Maneja las peticiones HTTP.
- **Vite**: Herramienta para un desarrollo ágil.
- **Git**: Control de versiones.

## Principios de Diseño y Buenas Prácticas

- **SOLID**: Se han aplicado principios SOLID para asegurar un código mantenible y extensible.
  - **Single Responsibility Principle**: Cada componente tiene una única responsabilidad.
  - **Open/Closed Principle**: Los componentes están diseñados para ser extendidos sin necesidad de modificar el código existente.
- **Clean Code**: Se ha seguido la filosofía de clean code para asegurar un código legible y fácil de entender.

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Instala las dependencias**:

   ```bash
   npm install
   ```

2. **Inicia la aplicación**:

   ```bash
   npm run dev
   ```

3. Duplica el archivo `.env.template` como `.env.local` y configura las variables necesarias.

4. **Ejecuta la aplicación nuevamente**:

   ```bash
   npm run dev
   ```

## Uso

La aplicación ofrece tres secciones principales:

1. **Inicio - Formulario**: En esta sección, se solicita ingresar DNI/CE, número de documento, y celular. Estos campos son obligatorios y serán validados al enviar el formulario.

2. **Planes - Selección de Planes**: Tras completar el formulario, se accede a la selección de planes, donde se elige entre diferentes opciones.

3. **Resumen - Vista de Información**: En la última sección, se presenta un resumen con los datos ingresados y el detalle del plan seleccionado.

---

Cualquier feedback o mejora es bienvenido. ¡Gracias por revisar el proyecto! 🚀
