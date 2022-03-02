const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(err => console.log(err));

console.log("Hello....");

app.use("/lama", (req, res) => {
    console.log("This is Blog Website....");
})

app.listen("5008", () => {
    console.log("Backend is running.")
});