const URL = 'https://api.github.com/';



function getNames(callback) {
  var list = [];
  var result = fetch(URL+'search/repositories?q=topic:epam-jsa')
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


