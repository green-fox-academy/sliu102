const URL = 'https://api.github.com/';

var urlAuthen = 'Basic ' + btoa('sliu102'+':'+'2ef2c37c44551b6e60d945d10d51688fea67c640');
var myHeaders = new Headers();         
myHeaders.append("Authorization", urlAuthen);        
var myInit = {            
	method:'GET',            
	headers:myHeaders        
};

function getNames(callback) {
  var list = [];
  var result = fetch(URL+'search/repositories?q=topic:epam-jsa',myInit)
  	.then(function (response){
    	return response.json();
  	})
  	.then(function (data) {
  		console.log(data);
	    for(var i=0;i<12;i++){
	      list.push(data.items[i].name)
	    }
	    callback(list);
	    return list;
	  })
  return result;
}
module.exports = getNames;


