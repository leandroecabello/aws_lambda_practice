# Lambda Interactions

En esta sección, practicaremos cómo hacer que varias Lambdas interactúen entre sí. Exploraremos el uso de SQS, SNS, y AWS Step Functions.

## Prácticas:

1. Comunicación entre Lambdas usando SQS.
2. Publicación y suscripción con SNS.
3. Orquestación de Lambdas con Step Functions.

## Objetivos de esta Sección
1. Entender las Interacciones Básicas entre Lambdas: Llamadas síncronas y asíncronas entre funciones Lambda.
2. Usar Amazon SNS (Simple Notification Service) para Comunicación: Publicar mensajes a un tópico SNS y suscribirse a este tópico con funciones Lambda.
3. Usar Amazon SQS (Simple Queue Service) para Comunicación: Enviar mensajes a una cola SQS y procesar estos mensajes con funciones Lambda.
4. Integrar Lambda con AWS Step Functions: Crear flujos de trabajo de varias funciones Lambda utilizando AWS Step Functions.

## Paso a Paso de esta Sección
### 1. Interacciones Básicas entre Lambdas
**Objetivo**: Aprender a invocar una Lambda desde otra Lambda.

    1.a. **Crear dos funciones Lambda**:

    - **Lambda A**: Función que invoca a otra función.
    - **Lambda B**: Función que recibe la invocación y devuelve una respuesta.

### Lambda A (Invocador):
```
// Las 2 primeras lineas son opcional, si se hace desde consola de aws no es necesario
const AWS = require('aws-sdk'); 
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
    const params = {
        FunctionName: 'LambdaB', // Nombre de la Lambda B
        Payload: JSON.stringify({ message: 'Hello from Lambda A' }),
    };

    try {
        const result = await lambda.invoke(params).promise();
        console.log('Response from Lambda B:', result);
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.error('Error invoking Lambda B:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Error invoking Lambda B'),
        };
    }
};
```
### Lambda B (Receptora):

```
exports.handler = async (event) => {
    console.log('Received event:', event);
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda B'),
    };
};

```

1.b. Configurar Permisos:

Asegúrate de que la Lambda A tenga permisos para invocar la Lambda B. Esto se hace añadiendo una política en el rol de ejecución de Lambda A.

**Política para Permitir Invocación**:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "lambda:InvokeFunction",
      "Resource": "arn:aws:lambda:<REGION>:<ACCOUNT_ID>:function:LambdaB"
    }
  ]
}
```

### 2. Usar Amazon SNS para Comunicación

**Objetivo**: Publicar mensajes a un tópico SNS y procesarlos con una función Lambda.

Crear un Tópico SNS: En la consola de SNS, crea un nuevo tópico.
Crear una Función Lambda para Procesar Mensajes de SNS:

**Lambda SNS Processor**:
```
exports.handler = async (event) => {
    console.log('Received SNS event:', JSON.stringify(event, null, 2));
    return {
        statusCode: 200,
        body: JSON.stringify('Message processed'),
    };
};
```
**Suscribir la Lambda al Tópico SNS**: En la consola de SNS, agrega la Lambda como suscriptor del tópico.

**Publicar Mensajes en el Tópico SNS**: Se puede usar la consola de SNS o un script para publicar mensajes en el tópico y ver cómo la Lambda los procesa.

### 3. Usar Amazon SQS para Comunicación

**Objetivo**: Enviar mensajes a una cola SQS y procesar esos mensajes con una función Lambda.

**Crear una Cola SQS**: En la consola de SQS, crea una nueva cola.
Crear una Función Lambda para Procesar Mensajes de SQS:

**Lambda SQS Processor**:
```
exports.handler = async (event) => {
    for (const record of event.Records) {
        console.log('Received SQS message:', record.body);
    }
    return {
        statusCode: 200,
        body: JSON.stringify('Messages processed'),
    };
};
```

**Configurar la Cola SQS como Evento de la Lambda**: En la consola de Lambda, configura la cola SQS como fuente de eventos para la función Lambda.

**Enviar Mensajes a la Cola SQS**:Puedes usar la consola de SQS o un script para enviar mensajes a la cola y ver cómo la Lambda los procesa.

### 4. Integrar Lambda con AWS Step Functions

**Objetivo**: Crear un flujo de trabajo que orqueste varias funciones Lambda.

**Crear Funciones Lambda para el Flujo de Trabajo**: Define varias funciones Lambda que se usarán en el flujo de trabajo.

**Crear una Máquina de Estado en Step Functions**: En la consola de Step Functions, crea una nueva máquina de estados y define el flujo de trabajo usando el editor visual.

**Ejemplo de Definición de Máquina de Estados**:
```
{
  "Comment": "A simple AWS Step Functions state machine that executes Lambda functions",
  "StartAt": "LambdaA",
  "States": {
    "LambdaA": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:<REGION>:<ACCOUNT_ID>:function:LambdaA",
      "Next": "LambdaB"
    },
    "LambdaB": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:<REGION>:<ACCOUNT_ID>:function:LambdaB",
      "End": true
    }
  }
}
```

**Ejecutar la Máquina de Estados**: Inicia una ejecución de la máquina de estados y observa cómo las funciones Lambda se ejecutan en el orden definido.

## Estructura

- **lambdaA/**: Contiene el código para Lambda A, que invoca a Lambda B.
- **lambdaB/**: Contiene el código para Lambda B, que es invocado por Lambda A.
- **sns-processor/**: Contiene el código para una Lambda que procesa mensajes de SNS.
- **sqs-processor/**: Contiene el código para una Lambda que procesa mensajes de SQS.
- **step-functions-definition.json**: Define el flujo de trabajo para Step Functions.

## Pasos para Configurar y Ejecutar

1. **Interacciones Básicas entre Lambdas:**
   - Despliega Lambda A y Lambda B.
   - Configura permisos para que Lambda A pueda invocar Lambda B.
   - Ejecuta Lambda A y revisa los logs para ver la invocación de Lambda B.

2. **Usar Amazon SNS:**
   - Crea un tópico SNS y una Lambda para procesar mensajes de SNS.
   - Suscribe la Lambda al tópico SNS.
   - Publica mensajes en el tópico y revisa los logs.

3. **Usar Amazon SQS:**
   - Crea una cola SQS y una Lambda para procesar mensajes de SQS.
   - Configura la cola SQS como fuente de eventos para la Lambda.
   - Envía mensajes a la cola y revisa los logs.

4. **Integrar Lambda con AWS Step Functions:**
   - Define funciones Lambda para el flujo de trabajo.
   - Crea una máquina de estados en Step Functions y define el flujo de trabajo.
   - Ejecuta la máquina de estados y observa la ejecución de las Lambdas.