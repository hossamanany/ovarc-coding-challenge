import mongoose from "mongoose";
import Author from "../models/author.model.js";

export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find({});
        res.status(200).json({ success: true, data: authors });
    } catch (error) {
        console.log("error in fetching authors:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createAuthor = async (req, res) => {
    const author = req.body; // user will send this data

    if (!author.name) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newAuthor = new Author(author);

    try {
        await newAuthor.save();
        res.status(201).json({ success: true, data: newAuthor });
    } catch (error) {
        console.error("Error in create author:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateAuthor = async (req, res) => {
    const { id } = req.params;

    const author = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Author Id" });
    }

    try {
        const updatedAuthor = await Author.findByIdAndUpdate(id, book, { new: true });
        res.status(200).json({ success: true, data: updatedAuthor });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deletedAuthor = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Author Id" });
    }

    try {
        await Author.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Author deleted" });
    } catch (error) {
        console.log("error in deleting author:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};