/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
  var inputArr = input.split("");
  result = "";

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === inputArr[i].toUpperCase()) {
      result += "-" + inputArr[i].toLowerCase();
    } else {
      result += inputArr[i];
    }
  }
  return result;
}

module.exports = kebabize;
