import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import authorRoutes from "./routes/author.route.js";
import bookRoutes from "./routes/book.route.js";
import storeRoutes from "./routes/store.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // Middleware to accept JSON data

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// API routes
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/stores", storeRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

// Start the server with DB connection
const startServer = async () => {
    try {
        await connectDB(); // Wait for the database connection
        app.listen(PORT, () => {
            console.log("Server started at http://localhost:" + PORT);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1);
    }
};

startServer();
