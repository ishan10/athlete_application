var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('raja:raja@ds141474.mlab.com:41474/athlete',['athletes']);
var bodyParser = require('body-parser');
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
//populate athlete from mongodb GET method
app.get('/athletes/:id',function(req,res){
  var id = req.params.id;
  console.log(id);
  db.athletes.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
    res.json(doc);
  });
});
//update athlete data in the mogodb using PUT Method
app.put('/athletes/:id',function(req,res){
  var id = req.params.id;
  console.log(req.body.basic.name);
  db.athletes.findAndModify({query:{_id:mongojs.ObjectId(id)},
  update: {$set:
              {
                  basic: {
                      name: req.body.basic.name,
                      gender: req.body.basic.gender,
                      dob:req.body.basic.dob,
                      nation:req.body.basic.nation,
                      sport:[req.body.basic.sport]
                  },
                  about: {
                      country:req.body.about.country,
                      desc:req.body.about.desc,
                      team:req.body.about.team
                  },
                  social: {
                    fb:req.body.social.fb,
                    linkedin:req.body.social.linkedin,
                    github:req.body.social.github,
                    twitter:req.body.social.twitter
                  }
              }
          },
          new : true},function (err,doc){
            res.json(doc);
          });
});
app.listen(3000);
console.log('server running on port 3000');
