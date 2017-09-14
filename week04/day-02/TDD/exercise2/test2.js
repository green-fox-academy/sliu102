const test = require('tape');
const check = require('./exercise2.js');



test('test function check', function(t) {
  var expect = true;
  var str1 = "bbbaaaddd";
  var str2 = "dddaaabbb";
  var actual = check(str1,str2);  
  t.equal(expect,actual);
  t.end();
});


test('test function countLetterInString', function(t) {
  var expect = true;
  var str1 = "abcd";
  var str2 = "dcba";
  var actual = check(str1,str2);  
  t.equal(expect,actual);
  t.end();
});

test('test function countLetterInString', function(t) {
  var expect = false;
  var str1 = "xxxxxxzzzzzzz";
  var str2 = "xxxxxxxxxxxxx";
  var actual = check(str1,str2);  
  t.equal(expect,actual);
  t.end();
});

test('test function countLetterInString', function(t) {
  var expect = false;
  var str1 = 1234321;
  var str2 = "123321";
  var actual = check(str1,str2);  
  t.equal(expect,actual);
  t.end();
});
