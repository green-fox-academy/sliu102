var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {

    if (err) throw err;
    var myquery = { name: "John Doe" };
    db.collection("students").deleteOne(myquery, function(err, obj) {
     if (err) throw err;
     db.close();
    });  
                
});