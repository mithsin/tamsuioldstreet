const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  let paramUE = '';
  let paramUA = {};
  let paramUAV = {};
  
  let allEventToOneObj = {
    UE: [],
    UA: {},
    UAV: {}
  };
  const menuEvent = event.menu ? {
    UE: '#MENU = :MENU',
    UA: {"#MENU": "menu"},
    UAV: {":MENU": event.menu}
  } : '';

const allEvent = [
    menuEvent,
];
// const filterEvents = allEvent.filter((item)=> item !== '')
allEvent.forEach(evntlist =>{
      if(evntlist){
        return allEventToOneObj = {
          UE: (allEventToOneObj.UE).concat(evntlist.UE),
          UA: {...allEventToOneObj.UA, ...evntlist.UA},
          UAV: {...allEventToOneObj.UAV, ...evntlist.UAV}
        };
      }
  });
  const strUE = allEventToOneObj.UE.filter(item => item !== '').join(',');
  paramUE = 'set '.concat(strUE);
  paramUA = allEventToOneObj.UA;
  paramUAV = allEventToOneObj.UAV;

  const params = {
      TableName : 'restaurants-table',
      Key: { restaurantId : event.restaurantId },
      UpdateExpression: paramUE,
      ExpressionAttributeNames: {...paramUA},
      ExpressionAttributeValues: {...paramUAV}
    };
    
    dynamodb.update(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        } else {
            console.log(data.Item);
            callback(null, { status: 200, upload_status: 'success', data: data.Item });
        }
    });
};