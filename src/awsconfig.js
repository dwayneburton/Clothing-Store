// Export AWS configuration using environment variables for security
export default {
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESSKEYID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRETACCESSKEY
  };