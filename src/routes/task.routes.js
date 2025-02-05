const express = require("express")
const router = express.Router();

const TaskModel = require("../models/task.model");
const TaskController = require("../controllers/task.controller")


// GET ALL TASKS
router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

// GET TASKS BY ID

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getTasksById()
});

// CREATE TASK
router.post("/", async (req, res) => {
    return new TaskController(req, res).createTask()
});


// UPDATE TASK
router.patch("/:id", async (req, res) => {
   return new TaskController(req, res).updateTask();
})

// DELETE TASK
router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTask();
});

module.exports = router;