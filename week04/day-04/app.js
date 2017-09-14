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

var newData = {
	"id": 29,
    "title": "Dear xxxxxx",
    "href": "http://9gag.com",
    "timestamp": 1494339525,
    "score": 791,
    "owner": null,
    "vote": 1
}

// MongoClient.connect(url, function (err, db) {

//     db.createCollection("articles", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     });

    
//     db.collection('articles', function (err, collection) {
        
//         collection.insert(data);
//         console.log('inserted');
//         db.close();
        
//     });
                
// });
//main page
app.get('/mainPage', function(req,res) {
  MongoClient.connect(url, function (err, db) {
    db.collection("articles").find({}).toArray(function(err, obj) {
     if (err) throw err;
     res.send(obj);
     db.close();
    });  
                
  });
})
//adding post
app.post('/addPost',jsonParser,function(req,res) {
  
  res.setHeader('Content-Type', 'application/json');

  MongoClient.connect(url, function (err, db) {
    db.collection('articles', function (err, collection) {  
      collection.insert(newData);
      console.log('inserted');
      db.close();
        
    });  
                
  });

  res.send(newData);

})

//upvote
app.post('/upvote',jsonParser,function(req,res) {
  
  res.setHeader('Content-Type', 'application/json');

  MongoClient.connect(url, function (err, db) {

  	db.collection("articles").findOne({id:25},function(err,obj) {
      if (err) throw err;
      var currentScore = obj.score+1;
      res.send(obj);
      db.collection("articles").updateOne({id:25},{ $set: { score: currentScore } },function(err, db) {  
        console.log(currentScore);
      });
  	});
      
                
  });
  

})

app.post('/downvote',jsonParser,function(req,res) {
  
  res.setHeader('Content-Type', 'application/json');

  MongoClient.connect(url, function (err, db) {

  	db.collection("articles").findOne({id:25},function(err,obj) {
      if (err) throw err;
      var currentScore = obj.score-1;
      res.send(obj);
      db.collection("articles").updateOne({id:25},{ $set: { score: currentScore } },function(err, db) {  
        console.log(currentScore);
      });
  	});
      
                
  });
  

})









