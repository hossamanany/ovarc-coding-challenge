import mongoose from "mongoose";
import Store from "../models/store.model.js";

export const getStores = async (req, res) => {
    try {
        const stores = await Store.find({});
        res.status(200).json({ success: true, data: stores });
    } catch (error) {
        console.log("error in fetching stores:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createStore = async (req, res) => {
    const store = req.body; // user will send this data

    if (!store.name || !store.address) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newStore = new Store(store);

    try {
        await newStore.save();
        res.status(201).json({ success: true, data: newStore });
    } catch (error) {
        console.error("Error in create store:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateStore = async (req, res) => {
    const { id } = req.params;

    const store = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Store Id" });
    }

    try {
        const updatedStore = await Store.findByIdAndUpdate(id, store, { new: true });
        res.status(200).json({ success: true, data: updatedStore });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteStore = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Store Id" });
    }

    try {
        await Store.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Store deleted" });
    } catch (error) {
        console.log("error in deleting store:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
