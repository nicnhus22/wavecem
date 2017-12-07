// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-1'});

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2017-12-05'});

const copy = require('copy-dynamodb-table').copy

var globalAWSConfig = { // AWS Configuration object http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  accessKeyId: 'AKIAIZGGJEVQNB6FO77A',
  secretAccessKey: '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',
  region: 'eu-west-1'
}

exports.handler = function index(e, context, callback) {
    
    // const clientName = e.body.clientName;
    const clientID = 1;

    const createBaseQuestionTableParams = {
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
        TableName: 'BaseQuestion-'+clientID
    };
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

    // Call DynamoDB to create the table
    ddb.createTable(createBaseQuestionTableParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            ddb.waitFor('tableExists', {TableName:'BaseQuestion-'+clientID}, function(err, data) {
                copy({
                    config: globalAWSConfig,
                    source: {
                        tableName: 'BaseQuestion', // required 
                    },
                    destination: {
                        tableName: 'BaseQuestion-'+clientID, // required 
                    }
                },
                function (err, result) {
                    if (err) {
                        callback(err,null)
                    } else {
                        // create 
                        ddb.createTable(createBaseSubQuestionTableParams, function(err, data) {
                            if (err) {
                                console.log("Error", err);
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
                                            callback(err,null)
                                        } else {
                                             callback(null,{success:true});
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            });
        }
    });
}








