# Monitoreo de Lambdas con CloudWatch

En esta práctica, vemos cómo las funciones Lambda generan logs y cómo acceder a ellos usando CloudWatch.

## Pasos:

1. Desplegar la Lambda que genera logs.
2. Navegar a CloudWatch en la consola de AWS.
3. Revisar los logs generados para entender el comportamiento de la Lambda.

### 🔎 NOTA:
En caso de no visualizar los logs, revisar los permisos del Rol que debe incluir la politica ***`AWSLambdaBasicExecutionRole`***.

Configurar el Rol de Ejecución de Lambda:

El rol asociado a tu función Lambda debe tener permisos para crear y gestionar logs en CloudWatch. Para hacerlo, sigue estos pasos:

1. Acceder a la Consola de IAM.
2. Seleccionar el Rol de Lambda:
    - En la barra lateral izquierda, selecciona "Roles".
    - Buscar y seleccionar el rol que has asociado a tu función Lambda.
3. Adjuntar la Política de CloudWatch Logs:
    - En la pestaña *"Permissions"*  del rol, selecciona *"Add permissions"*.
    - Selecciona *"Attach policies"*.
    - Buscar y seleccionar la política *`AWSLambdaBasicExecutionRole`*. Esta política proporciona los permisos necesarios para que Lambda registre logs en CloudWatch.
 - Hacer clic en *"Add permissions"*.

La política *`AWSLambdaBasicExecutionRole`* incluye permisos como:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
```