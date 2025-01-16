const mongoose = require('mongoose');

require("dotenv").config();

exports.connect = async () =>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("DB Connection Successful")})
    .catch((error) =>{
        console.log(process.env.MONGODB_URL);
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    });
};