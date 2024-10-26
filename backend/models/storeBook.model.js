import mongoose from "mongoose";

const storeBookSchema = new mongoose.Schema({
    store_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    price: {
        type: Number,
        required: true
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
