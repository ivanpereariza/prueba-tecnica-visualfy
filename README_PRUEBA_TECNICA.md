# Prueba técnica Visualfy

## Contexto

Queremos desarrollar una aplicación web que permita a los usuarios conocer las alertas disponibles en Visualfy Places.

Debes tener en cuenta que:

- Debe existir un frontend y un backend separados. El frontend actuará a modo de visualización de datos y el backend será quien gestione la información.

Como no es requisito el uso de ninguna base de datos, puedes utilizar los archivos `alerts.json` y `priority.json` a modo de base de datos en el backend.

## Requisitos

### Funcionalidad

1. **Filtrado de alertas**: La aplicación debe ser capaz de filtrar las alertas por prioridad y por nombre.

2. **Creación de nuevas alertas**: La aplicación debe permitir crear nuevas alertas. Las alertas no es necesario que persistan una vez que se cierre el proceso del backend.

3. **Accesibilidad**: Se tendrá en cuenta la accesibilidad del frontend.

4. **Despliegue**: La aplicación no es necesario desplegarla en ningún sitio, pero las instrucciones para su despliegue en local deben ser claras.

5. **Tests**: La aplicación debe tener como mínimo un test. El que consideres más importante. **NOTA**: *Uno para frontend y otro para backend*

### Código

1. **Versiones**: El único requisito de versión es que la versión de Vue del frontend sea superior o igual a la 3.0.

2. **Backend**: El backend puede estar desarrollado con cualquier framework de Node.

3. **Frontend**: No se debe utilizar ninguna librería para las peticiones HTTP.

## Puntos extra opcionales

- **Documentación**: Utiliza cualquier sistema de documentación que consideres oportuno para la API.

- **Logs**: Implementa un sistema de logs con rotación.

- **Informes**: Muestra un gráfico en el frontend la cantidad de alertas de cada tipo que se han producido. Puedes elegir el tipo de gráfico que creas más conveniente.

- **Persistencia**: Implementa cualquier sistema de persistencia de datos que consideres oportuno.


## Referencias

- Introducción a la accesibilidad web: https://www.w3.org/WAI/fundamentals/accessibility-intro/

- Wiki de soporte de Visualfy: https://support.visualfy.com/