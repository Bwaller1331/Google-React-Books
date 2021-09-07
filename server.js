const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const db = mongoose.connection;
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});
db.on("Error connecting to MongoDB", error => console.error(error));
db.once("connected", () => console.log("Connected to MongoDB!"));

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}` );
});