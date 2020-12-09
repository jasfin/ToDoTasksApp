var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/home_controller');

console.log('root Router loaded');
//router to home
router.get('/', HomeController.home);
//roter to create a new task
router.post('/create', HomeController.createTask);
//router to delete a task
router.get('/delete-task', HomeController.deleteTask);

module.exports = router;