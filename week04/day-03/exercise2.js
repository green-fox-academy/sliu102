var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {    
    db.collection('students', function (err, collection) {
        
        if (err) throw err;
        var query1 = { name: "Vinson Liu" };
        var query2 = {};
        var query3 = {name : {$ne : "Vinson Liu"}};
        var query4 = {};

        db.collection("students").find(query1).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });

        db.collection("students").find(query2,{github:1}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });

        db.collection("students").find(query3,{name:1}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });

        db.collection("students").find(query4,{gender:1}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    });
                
});