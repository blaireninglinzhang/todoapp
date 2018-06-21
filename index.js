var express = require('express');

var todoController = require('./controllers/todoController');

var index = express(); 

// set up template engine
index.set('view engine', 'ejs');

// static files 
index.use(express.static('./public'));

// fire controllers
todoController(index);

// listen to port 
index.listen(3000);
console.log('You are listening to port 3000');