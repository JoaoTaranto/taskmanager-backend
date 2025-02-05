const express = require("express")
const router = express.Router();

const TaskModel = require("../models/task.model");
const TaskController = require("../controllers/task.controller")


// GET ALL TASKS
router.get("/", async (req, res) => {
    return new TaskController(req, res).getAll();
});

// GET TASKS BY ID

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getById()
});

// CREATE TASK
router.post("/", async (req, res) => {
    return new TaskController(req, res).create()
});


// UPDATE TASK
router.patch("/:id", async (req, res) => {
   return new TaskController(req, res).update();
})

// DELETE TASK
router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).delete();
});

module.exports = router;