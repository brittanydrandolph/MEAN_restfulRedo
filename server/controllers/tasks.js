//CONTROLLER
const mongoose = require("mongoose")
const Task = mongoose.model("Task")


module.exports = {
    index: function(req, res){
        Task.find()
            .then(task => res.json({info: task, message:"success"}))
            .catch(err => res.json({info: err, message:"failure"}))
    },

    retrieveTask: function(req, res){
        let id = req.params.id;
        Task.find({_id: id})
            .then(task => res.json({info: task, message: "Success!"}))
            .catch(err => res.json({info: err, message: "Errors!", }))
    },

    createTask: function(req, res){
        Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed})
            .then(created => res.json({info: created, message: "success!"}))
            .catch(err => res.json({info: err, message: "Failure"}))
    },

    updatedTask: function(req, res){
        let id = req.params.id;
        Task.findById(id, function (err, task){
            if(err){
                res.json({message: "Error!", info: err});
            }
            else{
                if(req.body.title){
                    task.title = req.body.title;
                }
                if(req.body.description){
                    task.description = req.body.description;
                }
                if(req.body.completed){
                    task.completed = req.body.completed;
                }
                task.save(function(err){
                    if(err){
                        res.json({message: "Error!", info: err});
                    }
                    else{
                        res.json({message: "Success!", info: task})
                    }
                })
            }
        })
    },
    delete: function(req, res){    
        let id = req.params.id;  
        Task.remove({_id: id})
            .then(deletedTask => res.json({message: "delete successful", info: true}))
            .catch(err => res.json({message: "Errors!", info: err}))
        
    }

}