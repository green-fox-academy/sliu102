var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {

    if (err) throw err;
    var myquery = { name: "John Doe" };
    var newvalues = { github: "johndoe" };
    db.collection("students").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      db.close();
    });

    var myquery2 = {};
    var newvalues2 = {$set: {age: 18} };
    db.collection("students").updateMany(myquery2, newvalues2, function(err, res) {
      if (err) throw err;
      db.close();
    });
                
});