const test = require('tape');
const check = require('./exercise4.js');



test('test function check', function(t) {
  var expect = true;
  var sudu = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
  var actual = check(sudu);  
  t.equal(actual,expect);
  t.end();
});


test('test function check', function(t) {
  var expect = false;
  var sudu = [[1,2,3,4,5,6,6,8,9],[1,2,3,4,4,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
  var actual = check(sudu);  
  t.equal(actual,expect);
  t.end();
});

test('test function check', function(t) {
  var expect = false;
  var sudu = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
  var actual = check(sudu);  
  t.equal(actual,expect);
  t.end();
});

test('test function check', function(t) {
  var expect = true;
  var sudu = [[9,2,3,4,5,6,7,8,1],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
  var actual = check(sudu);  
  t.equal(actual,expect);
  t.end();
});

test('test function check', function(t) {
  var expect = false;
  var sudu = [1,2,3,4,5,6,7,8,9];
  var actual = check(sudu);  
  t.equal(actual,expect);
  t.end();
});