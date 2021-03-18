// Write a function that takes a string of parentheses, and determines if the order 
// of the parentheses is valid. The function should return true if the string is valid, 
// and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens){
  let workingStr = parens;
  const openParens = [];
  for (let i = 0; i < parens.length; i++) {
    if (workingStr) {
      if (workingStr[0] === ')') {
        if (openParens.length === 0) {
          return false;
        } else {
          openParens.shift();
          workingStr = workingStr.slice(1);
        }
      } else if (workingStr[0] === '(') {
        openParens.unshift(workingStr[0]);
        workingStr = workingStr.slice(1);
      }
    }
  }

  if (openParens.length === 0) {
    return true
  } else {
    return false;
  }
}

console.log(validParentheses("(()" ));