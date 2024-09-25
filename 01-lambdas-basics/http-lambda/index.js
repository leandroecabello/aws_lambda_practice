/**
 * Ejemplo basico de una funcion lambda para probar en aws
 * Se puede subir un funcion para correr en aws o bien 
 * utilizar la consolo de aws para generar el codigo necesario 
 * @param {*} event 
 * @returns  
 */
export async function handler(event) {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
}