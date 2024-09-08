# Weather App

[Visitar proyecto en producción](https://weatherapp.brunodiaz.es)

Aplicación React de consulta del clima hecha para la prueba técnica nº2.

Se conecta con la API de [openweathermap.org](https://openweathermap.org) para dar la información meteorológica de 3 ciudades preestablecidas.

## Funcionalidades

* Al seleccionar una de las ciudades se mostrará el clima actual: con el icono correspondiente, la descripción y la temperatura; y a continuación la siguiente información complementaria: temperatura máxima y mínima, sensación térmica, velocidad y dirección del viento y humedad.

* También se mostrará un listado de previsiones para los próximos 5 días en intervalos de 3 horas que mostrará la fecha y hora de esa previsión (configuradas para mostrarse en un formato de lectura rápida), el icono, y la temperatura. Esta se muestra como un listado lateral que se puede deslizar tanto con la barra de desplazamiento como arrastrándola en modo táctil.

* NUEVO - Al hacer click en una de las previsiones se abrirá un modal que mostrará más detalles sobre esta.

* NUEVO - Botón de configuración ubicado en la esquina superior derecha de forma fija. Al ser pulsado mostrará un menú emergente donde se podrá cambiar el idioma de la aplicación y el tema (sistema, claro y oscuro).


* NUEVO - En la barra lateral se encuentra también el botón que abrirá un modal con el formulario de contacto.

* El formulario tendrá por defecto el botón "Send" deshabilitado hasta rellenar todos los campos. Una vez se envíe, primero se comprobará que el correo y el teléfono sean correctos (si no lo son se mostrará una alerta), si es así se mostrará una consulta al usuario preguntando si toda la información está correcta, si se confirma se mostrará una alerta indicando que el propietario de la aplicación se pondrá en contacto lo antes posible.

## Extras

* Aplicación responsiva: cuando el tamaño de pantalla sea demasiado estrecho pasará a versión móvil donde la barra lateral quedará oculta tras un botón "hamburguesa" dinámico que cambiará a "X" cuando esta esté abierta. Y también se cerrará automáticamente al pulsar una de las ciudades. Y todos los componentes se adaptarán para ajustarse de manera estética al tamaño de pantalla y/o ventana.

* Modo oscuro y claro sincronizado con la configuración del dispositivo que abra la aplicación. *(Con archivo CSS dedicado a las variables de color, para poder ajustar la apariencia de ambos modos en desarrollo de forma sencilla)*. El tema será configurable también de forma manual mediante el menú de configuración.

* Todas las interacciones y actualización de información en pantalla están animadas para una experiencia más agradable. 

* NUEVO - Para las nuevas animaciones se ha incluido la librería framer-motion.

* El título y favicon de la aplicación son dinámicos, de manera que muestran el clima actual de la ciudad seleccionada.

* NUEVO - El estilo de la aplicación ha sido completamente actualizado, mostrando ahora un diseño más moderno basado en tarjetas y transparencias.

* NUEVO - El fondo de aplicación es dinámico. Mostrando una imagen de la ciudad seleccionada y acorde al clima actual en esa ciudad. Se han añadido 18 imágenes en formato webp por cada ciudad para esta funcionalidad.

* NUEVO - Se han modificado los iconos representativos del clima por unos svg personalizados de aspecto más agradable.

* NUEVO - Se han tenido en cuenta las apariencias por defecto del navegador Safari, para conseguir un estilo concurrente en cualquier dispositivo.

* Aplicación en producción y bajo un subdominio propio.

## NUEVO - Nuevas herramientas y refactorizado

* Typescript: Toda la aplicación está escrita en este lenguaje y la mayoría de tipos e interfaces están declaradas en archivos .d.ts

* Sass: Los estilos están manejados de una forma más organizada gracias al uso de mixins, variables y anidación que ofrece la herramienta. Cada componente y utilidad tiene su archivo separado para una mejor gestión y depuración, además de ofrecer un escalado de aplicación más sencilla.

* Vitest + Testing-Library: Al hacer uso del comando npm test, se ejecutarán varios test que comprobarán el renderizado correcto y las interacciones del usuario.

* Sweet Alerta 2: Se ha incluido esta librería para ofrecer alertas más agradables y consistentes con el estilo de la aplicación.

* Toda la aplicación ha sido refactorizada siguiendo los principios SOLID.

* Se han creado contextos para hacer uso de estados globales y evitar el "prop drilling"

*Hecho con ♥ por [BrunoDiaz.es](https://www.brunodiaz.es)*