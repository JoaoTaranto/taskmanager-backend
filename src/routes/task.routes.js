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
    const taskId = req.params.id;

    const task = await TaskModel.findById(taskId);
    if (!task) {
        res.status(404).send("Esta tarefa não foi encontrada!");
    }
    res.status(200).send(task);
});

// CREATE TASK
router.post("/", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);
        await newTask.save();
        res.status(201).send(newTask);
    } catch (error) {
        console.log(error.message);
    }
});


// UPDATE TASK
router.patch("/:id", async (req, res) => {
    try {
        
        const taskId = req.params.id;
        const taskData = req.body 
        
        const taskToUpdate = await TaskModel.findById(taskId);
        const allowedUpdates = ["isCompleted"];
        const requestedUpdates = Object.keys(taskData)
        
        for (update of requestedUpdates) {
            if (allowedUpdates.includes(update)) {
                taskToUpdate[update] = taskData[update]
            } else {
                res.status(500).send("Um ou mais campos inseridos não são editáveis!")
            }
        }
        await taskToUpdate.save()
        return res.status(200).send(taskToUpdate)
        
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})

// DELETE TASK
router.delete("/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskToDelete = await TaskModel.findById(taskId);

        if (!taskToDelete) {
            return res.status(404).send("Esta tarefa não foi encontrada!");
        }
        const deletedTask = await TaskModel.findByIdAndDelete(taskId);
        res.status(200).send(deletedTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;