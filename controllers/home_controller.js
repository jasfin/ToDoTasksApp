const TaskModel = require('../models/task');

//the below controller function will fetch all the tasks from db and pass the list to our view 
module.exports.home = function(req,res){
    TaskModel.find({},function(err,taskList){
        if(err){
            return console.log('error fetching tasks from db:',err);
        }
        console.log('taskList is:',taskList);
        return res.render('home',{
            taskList: taskList
        });
    });
}

//create a new task in db with the submitted form data
module.exports.createTask = function(req,res){
    console.log('body is:',req.body);
    //just using req.body is also enough as same name as the field is used in form 
    let newTask = new TaskModel({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    });

    newTask.save( function(err,taskCreated){
        if(err){
            console.log('error in creating new task');
            return;
        }
        console.log('new task created is:',taskCreated);
        return res.redirect('back');

    });

}

//delete a task in db using its id received in query parameter of the get request
module.exports.deleteTask = function(req,res){
    console.log(req.query);
    TaskModel.findByIdAndDelete(req.query.id, function(err){
        if(err){
            return console.log('failed to delete from db: ',err);
        }
        console.log('successfully deleted from db');
        return res.redirect('/');
    });
}