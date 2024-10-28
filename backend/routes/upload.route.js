import express from 'express';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';
import Book from '../models/book.model.js';
import Author from '../models/author.model.js';
import Store from '../models/store.model.js';
import StoreBook from '../models/storeBook.model.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Temp storage for uploaded files

router.post('/upload-csv', upload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');

    const results = [];
    const filePath = req.file.path;

    // Read and parse CSV
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                for (const item of results) {
                    let author = await Author.findOne({ name: item.author });
                    if (!author) author = await Author.create({ name: item.author });

                    let store = await Store.findOne({ name: item.store_name });
                    if (!store) store = await Store.create({ name: item.store_name, address: item.store_address });

                    const book = await Book.create({
                        name: item.book_name,
                        pages: Number(item.book_pages),
                        author: author._id,
                        stores: [store._id]
                    });

                    await StoreBook.create({
                        store: store._id,
                        book: book._id,
                        price: Number(item.store_price_for_book),
                    });
                }
                fs.unlinkSync(filePath); // Clean up the uploaded file
                res.status(200).send('Data uploaded successfully.');
            } catch (error) {
                fs.unlinkSync(filePath); // Ensure file is removed on error
                res.status(500).json({ error: 'Error uploading data: ' + error.message });
            }
        });
});

export default router;
