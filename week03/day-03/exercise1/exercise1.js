"use strict";
window.addEventListener("load", initializePage)
var main_img;
function initializePage() {
  main_img = document.querySelector(".main_img");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
  if(xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
    var response = JSON.parse(xhr.responseText);
    var div = document.querySelector("div");
    for (let i = 0; i < 16; i++) {
      var img = document.createElement("img");
      img.src = response.data[i].images.downsized_still.url;
      img.setAttribute("data-original-url",response.data[i].images.original.url);
      img.setAttribute("data-downsized_still-url",response.data[i].images.downsized_still.url);
      img.addEventListener("click", onImageClick);
      
      img.addEventListener("mouseover", onMouseOver);
      div.appendChild(img);

      img.addEventListener("mouseout", onMouseOut);     
    };
  };
};
xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=5f50193f7d284e0a804da5d31d1de1ac", true);
xhr.send();

}



function onImageClick(clickEvent) {
  if (main_img.src===clickEvent.target.getAttribute("data-original-url")){
    main_img.src = clickEvent.target.getAttribute("data-downsized_still-url");
  } else {
    main_img.src = clickEvent.target.getAttribute("data-original-url");
  }
      
}

function onMouseOver(event) {
  event.target.src = event.target.getAttribute("data-original-url");        
}

function onMouseOut(event) {
  event.target.src = event.target.getAttribute("data-downsized_still-url");       
}

