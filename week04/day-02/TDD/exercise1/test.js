const test = require('tape');
const getIndex = require('./exercise1.js');



test('test function countLetterInString', function(t) {
  var expect = 5;
  var value = 4;
  var list = [-1,0,1,2,3,4,5,6];
  var actual = getIndex(value,list);  
  t.equal(expect,actual);
  t.end();
});

test('test function countLetterInString', function(t) {
  var expect = -1;
  var value = 10;
  var list = [-1,0,1,2,3,4,5,6];
  var actual = getIndex(value,list);  
  t.equal(expect,actual);
  t.end();
});

test('test function countLetterInString', function(t) {
  var expect = -1;
  var value = 1;
  var list = [];
  var actual = getIndex(value,list);  
  t.equal(expect,actual);
  t.end();
});

test('test function countLetterInString', function(t) {
  var expect = -1;
  var value = null;
  var list = [];
  var actual = getIndex(value,list);  
  t.equal(expect,actual);
  t.end();
});