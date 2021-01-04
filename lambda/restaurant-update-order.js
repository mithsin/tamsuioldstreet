const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        TableName: 'Ichot-Orders',
        Key: { ordId : event.ordId },
        UpdateExpression: 'set #ffs = :ffs, #ffd = :ffd',
        ExpressionAttributeNames: {'#ffs' : 'fullFillStatus', '#ffd' : 'fullFillTime'},
        ExpressionAttributeValues: {
          ':ffs' : event.fullFillStatus,
          ':ffd' : event.fullFillTime
        }
    };
    
    dynamodb.update(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        } else {
            console.log(data.Item);
            callback(null, { status: 200, upload_status: 'fullfilled success'});
        }
    });
};