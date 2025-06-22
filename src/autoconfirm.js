// AWS Lambda trigger to auto-confirm and auto-verify users during sign-up
exports.handler = (event, context, callback) => {
    // Automatically confirm the user
    event.response.autoConfirmUser = true;

    // Automatically verify the user's email if it exists
    if (event.request.userAttributes.hasOwnProperty("email")) {
        event.response.autoVerifyEmail = true;
    }

    // Return the updated event back to Amazon Cognito
    callback(null, event);
};