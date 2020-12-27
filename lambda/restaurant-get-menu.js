const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        TableName : 'restaurants-table',
        Key: { restaurantId : event.restaurantId },
      };
      dynamodb.get(params, function(err, data) {
        if (err) console.log("err-lambda-paf-restaurant-get-err", err);
        else callback(null, data.Item);
      });
};
