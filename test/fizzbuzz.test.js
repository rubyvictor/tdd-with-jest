const fizzbuzz = require("../src/fizzbuzz");

test.skip("fizzbuzz(1) should return fizz", function() {
  expect(fizzbuzz(1)).toEqual("fizz");
});

test("fizzbuzz(3) should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});



