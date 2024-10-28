import mongoose from "mongoose";

const storeBookSchema = new mongoose.Schema({
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    sold_out: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const StoreBook = mongoose.model('StoreBook', storeBookSchema);

export default StoreBook;
