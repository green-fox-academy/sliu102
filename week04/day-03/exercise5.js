'use strict';

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get('/students', function(req,res) {
  MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {

  	if(req.query.gender !== undefined){
  	  var query = {gender: req.query.gender};
  	}else {
      var query = {};
  	}

  	var array = req.query.fields[]; 

  	var fields = {fields[0]:1,fields[1]:1};

    if (err) throw err;
    db.collection("students").find(query,fields).toArray(function(err, obj) {
     if (err) throw err;
     res.send(obj);
     db.close();
    });  
                
});
})

app.listen(8080);