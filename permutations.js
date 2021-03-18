// In this kata you have to create all permutations of an input string and remove 
// duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations ('abb'); // ['abb', 'bab', 'bba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
  const strArr = string.split('');
  
  strArr.forEach(letter => {
    const idx = strArr.indexOf(letter);
    let currentArr = [...strArr];
    currentArr.splice(idx, 1);

    
  })
}

permutations('asdf')

// 