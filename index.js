import express from "express";
import { PORT, mongoDBURL} from "./server/config.js";
import mongoose from "mongoose";
import { Book } from "./server/models/bookModel.js";

const app = express();

app.get("/", (req, res) => {
    console.log(req);
    return(res.status(234).send("Welcome to MERN Stack Bookstore!!"));
});

// Route for saving/creating a new book
app.post('/books', (req, res) => {
    
})



mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
        console.log(`App listening to port: ${PORT}`);
    });
})
.catch((err) => {
    console.log(err)
});