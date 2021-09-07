const mongoose = require("mongoose");
const db = require("../models");
// const db = mongoose.connection;
// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);
// db.on("Error on Mongo connection", error => console.error(error))
// db.once("connected", () => console.log("Success! You are connected to Mongoose"))

const bookSeed =




db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });