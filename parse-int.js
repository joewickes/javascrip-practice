// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

function parseInt(string) {
  console.log('original =>', string);
  const numberCategories = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4, 
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  }
  
  const strArr = string.split(' ');
  console.log(strArr);

  let expStr = '((';

  for (let i = 0; i < strArr.length; i++) {

    if (strArr[i].includes('-')) {
      console.log(strArr[i]);
      const dashArr = strArr[i].split('-');
      for (let j = 0; j < dashArr.length; j++) {
        if (j === 0) {
          expStr += ` + (${numberCategories[dashArr[j]]} + `;
        } else if (j === 1) {
          expStr += `${numberCategories[dashArr[j]]})`;
        }
      }
    } else if (numberCategories.hasOwnProperty(strArr[i])) {
      if (strArr[i] === 'hundred' || strArr[i] === 'thousand' || strArr[i] === 'million') {
        expStr += ` * ${numberCategories[strArr[i]]})`;
      } else {
        expStr += ` + ${numberCategories[strArr[i]]}`;
      }
    }

    if (i === strArr.length - 1) {
      expStr += ')';
    }
  }

  console.log(expStr, eval(expStr));
}

parseInt('eight hundred and eighty-nine thousand nine hundred forty-five');

// eight hundred and eighty-nine thousand nine hundred forty-five
// (8 * 100 + (80 + 9)) * 1000 + 9 * 100 + (40 + 5)

const calculateThing = () => {
  console.log((8 * 100 + (80 + 9)) * 1000 + 9 * 100 + (40 + 5));
}

calculateThing();