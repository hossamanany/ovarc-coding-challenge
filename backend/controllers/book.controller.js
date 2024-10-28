import mongoose from "mongoose";
import Book from "../models/book.model.js";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({}).populate('author').populate('stores');
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.log("error in fetching books:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createBook = async (req, res) => {
    const { name, pages, author, stores } = req.body; // Include author and stores in the body

    if (!name || !pages || !author) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newBook = new Book({ name, pages, author, stores });

    try {
        await newBook.save();
        res.status(201).json({ success: true, data: newBook });
    } catch (error) {
        console.error("Error in create book:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateBook = async (req, res) => {
    const { id } = req.params;

    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Book Id" });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
        res.status(200).json({ success: true, data: updatedBook });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Book Id" });
    }

    try {
        await Book.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Book deleted" });
    } catch (error) {
        console.log("error in deleting book:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
