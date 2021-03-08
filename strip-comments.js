// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
// Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {222
  const markersObj = {};
  
  markers.forEach(marker => {
    markersObj[marker] = 1;
  });

  const inputLines = input.split('\n');

  const splitLines = inputLines.map(line => {
    return line.split('');
  })

  let finalStr = '';

  for (let i = 0; i < splitLines.length; i++) {
    let commentChar = null;

    for (let j = 0; j < splitLines[i].length ; j++) {
      if (markersObj.hasOwnProperty(splitLines[i][j])) {
        console.log(splitLines[i][j]);
        commentChar = j;
      }
    }

    let singleString = '';
    if (commentChar !== null && commentChar !== 0) {
      singleString = inputLines[i].slice(0, commentChar - 1).trim();
    } else if (commentChar === null) {
      singleString = inputLines[i].trim();
    }

    if (i === splitLines.length - 1) {
      finalStr += singleString;
    } else {
      finalStr += singleString += '\n';
    }
  }
  return finalStr;
};

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);