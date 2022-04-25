const AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognitokpool,
            Limit: 10
        }).promise();
        console.log(daa);

    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};