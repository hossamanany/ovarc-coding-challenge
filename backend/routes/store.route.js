import express from "express";

import { createStore, deleteStore, getStores, updateStore } from "../controllers/store.controller.js";

const router = express.Router();

router.get("/", getStores);
router.post("/", createStore);
router.put("/:id", updateStore);
router.delete("/:id", deleteStore);

export default router;