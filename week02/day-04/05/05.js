'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

var len1 = girls.length;
var len2 = boys.length;
var count1 = 1;
var count2 = 0;

for (var i = 0; i < len1; i++) {
  order[count1] = girls[i];
  count1 += 2;
};

for (var i = 0; i < len2; i++) {
  order[count2] = boys[i];
  count2 += 2;
};



console.log(order);