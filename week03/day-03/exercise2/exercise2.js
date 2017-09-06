xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if(xhr.status === 200&&xhr.readyState === 4) {
    var response = JSON.parse(xhr.responseText);

    var ul = document.querySelector('ul');
    for (var i = 0; i < 10; i++) {
      var li = document.createElement('li');
      li.innerText = response[i].name;
      ul.appendChild(li);   
    };

    click();

  };
}

var page = 1;
var url = "https://www.anapioficeandfire.com/api/characters?page="+page+"&pageSize=10";


function click() {
  var previous = document.querySelector(".previous");
  var next = document.querySelector(".next");
  var first = document.querySelector(".first");
  var last = document.querySelector(".last");
  previous.addEventListener("click", function(){
    var ul = document.querySelector('ul');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    page -=1
    var url = "https://www.anapioficeandfire.com/api/characters?page="+page+"&pageSize=10";
    xhr.open("GET", url, true);
    xhr.send();

  });
  next.addEventListener("click", function(){
    var ul = document.querySelector('ul');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    page +=1
    var url = "https://www.anapioficeandfire.com/api/characters?page="+page+"&pageSize=10";
    xhr.open("GET", url, true);
    xhr.send();

  })
  first.addEventListener("click", function() {
    var ul = document.querySelector('ul');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    page =1
    var url = "https://www.anapioficeandfire.com/api/characters?page="+page+"&pageSize=10";
    xhr.open("GET", url, true);
    xhr.send();
  })
  last.addEventListener("click", function() {
    var ul = document.querySelector('ul');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    page =214
    var url = "https://www.anapioficeandfire.com/api/characters?page="+page+"&pageSize=10";
    xhr.open("GET", url, true);
    xhr.send();
  })

}

xhr.open("GET", url, true);
xhr.send();
