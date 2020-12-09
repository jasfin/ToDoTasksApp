const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toDo_list', {useNewUrlParser: true});

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function() {
  console.log("successfully connected to mongodb database");
});