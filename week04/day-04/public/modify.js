var newUrl = "http://localhost:8080/posts/";
var xhr = new XMLHttpRequest();

function Article(href, title) {
  this.href = href;
  this.title = title;
} 

var titleContent = localStorage.getItem("title");
var urlContent = localStorage.getItem("url");
var id = localStorage.getItem("id");

var title = document.querySelector(".newTitle");
var url = document.querySelector(".url");
var button = document.querySelector("button");
title.value = titleContent;
url.value = urlContent;

button.addEventListener("click", modifyData);

function modifyData() {
  alert("submitted");
  var urlValue = url.value;
  var titleValue = title.value;
  var jsonData = new Article(urlValue,titleValue);
  jsonData = JSON.stringify(jsonData);
  if(xhr.status === 200&&xhr.readyState === XMLHttpRequest.DONE) {
    console.log('s');
  }
  newUrl += id; 
  xhr.open("PUT", newUrl, true);
  xhr.setRequestHeader("Accept","application/json");
  xhr.setRequestHeader("Content-Type","application/json");
  xhr.send(jsonData);

}

var newPost = document.getElementsByTagName("h1")[0];
  newPost.addEventListener("click", function() {
  window.location = "/main_page.html";
})