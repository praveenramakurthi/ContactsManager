const mongoose = require('mongoose');

const connectDB = async () => {
    return mongoose.connect("mongodb+srv://praveenramakurthi:LtWIgIp5HuqyyFQi@cluster0.wthalue.mongodb.net/appusers?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("connection to database established")
        })
        .catch((err) => {
            console.log("error connecting database", err)
        });
}

module.exports = connectDB;