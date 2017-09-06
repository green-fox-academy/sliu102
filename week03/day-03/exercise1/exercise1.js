xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.status === 200&&xhr.readyState === 4) {
  	var response = JSON.parse(xhr.responseText);
  	var div = document.querySelector("div");
  	var main_img = document.querySelector(".main_img");
  	for (let i = 0; i < 16; i++) {
  	  var img = document.createElement("img");
  	  img.src = response.data[i].images.downsized_still.url;
      img.addEventListener("click", function() {
      	if (main_img.src===response.data[i].images.original.url){
      	  main_img.src = response.data[i].images.downsized_still.url;
      	} else {
      	  main_img.src = response.data[i].images.original.url;
      	};
      	
      });

      img.addEventListener("mouseover", function(event) {
      	event.target.src = response.data[i].images.original.url;      	
      });
      div.appendChild(img);

      img.addEventListener("mouseout", function(event) {
      	event.target.src = response.data[i].images.downsized_still.url;      	
      });



  	  
  	};


  }
}
xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=5f50193f7d284e0a804da5d31d1de1ac", true);
xhr.send();
