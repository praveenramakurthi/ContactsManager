const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type:String },
    designation: { type: String },
    company: { type: String},
    industry: { type: String},
    email: { type: String},
    phoneNumber: { type: Number},
    country: { type: Number},
})

module.exports = mongoose.model("Contacts",contactSchema);
