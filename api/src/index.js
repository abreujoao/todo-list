const express = require("express");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 8080;

let todos = [
    { id: 1, description: "todo 01", completed: true },
    { id: 2, description: "todo 02", completed: true },
    { id: 3, description: "todo 03", completed: false },
    { id: 4, description: "todo 04", completed: true },
];
app.use(cors())
app.use(express.json())

app.get("/v1/todos", (req, res) => {
    res.json(todos);
});

app.post("/v1/todos", (req, res) => {
    const { description, completed } = req.body;

    const newId = (todos[todos.length - 1]?.id || 0) + 1;
    const newTodo = { id: newId, description, completed };
    todos.push(newTodo);

    res.status(201).json(newTodo);
});

app.put("/v1/todos/:id", (req, res) => {
    const { id } = req.params;
    const { description, completed } = req.body;

    const indexTodo = todos.findIndex(todo => todo.id === +id);

    if (indexTodo) {
        todos[indexTodo] = { description, completed };
    }

    res.status(204).end();
});

app.delete("/v1/todos/:id", (req, res) => {
    const { id } = req.params;

    const updatedTodos = todos.filter(todo => todo.id != id);
    todos = updatedTodos;

    res.status(204).end();
});

app.listen(PORT, () => console.log(`Todo API Listening at http://localhost:${PORT}`));