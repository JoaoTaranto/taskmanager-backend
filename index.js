// FRAMEWORKS IMPORT
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const TaskRouter = require("./src/routes/task.routes");
// ARCHIVES IMPORT
const connectDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express(); // Cria uma aplicação Express
app.use(cors());
app.use(express.json()); // Informa ao app Express que receberá JSON nas requests (req_body)

connectDatabase();

app.use("/tasks", TaskRouter);

app.listen(8000, () => console.log("Listening on port 8000")); // Iniciar aplicação Express na porta 8000
