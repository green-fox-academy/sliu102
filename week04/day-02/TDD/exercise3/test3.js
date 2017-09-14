const test = require('tape');
const convert = require('./exercise3.js');



test('test function convert', function(t) {
  var expect = "I";
  var num = 1;
  var actual = convert(num);  
  t.equal(actual,expect);
  t.end();
});


test('test function convert', function(t) {
  var expect = "XCIX";
  var num = 99;
  var actual = convert(num);  
  t.equal(actual,expect);
  t.end();
});


test('test function convert', function(t) {
  var expect = -1;
  var num = null;
  var actual = convert(num);  
  t.equal(actual,expect);
  t.end();
});

test('test function convert', function(t) {
  var expect = -1;
  var num = "xxx";
  var actual = convert(num);  
  t.equal(actual,expect);
  t.end();
});
