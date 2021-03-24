Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only of 'other' hast the same
  // nesting structure as 'this'.
  //
  // Note: You are given a function is Array(o) that returns
  // whether its argument is an array.

}

const isArray = (a) => {
  a.forEach(b => {
    console.log(b)
  })
}

isArray([ [ [ ], [ ] ] ]);
