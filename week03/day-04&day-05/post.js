const URL = "https://time-radish.glitch.me/posts";
var xhr = new XMLHttpRequest();

function Article(href, title) {
  this.href = href;
  this.title = title;
  this.date = Date.now();
} 


var button = document.querySelector('button');
button.addEventListener("click", postData);

function postData() {
  alert("submitted");
  var url = document.querySelector(".url").value;
  var title = document.querySelector(".newTitle").value;
  var jsonData = new Article(url,title);
  jsonData = JSON.stringify(jsonData);
  if(xhr.status === 200&&xhr.readyState === XMLHttpRequest.DONE) {
    console.log('s');
  }
  xhr.open("POST", URL, true);
  xhr.setRequestHeader("Accept","application/json");
  xhr.setRequestHeader("Content-Type","application/json");
  xhr.send(jsonData);

}

var newPost = document.getElementsByTagName("h1")[0];
  newPost.addEventListener("click", function() {
  window.location = "file:///Users/liushuxiao/Documents/EPAM-JSA/sliu102/week03/day-04&day-05/main_page.html";
})