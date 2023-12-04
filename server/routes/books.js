import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();


// route for creating a book
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book)

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

// route for getting all books from database
router.get("/", async(req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

// Alternate route (if you want to include other keys):
// app.get("/books", async(req, res) => {
//     try {
//         const books = await Book.find({});
//         res.status(200).send({
//             count: books.length,
//             data: books,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: error.message });
//     }
// });

// route for getting single book by id
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
        res.status(200).send(book)
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
});

// route for updating a book 
router.put(":id", async(req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).send({ message: "Book updated successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
});

// route for deleting a book
router.delete("/books/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        
        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).send({ message: "Book deleted successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
});

export default router;