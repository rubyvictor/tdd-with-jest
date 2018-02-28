const kebabize = require("../src/kebabize");

test("hereNow should be kebabized to here-now", function() {
  expect(kebabize("hereNow")).toEqual("here-now");
});


// write additional tests to ensure kebabize() works as expected
