const fizzbuzz = require("../src/fizzbuzz");

test("fizzbuzz(1) should return 1", function() {
  expect(fizzbuzz(1)).toEqual("1");
});

test.skip("fizzbuzz(3) should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});

test.skip("fizzbuzz(10) should return buzz", function() {
  expect(fizzbuzz(10)).toEqual("buzz");
});

test.skip("fizzbuzz(30) should return fizzbuzz", function() {
  expect(fizzbuzz(30)).toEqual("fizzbuzz");
});




