var express = require('express');
var app = express();

// //check route to index page
// app.get('/', function(req, res){
//   res.send('Hello world from server js');
// });

//create public folder to have static pages
app.use(express.static(__dirname + '/public'));
app.listen(3000);
console.log('server running on port 3000');
