const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const id = (context.awsRequestId).substring(0,7);
    const params = {
        TableName: "Ichot-Orders",
        Key: { 
            ordId: event.ordId
        }
    };
    dynamodb.delete(params, (err, data) => {
        if(err){
            console.log(err);
            // callback(err);
        } else {
            // console.log(data.Item);
            callback(null, { status: 200, upload_status: 'delete successful'});
        }
    });
};