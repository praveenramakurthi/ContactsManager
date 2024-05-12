const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Contacts = require('../modules/contact');
const bodyParser = require("body-parser");
const cors = require('cors');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const User = require("../modules/user");
const verifyToken = require('../middleware/Auth.js');
const { verify } = require('jsonwebtoken');
app.use(cors());
app.use(bodyParser.json());
// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
};

// Endpoint to add contacts for a particular user
router.post('/contacts/:email', verifyToken, async (req, res) => {
    try {
        // Extract email from request parameters
        const userEmail = req.params.email;

        // Find the user by email
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if req.body.Contacts exists and is an array
        if (!Array.isArray(req.body.Contacts)) {
            return res.status(400).json({ error: 'Invalid contacts data' });
        }

        // Extract contacts from request body
        const contacts = req.body.Contacts;

        // Associate each contact with the user
        const contactsWithUser = contacts.map(contact => ({ ...contact, user: user._id }));

        // Insert contacts into database
        await Contacts.insertMany(contactsWithUser);

        // Respond with success message
        return res.status(201).json({ message: 'Contacts added successfully' });
    } catch (error) {
        console.error('Error adding contacts:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

//contacts associated with the user
router.get("/user_contacts/:id", verifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        console.log(userId);
        const contacts = await Contacts.find({ id: userId });
        res.status(200).json(contacts);
    }
    catch (err) {
        console.log("Error fetching contacts", err);
        res.status(500).json({
            error: "Internal service error"
        })
    }
})

router.post('/import', upload.single('file'), verifyToken, async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Parse the uploaded CSV file
        const contacts = [];
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (row) => {
                // Assuming row structure matches the Contact model
                // Add userId to each contact
                row.userId = req.userId;
                contacts.push(row);
            })
            .on('end', async () => {
                // Save the contacts to the database
                await Contact.insertMany(contacts);
                // Delete the temporary file
                fs.unlinkSync(req.file.path);
                res.status(200).json({ message: 'Contacts imported successfully' });
            });
    } catch (error) {
        console.error('Error importing contacts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.delete("/contacts/:id", async (req, res)=> {
    try {
        const user = await Contacts.findByIdAndDelete(req.params.id);
        res.status(200).json({})
        message: "Deleted Contacts", user
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
})



router.get(`/contacts/${User.id}`,verifyToken,async(req, res)=>{
    try{
        const userId=req.userId;
        const contacts=await Contacts.find({user:userId});
        res.status(200).json(contacts);
    }
    catch(err){
        console.log("Error fetching contacts",err);
        res.status(500).json({
            message: err.message
        })
    }
})











// Route for adding a new contact
router.post('/', async (req, res) => {
    const { name, designation, company, industry, email, phoneNumber, country } = req.body;
    const userId = req.User.userId; // Extracted from JWT token

    try {
        const newContact = new Contacts({ userId, name, designation, company, industry, email, phone, country });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to create contact' });
    }
});

router.use(errorHandler); // Mount error handling middleware
module.exports = router;