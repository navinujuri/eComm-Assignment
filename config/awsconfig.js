const AWS = require('aws-sdk'); // Import AWS SDK


AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region, // Specify the AWS region
  });
  
  const s3 = new AWS.S3();


  module.exports=s3