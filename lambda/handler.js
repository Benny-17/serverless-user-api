const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        const data = await db.scan({ TableName: 'Users' }).promise();
        return { statusCode: 200, body: JSON.stringify(data.Items) };
    }

    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        await db.put({
            TableName: 'Users',
            Item: { userId: body.userId, name: body.name }
        }).promise();
        return { statusCode: 201, body: JSON.stringify({ message: "User created." }) };
    }

    return { statusCode: 400, body: "Unsupported request" };
};