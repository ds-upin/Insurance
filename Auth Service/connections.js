const mongoose = require('mongoose');

const connectToMongoDB = async (url) => {
    await mongoose.connect(url)
    .then(()=> console.log("Connected to Database"))
    .catch(err=>{
        console.log("Error in connecting to database. Exiting the server...");
        exit(1);
    })
};
module.exports = {connectToMongoDB};