# Weather App

[Visitar proyecto en producción](https://weatherapp.brunodiaz.es)

Aplicación React de consulta del clima hecha para la prueba técnica nº1.

Se conecta con la API de [openweathermap.org](https://openweathermap.org) para dar la información meteorológica de 3 ciudades preestablecidas.

## Funcionalidades

* Al seleccionar una de las ciudades se mostrará el clima actual: con el icono correspondiente, la descripción y la temperatura; y a continuación la siguiente información complementaria: temperatura máxima y mínima, sensación térmica, velocidad y dirección del viento y humedad.

* También se mostrará un listado de previsiones para los próximos 5 días en intervalos de 3 horas que mostrará la fecha y hora de esa previsión (configuradas para mostrarse en un formato de lectura rápida), el icono, la descripción y la temperatura. Esta se muestra como un listado lateral que se puede deslizar tanto con la barra de desplazamiento como arrastrándola en modo táctil.

* Selección de idioma mediante el componente ubicado de forma fija en la esquina superior derecha. El idioma predeterminado será el inglés y toda la aplicación está traducida.

* En la barra lateral se encuentra también el formulario de contacto oculto, que se mostrará cuando el usuario haga clic en el botón "Contact us". Este formulario tendrá por defecto el botón "Send" deshabilitado hasta rellenar todos los campos. Una vez se envíe, primero se comprobará que el correo y el teléfono sean correctos (si no lo son se mostrará una alerta), si es así se mostrará una consulta al usuario preguntando si toda la información está correcta, si se confirma se mostrará una alerta indicando que el propietario de la aplicación se pondrá en contacto lo antes posible.

## Extras

* Aplicación responsiva: cuando el tamaño de pantalla sea demasiado estrecho pasará a versión móvil donde la barra lateral quedará oculta tras un botón "hamburguesa" dinámico que cambiará a "X" cuando esta esté abierta. Y también se cerrará automáticamente al pulsar una de las ciudades. Además, el formulario de contacto volverá a ocultarse cuando se cierre la barra. Y todos los componentes se adaptarán para ajustarse de manera estética al tamaño de pantalla y/o ventana.

* Modo oscuro y claro sincronizado con la configuración del dispositivo que abra la aplicación. *(Con archivo CSS dedicado a las variables de color, para poder ajustar la apariencia de ambos modos en desarrollo de forma sencilla)*

* Todas las interacciones y actualización de información en pantalla están animadas para una experiencia más agradable.

* El título y favicon de la aplicación son dinámicos, de manera que muestran el clima actual de la ciudad seleccionada.

* Aplicación en producción y bajo un subdominio propio.

*Hecho con ♥ por [BrunoDiaz.es](https://www.brunodiaz.es)*