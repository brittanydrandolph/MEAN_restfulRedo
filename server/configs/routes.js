const task = require("../controllers/tasks");

module.exports = function(app){
    app.get("/tasks", task.index)
    app.get("/tasks/:id", task.retrieveTask)
    app.post("/tasks", task.createTask)
    app.put("/tasks/:id", task.updatedTask)
    app.delete("/tasks/:id", task.delete)
}