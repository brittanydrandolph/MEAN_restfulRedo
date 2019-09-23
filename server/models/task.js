const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/restful_task", {useNewUrlParser: true});

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Your task must have a title"], minlength: 3},
    description: {type: String, required: [true, "Your task must have a description"], minlength: 3},
    completed: {type: Boolean}}, {timestamps: true});

    const Task = mongoose.model("Task", TaskSchema);
    module.exports = Task;