'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var jsonParser = bodyParser.json();
app.listen(8080);
var url = 'mongodb://localhost:27017/reddit';

app.use('/', express.static('public'));

// var data = [
//   {
//       "id": 25,
//       "title": "message1",
//       "href": "http://9gag.com",
//       "timestamp": 1494339525,
//       "score": 791,
//       "owner": null,
//       "vote": 1
//     },
//     {
//       "id": 74,
//       "title": "message2",
//       "href": "http://9gag.com",
//       "timestamp": 1494138425,
//       "score": 567,
//       "owner": "kristof4",
//       "vote": -1
//     }
// ]

// var newData = {
// 	"id": 29,
//     "title": "message3",
//     "href": "http://9gag.com",
//     "timestamp": 1494339525,
//     "score": 791,
//     "owner": null,
//     "vote": 1
// }

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

app.get('/posts', function(req,res){
	MongoClient.connect(url, function (err, db) {

	var newObj = {posts:[]};
    db.collection("articles").find({}).toArray(function(err, obj) {
     newObj.posts = obj;
     if (err) throw err;
     res.send(newObj);
    });        
  });
})

app.get('/mainPage', function(req,res) {
  res.sendFile(__dirname + '/public/main_page.html');
})
//adding post
app.post('/posts',jsonParser,function(req,res) {
  
  var newData = {
    "id": 29,
    "title": req.body.title,
    "href": req.body.href,
    "timestamp": req.body.date,
    "score": 0,
    "owner": null

  };
  res.setHeader('Content-Type', 'application/json');

  MongoClient.connect(url, function (err, db) {
    db.collection('articles', function (err, collection) {  
      collection.insert(newData,function(){});
      console.log('inserted');
      db.close();
        
    });  
                
  });

  res.send(newData);

})

//upvote
app.put('/posts/:id/upvote',jsonParser,function(req,res) {
  
  res.setHeader('Content-Type', 'application/json');
  var id = parseInt(req.params.id);

  MongoClient.connect(url, function (err, db) {

  	db.collection("articles").findOne({id:id},function(err,obj) {
      if (err) throw err;
      var currentScore = obj.score+1;
      res.send(obj);
      db.collection("articles").updateOne({id:id},{ $set: { score: currentScore } },function(err, db) {  
        console.log(currentScore);
      });
  	});
      
                
  });
  

})

app.put('/posts/:id/downvote',jsonParser,function(req,res) {
  
  res.setHeader('Content-Type', 'application/json');
  var id = parseInt(req.params.id);
  console.log(id);

  MongoClient.connect(url, function (err, db) {

  	db.collection("articles").findOne({id:id},function(err,obj) {
  		console.log(id);
      if (err) throw err;
      var currentScore = obj.score-1;
      res.send(obj);
      db.collection("articles").updateOne({id:id},{ $set: { score: currentScore } },function(err, db) {  
        console.log(currentScore);
      });
  	});
      
                
  });

})

app.delete('/posts/:id',function(req,res){
  var id = parseInt(req.params.id);
  console.log(id);

  MongoClient.connect(url, function (err, db) {

  	db.collection("articles").findOne({id:id},function(err,obj) {
  		console.log(id);
      if (err) throw err;
      var currentScore = obj.score-1;
      res.send(obj);
      db.collection("articles").deleteOne({id:id}, function(err, obj) {  
        console.log(currentScore);
      });
  	});
      
                
  });


})

app.put('/posts/:id',jsonParser,function(req,res){
  var id = parseInt(req.params.id);
  var href = req.body.href;
  var title = req.body.title;

  MongoClient.connect(url, function (err, db) {

  	db.collection("articles").updateOne({id:id},{$set: {href:href,title:title}},function() {
  	});
      
                
  });

})









