import mongoose from 'mongoose';
import fs from 'fs';
import csv from 'csv-parser';
import dotenv from 'dotenv';
import Book from './backend/models/book.model.js';
import Author from './backend/models/author.model.js';
import Store from './backend/models/store.model.js';
import StoreBook from './backend/models/storeBook.model.js';

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/shop';
console.log('Using MongoDB URI:', mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Read the CSV file
const results = [];

fs.createReadStream('BookStoreSampleData.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
        try {
            for (const item of results) {
                // Create or find author
                let author = await Author.findOne({ name: item.author });
                if (!author) {
                    author = await Author.create({ name: item.author });
                }

                // Create or find store
                let store = await Store.findOne({ name: item.store_name });
                if (!store) {
                    store = await Store.create({ name: item.store_name, address: item.store_address });
                }

                // Find or update book
                const book = await Book.findOneAndUpdate(
                    { name: item.book_name, author: author._id }, // Find by book name and author ID
                    {
                        name: item.book_name,
                        pages: Number(item.book_pages),
                        author: author._id,
                        $addToSet: { stores: store._id } // Add store ID only if it's not already present
                    },
                    { new: true, upsert: true } // 'upsert' creates a new document if none found
                );

                // Create or update StoreBook entry
                await StoreBook.findOneAndUpdate(
                    { store: store._id, book: book._id },
                    {
                        store: store._id,
                        book: book._id,
                        price: Number(item.store_price_for_book),
                    },
                    { new: true, upsert: true } // Update if exists, create if not
                );
            }
            console.log('Data uploaded successfully.');
        } catch (error) {
            console.error('Error uploading data:', error);
        } finally {
            mongoose.connection.close();
        }
    });
