'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req,res) {
  var input = req.query.input;
  if(req.query.input === undefined) {
  	var data = {
  	  "error": "Please provide an input!"
  	}
  }else {
    var data = {
    "received": parseInt(input,10),
    "result" : input*2
    }
  }
  res.send(data);
})

app.get('/greeter', function(req,res) {
  
  if(req.query.name === undefined){
  	var data = {
    "error": "Please provide a name!"
    }
    res.send(data);
  } else if(req.query.title === undefined) {
  	var data = {
    "error": "Please provide a title!"
    }
    res.send(data);
  }else {
  	var data = {
    "welcome_message": "Oh, hi there "+req.query.name+", my dear "+req.query.title+"!"
    }
  	res.send(data);
  }
})

app.get('/appenda/:append', function(req,res) {
	if (req.params.append!==undefined){
	  var data = {
  	    "appended": req.params.append+"a"
      }
      res.send(data);
	}
})

app.post('/dountil/:what',jsonParser,function(req,res) {
  var number = req.body.until;
  if (number===undefined) {
    res.send({
      "error":"Please provide a number!"
    })
  }

  if(req.params.what === "sum") {
  	var sum = 0;
    for(var i = 1; i <= number; i++){
      sum += i;
    }
    var data = {
    	"result":sum
    };
    res.send(data);
  } else if(req.params.what === "factor") {
    var sum = 1;
    for(var i = 1; i <= number; i++){
      sum *= i;
    }
    var data = {
    	"result":sum
    };
    res.send(data);
  }


})

app.post('/arrays',jsonParser,function(req,res) {
  var method = req.body.what;
  var array = req.body.numbers;

  if( method === undefined || array ===undefined) {
  	var data = {
      "error": "Please provide what to do with the numbers!"
    }
  	res.send(data);
  }else {
    if(method === "sum") {
      var result = 0;
      for(var i = 0; i < array.length; i++) {
      	result += array[i];
      }
    }else if(method === "multiply") {
      var result = 1;
      for(var i = 0; i < array.length; i++) {
      	result *= array[i];
      }
    }else {
      var result = array;
      for(var i = 0; i < array.length; i++) {
      	result[i] = 2*array[i];
      }
    }
  	var data = {
  	  "result" : result
  	};
  	res.send(data);
  }


})


app.post('/sith',jsonParser,function(req,res) {
  var original = req.body.text;
  var arr = original.split(" ");
  var result = [];
  var output = "";
  for(var i = 0; i < arr.length-1; i+=2) {
    result[i] = arr[i+1];
    result[i+1] = arr[i];
  }

  result.forEach(function(val) {
  	output += val+" ";
  });

  var data = {
  	"sith_text":output
  }

  res.send(data);

})







app.listen(8080);

