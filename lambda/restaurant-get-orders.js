const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        TableName: "Ichot-Orders",
        FilterExpression : 'fullFillStatus = :ffs',
        ExpressionAttributeValues : {':ffs' : false}
    };

    dynamodb.scan(params, function(err, data){
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            callback(null, { status: 200, orders: data.Items});
        }
    });
};