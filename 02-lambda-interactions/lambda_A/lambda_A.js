// Las 2 primeras lineas son opcional, si se hace desde consola de aws no es necesario
import { Lambda } from 'aws-sdk'; 
const lambda = new Lambda();

export async function handler(event) {
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
}