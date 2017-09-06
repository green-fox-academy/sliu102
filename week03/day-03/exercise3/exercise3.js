xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if(xhr.status === 200&&xhr.readyState === 4) {
    var response = JSON.parse(xhr.responseText);

    console.log(response)

  };
}

xhr.open("GET", "/api/messages", true);
xhr.send();
