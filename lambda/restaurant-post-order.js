const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const id = (context.awsRequestId).substring(0,7);
    const params = {
        Item: {
            "ordId": `ichot-order-${id}`,
            "orderNumber": event.orderNumber,
            "orderTime": event.orderTime,
            "fullFillTime": event.fullFillTime,
            "fullFillStatus": event.fullFillStatus,
            "itemDetails": event.itemDetails,
            "buyerDetails": {
                "name": event.buyerDetails.name ? event.buyerDetails.name : "",
                "address": event.buyerDetails.address ? event.buyerDetails.address : "",
                "phoneNumber": event.buyerDetails.phoneNumber ? event.buyerDetails.phoneNumber : "",
                "eMail": event.buyerDetails.eMail ? event.buyerDetails.eMail : "",
            },
        },
        TableName: "Ichot-Orders"
    };
     dynamodb.put(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        } else {
            console.log(data.Item);
            callback(null, { status: 200, upload_status: 'success', detail: params.Item});
        }
    });
};


//test temp
{
    "ordId": "ordId",
    "orderNumber": "orderNumber",
    "orderTime": "December 27th 2020, 11:21:43 am",
    "fullFillTime": "fullFillTime",
    "itemDetails": "itemDetails",
    "buyerDetails": {
        "name": "Name",
        "address": "Address",
        "phoneNumber": "PhoneNumber",
        "eMail": "EMail"
    }
}