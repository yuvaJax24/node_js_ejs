import express from "express";

const router = express.Router();
const shopController = require("./../controller/shop");

// POST route
router.post("/add", shopController.create);

// GET route
router.get("/get", shopController.getAll);

// GET route
router.get("/get/:id", shopController.getById);

// PUT route
router.put("/update/:id", shopController.update);

// DELETE route
router.delete("/delete/:id", shopController.delete);

module.exports = router;
