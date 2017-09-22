const URL = 'https://api.github.com/';

var urlAuthen = 'Basic ' + btoa('sliu102'+':'+'2ef2c37c44551b6e60d945d10d51688fea67c640');
var myHeaders = new Headers();         
myHeaders.append("Authorization", urlAuthen);        
var myInit = {            
	method:'GET',            
	headers:myHeaders        
};

function getCommitsInfo(reposName, callback) {
  var list = [];
  var result = fetch(URL+'repos/greenfox-academy/'+reposName+'/commits',myInit)
  	.then(function (response){
    	return response.json();
  	})
  	.then(function (data) {
  		console.log(data);
	    var message = data[0].commit.message;
	    var time = data[0].commit.author.date;
	    var name = data[0].commit.author.name;
	    console.log('then', message,time);
	    list.push(message);
	    list.push(time);
	    list.push(name);
	    callback(list);
	    return list;
	  })
  return result;
}
module.exports = getCommitsInfo;


