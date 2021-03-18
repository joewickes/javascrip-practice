// In this kata you have to create all permutations of an input string and remove 
// duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations ('abb'); // ['abb', 'bab', 'bba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
  const finArr = [string];

  const addToFinArr = (str) => {
    if (!finArr.includes(str)) {
      finArr.push(str);
    }
  }
  
  let index = 0;

  while (index !== finArr.length) {
    const strArr = finArr[index].split('');
    
    strArr.forEach(letter => {
      const idx = strArr.indexOf(letter);
      let currentArr = [...strArr];
      let currentStr = currentArr.splice(idx, 1);
      currentStr = currentArr.join('');
  
      for (let i = -1; i < strArr.length - 1; i++) {
        const front = currentStr.slice(0, i + 1);
        const back = currentStr.slice(i + 1);
        const finStr = front + letter + back;
        addToFinArr(finStr);
      }
    });

    index++;
  }
  return finArr;
}

permutations('aabb')

// 