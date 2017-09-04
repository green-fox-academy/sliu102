const test = require('tape');
const countLetterInString = require('./exercise-06')



test('test function countLetterInString', function(t) {
  const expection1 = 0;
  const actual1 = countLetterInString('111','a');

  const expection2 = 1;
  const actual2 = countLetterInString('abc','a');

  const expection3 = 2;
  const actual3 = countLetterInString('abca','a');

  t.equal(expection1,actual1);
  t.equal(expection2,actual2);
  t.equal(expection3,actual3);
  t.end();

});

