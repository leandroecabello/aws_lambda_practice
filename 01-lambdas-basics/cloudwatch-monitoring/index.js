export async function handler(event) {
    console.log("This is a log message in CloudWatch!");

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda with CloudWatch logging!'),
    };
    return response;
}