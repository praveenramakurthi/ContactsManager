const express = require('express');
const router = express.Router();
const cors = require("cors");
router.use(cors());
const User = require('../modules/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: "./config/config.env" });
router.post("/register", async (req, res) => {
    console.log(req.body);
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
        return res.status(400).json({ error: "Please provide all required fields." });
    }
    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailReg.test(email)) {
        return res.status(400).json({ error: "Enter a valid email address." });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters." });
    }
    try {
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            return res.status(400).json({ error: `User with email ${email} already exists. Try creating with a new email.` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashedPassword });
        return res.status(201).json({ message: "User created successfully." });

    } catch (err) {
        console.error("Error registering user:", err);
        return res.status(500).json({ error: "An error occurred while registering the user." });
    }
});


router.get('/:email', (req, res) => {
    const userEmail = req.params.email;
    // Placeholder logic to handle requests with userEmail
    res.send(`User contacts for email: ${userEmail}`);
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email or password not matched" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Email or password not matched" });
        }

        const payload = { _id: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        // Omit password from user object before sending it in the response
        const userResponse = { ...user.toJSON(), password: undefined };

        return res.status(200).json({ token, user: userResponse });
    } catch (err) {
        console.error("Error logging in:", err);
        return res.status(500).json({ error: "An error occurred while logging in." });
    }
});

module.exports = router;
