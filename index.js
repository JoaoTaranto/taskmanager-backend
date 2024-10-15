// FRAMEWORKS IMPORT
const express = require("express");
const dotenv = require("dotenv");

// ARCHIVES IMPORT
const connectDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

dotenv.config();

const app = express(); // Cria uma aplicação Express
app.use(express.json()); // Informa ao app Express que receberá JSON nas requests (req_body)
connectDatabase();

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await TaskModel.find({});
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);
        await newTask.save();
        res.status(201).send(newTask);
    } catch (error) {
        console.log(error.message);
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskToDelete = await TaskModel.findById(taskId);

        if (!taskToDelete) {
            return res.status(500).send("Esta tarefa não foi encontrada");
        }
        const deletedTask = await TaskModel.findByIdAndDelete(taskId);
        res.status(200).send(deletedTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8000, () => console.log("Listening on port 8000")); // Iniciar aplicação Express na porta 8000
