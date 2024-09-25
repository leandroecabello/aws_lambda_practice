export async function handler(event) {
    const secretMessage = process.env.SECRET_MESSAGE || "No secret message found";
    const response = {
        statusCode: 200,
        body: JSON.stringify(secretMessage),
    };
    return response;
}