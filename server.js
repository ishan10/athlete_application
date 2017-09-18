var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('raja:raja@ds141474.mlab.com:41474/athlete',['athletes']);


// //check route to index page
// app.get('/', function(req, res){
//   res.send('Hello world from server js');
// });
app.use(express.static(__dirname + '/public'));


app.get('/athletes',function(req,res){
  db.athletes.find(function(err,doc){
    res.json(doc);
  });
});
//create public folder to have static pages

app.listen(3000);
console.log('server running on port 3000');
