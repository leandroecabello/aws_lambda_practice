# AWS Lambda Practice Monorepo

Este monorepo está diseñado para ayudar a practicar y documentar sobre AWS Lambda, Node.js, MongoDB, y el desarrollo de microservicios en la nube. 

Cada carpeta dentro de este repositorio cubre un área específica que es fundamental como preparación técnica:

1. **Lambdas Basics:** Conceptos fundamentales sobre la creación y configuración de AWS Lambda.
2. **Lambda Interactions:** Cómo las Lambdas pueden interactuar entre sí.
3. **Lambda DB Connection:** Conexión de Lambdas con bases de datos, especialmente MongoDB.
4. **Testing:** Escritura de pruebas unitarias e integraciones para Lambdas.
5. **Cloud Design:** Diseño e implementación de servicios en la nube utilizando AWS.

Cada carpeta incluye documentación y código de ejemplo para cada sección.

## ¿Qué es AWS Lambda?
AWS Lambda es un servicio en la nube que permite ejecutar código sin tener que gestionar servidores. En lugar de mantener un servidor constantemente activo, Lambda permite ejecutar funciones de manera automática solo cuando se necesitan. Esto se conoce como *"computación sin servidor"* o *"serverless"*.

### Ejemplos de Uso
**Procesamiento en Tiempo Real**: Por ejemplo, cada vez que un usuario sube una imagen a una aplicación, una función Lambda puede redimensionar la imagen automáticamente y almacenarla en diferentes tamaños.

**Automatización de Tareas**: Lambda puede automatizar tareas como enviar un correo electrónico de confirmación cuando un usuario completa un formulario en línea.

**Integraciones entre Servicios**: Lambda es ideal para integrar diferentes servicios de AWS. Por ejemplo, puede procesar datos que entran a través de una cola (SQS) y guardarlos en una base de datos (DynamoDB).

### ¿Cuándo Usar Lambdas?
**Escalabilidad**: Si tienes tareas que pueden variar mucho en cantidad, Lambda es ideal porque puede escalar automáticamente según la demanda. Por ejemplo, si tienes miles de usuarios que suben archivos simultáneamente, Lambda puede manejar este volumen sin problemas.

**Costos**: Si quieres minimizar costos, Lambda es una buena opción porque solo pagas por el tiempo que se ejecuta tu código. No hay necesidad de pagar por un servidor completo que esté activo 24/7.

**Simplicidad**: Si solo necesitas ejecutar tareas simples y breves sin la complejidad de administrar infraestructura, Lambda te permite centrarte en escribir el código sin preocuparte por la administración de servidores.

## Instalación
Para configurar el entorno de desarrollo y ejecutar el código localmente, sigue estos pasos:

1. Clona el Repositorio:
```
git clone <URL_DEL_REPOSITORIO>
```
2. Navega a la Carpeta del Proyecto:
```
cd <NOMBRE_DE_LA_CARPETA_DEL_PROYECTO>
```
3. Instala las Dependencias:

En cada carpeta que contiene un proyecto de Node.js, ejecuta:
```
npm install
```
Esto instalará todas las dependencias necesarias para ejecutar el código localmente.

### Uso
Después de instalar las dependencias, puedes ejecutar o probar el código en la carpeta correspondiente. Asegúrate de seguir la documentación específica en cada carpeta para obtener instrucciones sobre cómo ejecutar y probar el código.

### Estructura del Proyecto
El repositorio está organizado en las siguientes carpetas:

- ***Lambdas Basics***: Contiene ejemplos y documentación sobre los fundamentos de AWS Lambda.
- ***Lambda Interactions***: Incluye ejemplos sobre cómo las funciones Lambda pueden interactuar entre sí.
- ***Lambda DB Connection***: Proyectos que muestran cómo conectar Lambdas con bases de datos, incluyendo MongoDB.
- ***Testing***: Código y ejemplos sobre cómo escribir pruebas unitarias y de integración para Lambdas.
- ***Cloud Design***: Ejemplos y documentación sobre diseño e implementación de servicios en la nube con AWS.

### Contribuciones
¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras, no dudes en enviar un pull request.

### Licencia
Este proyecto está licenciado bajo la Licencia MIT.