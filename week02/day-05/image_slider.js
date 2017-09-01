var images = ["http://i.imgur.com/E8dlzj2.jpg","http://i.imgur.com/ItycbEa.jpg"
             ,"http://i.imgur.com/qHfUgJc.jpg","http://i.imgur.com/FQyL4Kp.jpg",
             "http://i.imgur.com/23tI2le.jpg"
             ,"http://i.imgur.com/xRm7ZFG.jpg","http://i.imgur.com/0QKnvhe.jpg",
             "http://i.imgur.com/NEGfIWb.jpg"];

var titles = ["Lion","Rabbit","Fox","Tiger","Turtle","Marten","Dog","Cat"];

var discreps = ["The lion (Panthera leo) is one of the big cats in the Felidae family and a   member of genus Panthera. It has been listed as Vulnerable on the IUCN Red List since 1996, as populations in African range countries declined by about 43% since the early 1990s."
               ,"Rabbits are small mammals in the family Leporidae of the order Lagomorpha, found in several parts of the world. There are eight different genera in the family classified as rabbits, including the European rabbit (Oryctolagus cuniculus), cottontail rabbits (genus Sylvilagus; 13 species)"
               ,"Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes are slightly smaller than a medium-size domestic dog, with a flattened skull, upright triangular ears, a pointed, slightly upturned snout"
               ,"The tiger (Panthera tigris) is the largest cat species, most recognizable for their pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, leopard, jaguar, and snow leopard. Tigers are apex predators"
               ,"Turtles are reptiles of the order Testudines (or Chelonii[3]) characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield."
               ,"The martens constitute the genus Martes within the subfamily Mustelinae, in the family Mustelidae. Martens are slender, agile animals, adapted to living in taigas, and are found in coniferous and northern deciduous forests across the Northern Hemisphere."
               ,"The domestic dog (Canis lupus familiaris or Canis familiaris)[4] is a member of genus Canis (canines) that forms part of the wolf-like canids,[5] and is the most widely abundant carnivore."
               ,"The domestic cat[1][5] (Felis silvestris catus or Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines."];
//main picture change
var main_pic = document.querySelector("img.main_pic");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");

var btn_1 = document.querySelector(".img1");
var btn_2 = document.querySelector(".img2");
var btn_3 = document.querySelector(".img3");
var btn_4 = document.querySelector(".img4");
var btn_5 = document.querySelector(".img5");
var btn_6 = document.querySelector(".img6");
var btn_7 = document.querySelector(".img7");
var btn_8 = document.querySelector(".img8");

var btns = [btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,btn_7,btn_8];

function set_focus(index) {
  btns[index].focus();
}



function to_left() {  
  var pic_url = main_pic.getAttribute("src");
  var cur_index = images.indexOf(pic_url);
  if(cur_index === 0){
  	cur_index = 8;
  }
  main_pic.setAttribute("src",images[cur_index-1]);
  h1.innerText = titles[cur_index-1];
  p.innerText = discreps[cur_index-1];
  set_focus(cur_index-1);
  
};

function to_right() {
  var pic_url = main_pic.getAttribute("src");
  var cur_index = images.indexOf(pic_url);
  if(cur_index === 7){
  	cur_index = -1;
  };
  main_pic.setAttribute("src",images[cur_index+1]);
  h1.innerText = titles[cur_index+1];
  p.innerText = discreps[cur_index+1];
  set_focus(cur_index+1);
};

var left_btn = document.querySelector("button.left_arrow");
var right_btn = document.querySelector("button.right_arrow");

left_btn.addEventListener("click", to_left);
right_btn.addEventListener("click", to_right);


btn_1.addEventListener("click", function() {
  main_pic.setAttribute("src",images[0]);
});

btn_2.addEventListener("click", function() {
  main_pic.setAttribute("src",images[1]);
});

btn_3.addEventListener("click", function() {
  main_pic.setAttribute("src",images[2]);
});

btn_4.addEventListener("click", function() {
  main_pic.setAttribute("src",images[3]);
});

btn_5.addEventListener("click", function() {
  main_pic.setAttribute("src",images[4]);
});

btn_6.addEventListener("click", function() {
  main_pic.setAttribute("src",images[5]);
});

btn_7.addEventListener("click", function() {
  main_pic.setAttribute("src",images[6]);
});

btn_8.addEventListener("click", function() {
  main_pic.setAttribute("src",images[7]);
});

var hover = document.querySelector(".hover");

btn_1.addEventListener("mouseover", function() {
  hover.innerText = titles[0];
  hover.setAttribute("style","margin-left:0px;visibility:visible;")
});

btn_2.addEventListener("mouseover", function() {
  hover.innerText = titles[1];
  hover.setAttribute("style","margin-left:50px; visibility:visible;");
});

btn_3.addEventListener("mouseover", function() {
  hover.innerText = titles[2];
  hover.setAttribute("style","margin-left:110px;visibility:visible;");
});

btn_4.addEventListener("mouseover", function() {
  hover.innerText = titles[3];
  hover.setAttribute("style","margin-left:165px;visibility:visible;");
});

btn_5.addEventListener("mouseover", function() {
  hover.innerText = titles[4];
  hover.setAttribute("style","margin-left:220px;visibility:visible;");
});

btn_6.addEventListener("mouseover", function() {
  hover.innerText = titles[5];
  hover.setAttribute("style","margin-left:275px;visibility:visible;");
});

btn_7.addEventListener("mouseover", function() {
  hover.innerText = titles[6];
  hover.setAttribute("style","margin-left:330px;visibility:visible;");
});

btn_8.addEventListener("mouseover", function() {
  hover.innerText = titles[7];
  hover.setAttribute("style","margin-left:385px;visibility:visible;");
});

document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;
   
  if (e.keyCode == '37') {
     to_left();
  }
  else if (e.keyCode == '39') {
     to_right();
  }

}





















