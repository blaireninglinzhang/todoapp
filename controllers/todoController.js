// control behavior of my todo app 
// take care of routing, rendering views
var bodyParser = require('body-parser');

var data = [{item: 'make smoothie'}, {item: 'walk dog'}, {item: 'read'}]; // array of data
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(index){

	index.get('/todo', function(req, res){
		res.render('todo', {todos: data});

	});

	index.post('/todo', urlencodedParser, function(req, res){
		console.log('hi');
		data.push(req.body);
		res.json(data);
	});

	index.delete('/todo/:item', function(req, res){

	});


};