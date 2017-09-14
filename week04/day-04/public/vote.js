const URL = "https://time-radish.glitch.me/posts";
var xhr = new XMLHttpRequest();

function Article(url, title) {
  this.url = url;
  this.title = title;
  this.date = Date.now();
} 


var button = document.querySelector('button');
button.addEventListener("click", postData);

function postData() {
  var url = document.querySelector(".url").value;
  var title = document.querySelector(".title").value;
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