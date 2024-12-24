import express from "express";

const router = express.Router();
const adminController = require("./../controller/admin");

// POST route
router.post("/add", adminController.create);

// GET route
router.get("/get", adminController.getAll);

// GET route
router.get("/get/:id", adminController.getById);

// PUT route
router.put("/update/:id", adminController.update);

// DELETE route
router.delete("/delete/:id", adminController.delete);

module.exports = router;
