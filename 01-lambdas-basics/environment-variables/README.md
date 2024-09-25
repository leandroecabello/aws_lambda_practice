# Uso de Variables de Entorno

Esta práctica demuestra cómo utilizar variables de entorno dentro de una función Lambda.

## Pasos:

1. Crear una Lambda y configurar una variable de entorno (*`SECRET_MESSAGE`*).
2. Implementar y probar la Lambda para asegurarse de que usa la variable de entorno correctamente.

## Configurar y Desplegar la Lambda
1. **Configurar la Lambda**:
    - Ir a la consola de Lambda y selecciona tu función Lambda.
    - En la configuración de la función, buscar la sección Environment variables.
    - Añadir una nueva variable llamada *SECRET_MESSAGE* con cualquier valor (por ejemplo, *"This is a secret"*).

2. **Probar la Lambda**:
    - Probar la Lambda en la consola para asegurarse de que devuelve el valor de la variable de entorno.