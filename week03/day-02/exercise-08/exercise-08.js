'use strict';

//Create a simple HTML document with one button. If the user clicks the button 
//it should wait 2 seconds and it should show a text under the button: 2 seconds elapsed


var buttonElement = document.querySelector("button");
var display = setTimeout(function () {
	var para = document.querySelector(".para");
	para.innerText="2 seconds elapsed";
},2000);
buttonElement.addEventListener("click",display);


