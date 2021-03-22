function sroot(n, g) {
  if (!g) {
    g = n / 2.0;
  }
  let d = n / g;
  let ng = (d + g) / 2.0;
  if (g == ng) {          
      return g;
  }
  return sroot(n, ng);
}



console.log(sroot(5));

function sqroot(n) {
  let g = n / 2.0;
  let d = n / g;
  let ng = (d + g) / 2.0;

  while (true) {
    g = ng;
    d = n / g;
    ng = (d + g) / 2.0;
    if (g == ng) break;
  }

  return g;
}

console.log(sqroot(25));