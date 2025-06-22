// Import required modules and libraries
import {CognitoUserPool} from "amazon-cognito-identity-js";

// Configuration for AWS Cognito User Pool using environment variables
const poolData = {
    UserPoolId: process.env.REACT_APP_AWS_USERPOOLID,
    ClientId: process.env.REACT_APP_AWS_CLIENTID
}

// Export a new instance of the configured Cognito User Pool
export default new CognitoUserPool(poolData);