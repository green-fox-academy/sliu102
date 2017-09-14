'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var jsonParser = bodyParser.json();
app.listen(8080);
var url = 'mongodb://localhost:27017/reddit';

var data = [
  {
      "id": 25,
      "title": "Dear JavaScript",
      "href": "http://9gag.com",
      "timestamp": 1494339525,
      "score": 791,
      "owner": null,
      "vote": 1
    },
    {
      "id": 74,
      "title": "Crockford",
      "href": "http://9gag.com",
      "timestamp": 1494138425,
      "score": 567,
      "owner": "kristof4",
      "vote": -1
    }
]

MongoClient.connect(url, function (err, db) {

    db.createCollection("articles", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    });

    
    db.collection('articles', function (err, collection) {
        
        collection.insert(data);
        console.log('inserted');
        db.close();
        
    });
                
});

app.get('/mainPage', function(req,res) {
  MongoClient.connect(url, function (err, db) {

    db.collection("articles").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      res.send(result);	
    });
  })
})


