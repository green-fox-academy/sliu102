"use strict";
const URL = "https://time-radish.glitch.me/posts";

var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var xhr3 = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.status === 200&&xhr.readyState === XMLHttpRequest.DONE) {
  	 var posts = JSON.parse(xhr.responseText).posts;
     createArtitle(posts,posts.length);
  	 for (var i = 0; i < posts.length; i++) {
  	   putTitle(posts[i].title,i);
  	   putOwner(posts[i].owner,i);
  	   putScore(posts[i].score,i);
  	   putTime(posts[i].timestamp,i);
  	 }
     var newPost = document.getElementsByTagName("h3")[0];

     newPost.addEventListener("click", function() {
       window.location = "file:///Users/liushuxiao/Documents/EPAM-JSA/sliu102/week03/day-04&day-05/add_page.html";
     })
  }
}

xhr.open("GET", URL, true);
xhr.send();

function createArtitle (object, num) {
  var content = document.querySelector(".content");
  for (let i = 0; i < num; i++) {
  	var article = document.createElement("article");
  	var btnModify = document.createElement("button");
  	var btnRemove = document.createElement("button");
  	var upArrow = document.createElement("img");
    var downArrow = document.createElement("img");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    p.classList.add("score");
    p.setAttribute("data-num",i);
    btnModify.innerText = "modify";
    btnModify.classList.add("modify");
    btnModify.addEventListener("click", function(){
      localStorage.setItem('title', object[i].title);
      localStorage.setItem("url", object[i].href);
      localStorage.setItem("id", object[i].id);
      window.location.href = 'modify_page.html';
    });
    btnRemove.innerText = "remove";
    btnRemove.classList.add("remove");
    btnRemove.addEventListener("click", function(){
      removeArticle(object[i].id);
      var article = document.getElementsByTagName("article")[i];
      article.parentNode.removeChild(article);
    });
    upArrow.src = "upvote.png";
    upArrow.classList.add("up");
    upArrow.addEventListener("click",function(event) {
       if(event.target.src !== "file:///Users/liushuxiao/Documents/EPAM-JSA/sliu102/week03/day-04&day-05/upvoted.png") {
        event.target.src = "upvoted.png";
        var article = document.getElementsByTagName("article")[i];
        var p = article.querySelector(".score");
        p.innerText=parseInt(p.innerText)+1;
        upVote(object[i].id);
      } 
    });
    downArrow.addEventListener("click",function(event) {
      if (event.target.src !== "file:///Users/liushuxiao/Documents/EPAM-JSA/sliu102/week03/day-04&day-05/downvoted.png") {
        event.target.src = "downvoted.png";
        var article = document.getElementsByTagName("article")[i];
        var p = article.querySelector(".score");
        p.innerText=parseInt(p.innerText)-1;
        downVote(object[i].id);
      };
      
    });
    downArrow.src = "downvote.png";
    downArrow.classList.add("down");
    h2.innerText = i+1;
    article.appendChild(h2);
    article.appendChild(upArrow);
    article.appendChild(downArrow);
    article.appendChild(btnModify);
    article.appendChild(btnRemove);
    article.appendChild(p);
    content.appendChild(article);
  }
}

function putTitle (title,i) {
  var a = document.createElement("a");
  var article = document.getElementsByTagName("article")[i];
  a.classList.add("title");
  article.appendChild(a);
  a.innerText = title;
}

function putOwner (owner,i) {
  if (owner===null) {
    owner = "anonymous";
  }
  var p = document.createElement("p");
  var article = document.getElementsByTagName("article")[i];
  p.classList.add("owner");
  article.appendChild(p);
  p.innerText = "by " + owner;
}

function putScore (score,i) {
  var article = document.getElementsByTagName("article")[i];
  var p = article.querySelector(".score");
  p.innerText = score;
}

function putTime (time,i) {
  var currentTime = Date.now();
  var elapsedTime = (currentTime - time)/60;
  var p = document.createElement("p");
  var article = document.getElementsByTagName("article")[i];
  p.classList.add("time");
  article.appendChild(p);
  p.innerText = "submitted "+ Math.floor(elapsedTime)+ " minutes ago";

}


function upVote(id) {
  var newURL ="https://time-radish.glitch.me/posts/" + id + "/upvote";
  if(xhr2.status === 200&&xhr2.readyState === XMLHttpRequest.DONE) {
    console.log('s');
  }
  xhr2.open("PUT", newURL, true);
  xhr2.setRequestHeader("Accept","application/json");
  xhr2.setRequestHeader("Content-Type","application/json");
  xhr2.send();
}

function downVote(id) {
  var newURL = "https://time-radish.glitch.me/posts/" + id + "/downvote";
  if(xhr2.status === 200&&xhr2.readyState === XMLHttpRequest.DONE) {
    console.log('s');
  }
  xhr2.open("PUT", newURL, true);
  xhr2.setRequestHeader("Accept","application/json");
  xhr2.setRequestHeader("Content-Type","application/json");
  xhr2.send();
}

function removeArticle(id) {
  var newURL = "https://time-radish.glitch.me/posts/" + id;
  if(xhr2.status === 200&&xhr2.readyState === XMLHttpRequest.DONE) {
    console.log('s');
  }
  xhr2.open("DELETE", newURL, true);
  xhr2.setRequestHeader("Accept","application/json");
  xhr2.setRequestHeader("Content-Type","application/json");
  xhr2.send();
}
















