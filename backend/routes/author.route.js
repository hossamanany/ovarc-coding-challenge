import express from "express";

import { createAuthor, deletedAuthor, getAuthors, updateAuthor } from "../controllers/author.controller.js";

const router = express.Router();

router.get("/", getAuthors);
router.post("/", createAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deletedAuthor);

export default router;