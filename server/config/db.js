const mongoose=require('mongoose');

const connectDB=async()=>{
    return mongoose.connect("mongodb://0.0.0.0/appusers")
    .then(()=>{
        console.log("connection to database established")
    })
    .catch((err)=>{
        console.log("error connecting database",err)
    });
}

module.exports=connectDB;