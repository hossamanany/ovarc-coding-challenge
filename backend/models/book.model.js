import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    stores: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true
}
);

const Book = mongoose.model('Book', bookSchema);

export default Book;