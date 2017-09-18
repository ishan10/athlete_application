var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('raja:raja@ds141474.mlab.com:41474/athlete',['athletes']);
var bodyParser = require('body-parser');

// //check route to index page
// app.get('/', function(req, res){
//   res.send('Hello world from server js');
// });
//create public folder to have static pages
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//populate athlete data from mongodb using GET METHOD
app.get('/athletes',function(req,res){
  db.athletes.find(function(err,doc){
    res.json(doc);
  });
});

//save data into mongodb POST method
app.post('/athletes',function(req,res){
  console.log(req.body);
  db.athletes.insert(req.body,function(err,doc){
    res.json(doc);
  });
});

app.listen(3000);
console.log('server running on port 3000');
