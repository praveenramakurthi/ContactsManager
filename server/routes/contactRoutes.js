const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Contacts = require('../modules/contact');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.createConnection("mongodb://0.0.0.0/contacts");
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
};

// Route for adding a new contact
router.post("/add", async (req, res) => {
    try {
        const data=req.body;
        // const newContact = await Contacts.create({
        //     name:data.name,
        //     designation:data.designation,
        //     company:data.company,
        //     email:data.email,
        //     phoneNumber:data.phoneNumber,
        //     country:data.country
        // });
        const newContact = await Contacts.create(data);
        console.log(newContact);
        newContact.save();
        res.status(201).json({
            message: "Contact Created Successfully",
            contact: newContact
        });
    } catch (err) {
        console.error("Error creating contact:", err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});
// router.get("/all", async (req, res) => {
//     try {
//         const data = await Contacts.find(req.body);
//         res.send(data)
//         console.log(data);
//     }
//     catch (err) {
//         res.status(500).json({
//             message: "failed"
//         })
//     }
// })
router.use(errorHandler); // Mount error handling middleware
module.exports = router;
