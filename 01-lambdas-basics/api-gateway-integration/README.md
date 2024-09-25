# Exponer una Lambda como Servicio HTTP con API Gateway
En esta práctica, configuraremos un API Gateway para exponer una función Lambda como un servicio HTTP. Esto es útil cuando queremos que nuestra función Lambda sea accesible desde el exterior, por ejemplo, para responder a solicitudes de una aplicación web o móvil.

### Objetivo
Configurar una función Lambda para que pueda ser llamada a través de una URL pública utilizando Amazon API Gateway.

### Pasos:
**1. Crear la Función Lambda**: Desarrolla una función Lambda sencilla que responda a las solicitudes HTTP con un mensaje.

**2. Configurar API Gateway**: En la consola de AWS, crea un nuevo API Gateway. Configura un método HTTP (por ejemplo, GET) y vincúlalo a la función Lambda.

**3. Desplegar el API Gateway**: Despliega el API Gateway y obtén la URL pública.

**4. Probar la Integración**: Realiza una solicitud HTTP a la URL del API Gateway y verifica la respuesta de la Lambda.
```
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from your Lambda via API Gateway!'),
    };
};
```

### Probar el Endpoint
Una vez que el API Gateway esté configurado y desplegado, puedes probar la URL generada en tu navegador o con herramientas como curl o Postman para verificar que la función Lambda está respondiendo correctamente.


## Crear un API REST en API Gateway
### 1. Accede a la consola de Amazon API Gateway: 
- Ir a [API Gateway]() y asegúrate de estar en la misma región que tu Lambda.

### 2. Crea una nueva API REST:
- Haz clic en "Crear API".
- Selecciona "REST API" (opción "Creación manual").
- Asigna un nombre a tu API (por ejemplo, MyLambdaRestApi).
- Añade una breve descripción si lo deseas.
- Selecciona "Regional" en "Tipo de endpoint".
- Haz clic en "Crear API".

### 3. Configurar el Recurso y Método HTTP
1. Crear un recurso: 
    - En la nueva API, selecciona "Acciones" y luego "Crear recurso".
    - Escribe el nombre del recurso (por ejemplo, myresource).
    - Asegúrate de que "Configurar como recurso de proxy" NO esté seleccionado.
    - Haz clic en "Crear recurso".

2. Crear un método HTTP:
    - Selecciona el recurso creado (por ejemplo, /myresource).
    - Haz clic en "Acciones" y selecciona "Crear método".
    - Elige GET como el método.
    - Haz clic en el icono de chequeo para confirmar.
    - En "Integración del método", selecciona "Función Lambda" como tipo de integración.
    - Asegúrate de desmarcar la casilla "Usar integración de proxy de Lambda".
    - Selecciona la región correcta y escribe el nombre de la función Lambda que creaste (*`MyApiGatewayLambda`*).
    - Haz clic en *"Crear metodo"*.

### 4. Configurar la Respuesta del Método
1. Configurar las respuestas del método:
    - En el mismo método GET que configuraste, selecciona "Respuestas del método" en el panel de la izquierda.
    - Aquí puedes personalizar cómo se manejan las respuestas, pero para esta práctica, puedes dejar las configuraciones predeterminadas.

### 5. Desplegar la API
1. Desplegar la API:    
    - Haz clic en "Implementar API".
    - Crea una nueva etapa de despliegue (por ejemplo, dev).
    - Asigna un nombre a la etapa (por ejemplo, dev) y opcionalmente añade una descripción.
    - Haz clic en "Implementación".

2. Obtener la URL del endpoint:
    - Después de desplegar, verás una URL del endpoint, algo como https://<id>.execute-api.<region>.amazonaws.com/dev/myresource.
    - Copia esta URL.

### 6. Probar la API REST
1. Probar el endpoint:
    - Abre un navegador web o usa una herramienta como curl o Postman.
    - Navega a la URL del endpoint copiada anteriormente.
    - Deberías recibir una respuesta que diga "Hello from your Lambda via API Gateway!".

### 7. Verificar los Logs en CloudWatch
1. Acceder a CloudWatch:
    - Ir a [CloudWatch]().
    - En el panel de CloudWatch, selecciona "Logs".
    - Busca el grupo de logs asociado con tu función Lambda.
    - Revisa los logs para ver la ejecución de la función.