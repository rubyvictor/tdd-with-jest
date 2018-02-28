const kebabize = require("../src/kebabize");

test("hiThereBatMan should be kebabized to hi-there-bat-man", function() {
  expect(kebabize("hiThereBatMan")).toEqual("hi-there-bat-man");
});


// write additional tests to ensure kebabize() works as expected
