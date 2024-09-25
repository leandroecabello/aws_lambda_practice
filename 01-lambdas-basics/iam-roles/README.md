# Configuración de IAM Roles para Lambdas

Esta práctica explica cómo crear y asignar un IAM Role a una función Lambda en AWS, permitiendo que la Lambda tenga acceso controlado a otros servicios de AWS.

## Pasos:

1. Crear un nuevo IAM Role desde la consola de AWS.
2. Asignar permisos específicos, por ejemplo, acceso a S3 o DynamoDB.
3. Asociar el IAM Role a una función Lambda.

## Pasos para crear un IAM Role
1. **Crear un IAM Role**:

    - Ir a IAM en la consola de AWS.
    - Seleccionar Roles y hacer clic en Create role.
    - Eliger Lambda como tipo de rol y continúar.
    - Añadir permisos como ***AmazonS3FullAccess*** o ***AmazonDynamoDBFullAccess***, dependiendo de lo que desees que la Lambda haga.
    - Dale un nombre al rol (por ejemplo, ***lambda-s3-access-role***).

2. **Asociar el Rol a una Lambda**:
    - Ir a la consola de Lambda y selecciona tu Lambda existente.
    - En la configuración de la función, buscar la sección Execution role y selecciona el rol que creaste.


## IAM Role Configuration

En esta práctica, configuramos un IAM Role (`lambda-s3-access-role`) que permite a la Lambda interactuar con el servicio S3.

## Pasos:

1. Crear un IAM Role en AWS con permisos para S3.
2. Asociar este rol con la Lambda `httpLambdaExample`.