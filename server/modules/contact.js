const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type:String ,required:true},
    designation: { type: String ,required:true },
    company: { type: String ,required:true},
    industry: { type: String ,required:true},
    email: { type: String ,required:true},
    phoneNumber: { type: Number ,required:true},
    country: { type: String ,required:true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model("Contacts",contactSchema);
