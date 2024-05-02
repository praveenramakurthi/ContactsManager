const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());

app.use("/api",require("./routes/authRoutes.js"));
const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
    await connectDB();
    console.log(`app is listening on port ${PORT}`);
})




