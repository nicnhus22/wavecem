// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-1'});

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2017-12-05'});

const copy = require('copy-dynamodb-table').copy


exports.handler = function index(e, context, callback) {
    
    // const clientName = e.body.clientName;
    const clientID = 1;

    const createBaseSubQuestionTableParams = {
        AttributeDefinitions: [
            {
                AttributeName: 'id',
                AttributeType: 'S'
            }
        ],
        KeySchema: [
            {
            AttributeName: 'id',
            KeyType: 'HASH'
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        },
        TableName: 'BaseSubQuestion-'+clientID
    };

    ddb.createTable(createBaseSubQuestionTableParams, function(err, data) {
        if (err) {
            callback(err,{success:false});
        } else {
            ddb.waitFor('tableExists', {TableName:'BaseSubQuestion-'+clientID}, function(err, data) {
                copy({
                    config: globalAWSConfig,
                    source: {
                        tableName: 'BaseSubQuestion', // required 
                    },
                    destination: {
                        tableName: 'BaseSubQuestion-'+clientID, // required 
                    }
                },
                function (err, result) {
                    if (err) {
                        callback(err,{success:false});
                    } else {
                        callback(null,{success:true});
                    }
                });
            });
        }
    });
}








