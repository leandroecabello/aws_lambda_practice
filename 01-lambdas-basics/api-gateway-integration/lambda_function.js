export async function handler(event) {
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from your Lambda via API Gateway!'),
    };
}