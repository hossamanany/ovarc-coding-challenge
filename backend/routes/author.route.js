import express from "express";

import { createAuthor, deleteAuthor, getAuthors, updateAuthor } from "../controllers/author.controller.js";

const router = express.Router();

router.get("/", getAuthors);
router.post("/", createAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

export default router;