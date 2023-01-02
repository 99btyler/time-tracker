const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.get("/", (request, response) => {
    response.json({message: "..."});
});

app.use("/entries", require("./routes/entriesRoutes"));

// Server
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

// Database
mongoose.connect(process.env.CONNECTION_STRING, () => console.log("Database connection established!"));