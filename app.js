import express from "express";
import { PORT, mongoDBURL} from "./server/config.js";
import mongoose from "mongoose";
import books from "./server/routes/books.js";

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

app.get("/", (req, res) => {
    console.log(req);
    return(res.status(234).send("Welcome to MERN Stack Bookstore!!"));
});

app.use("/books", books);


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