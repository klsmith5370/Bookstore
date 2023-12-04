// const express = require("express");
// const router = express.Router()

// // Route for saving/creating a new book
// app.post('/books', async (req, res) => {
//     try {
//         if (
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.publishYear
//         ) {
//             return res.status(400).send({
//                 message: "Send all required fields: title, author, publishYear",
//             });
//         }

//         const newBook = {
//             title: req.body.title,
//             author: req.body.author,
//             publishYear: req.body.publishYear,
//         };

//         const book = await Book.create(newBook);
//         return res.status(201).send(book)

//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: error.message });
//     }
// });

// // route for getting all books from database
// app.get("/books", async(req, res) => {
//     try {
//         const books = await Book.find({});
//         res.status(200).send(books);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: error.message });
//     }
// });

// // Alternate route (if you want to include other keys):
// // app.get("/books", async(req, res) => {
// //     try {
// //         const books = await Book.find({});
// //         res.status(200).send({
// //             count: books.length,
// //             data: books,
// //         });
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).send({ message: error.message });
// //     }
// // });

// // route for getting single book
// app.get("/books/:id", async(req, res) => {
//     try {
//         const book = await Book.findById({})
//         res.status(200).send(book)
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ error: error.message });
//     }
// });

// module.exports = router;