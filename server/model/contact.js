const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = new mongoose.Schema({
    contact: [{
        name: { type: String, required: true },
        designation: { type: String, required: true },
        company: { type: String, required: true },
        industry: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
        country: { type: String, required: true },
    }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

module.exports = mongoose.model("contacts", contactSchema);
