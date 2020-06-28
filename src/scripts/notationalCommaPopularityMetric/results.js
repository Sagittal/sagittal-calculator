// best, using all p, no pi, and where b didn't exist yet because it was essentially 1
// best.k = 0.6
// best.a = 0.56
// best.s = 0.2
// best.u = 0.1
// best.sumOfSquares = 0.001101743627332945

// new best!
// {
//     sumOfSquares: 0.001077212485260985,
//     k: 0.53, (when k and j were the same)
//     a: 0.53,
//     b: 0.57,
//     s: 0.26,
//     u: 0.13,
//     i: false,
//     h: false,
// }

/* new best
{ sumOfSquares: 0.001070825714375593,
  k: 0.52,
  j: 0.63,
  a: 0.53,
  b: 0.56,
  s: 0.26,
  u: 0.13,
  i: false,
  h: false,
}
 */

/* new best
{ sumOfSquares: 0.0010702082763138824,
  k: 0.51,
  j: 0.63,
  a: 0.535,
  b: 0.565,
  s: 0.26,
  u: 0.135,
  i: false,
  h: false,
}
 */

// OK THEN THIS IS THE BEST I CAN GET WITH BOTH SOP AND SOUP USING PI... which is not better than neither using PI
// {"sumOfSquares":0.0012047283944527976,"k":0.575,"j":0.53,"a":1.075,"b":1.140,"s":0.32,"u":0.190,"r":-1.37,"i":true,"h":true,"cutOffPoint":80}

// AND THIS IS THE BEST I CAN GET WITH BOTH SOP AND SOUP USING PI, AND USING ZIPF of -1 (of course this will make for much higher sum of squares; they must be compared w/in assignments of r, not across
// {"sumOfSquares":0.007531643945668567,"k":0.535,"j":0.615,"a":0.595,"b":0.62,"s":0.26,"u":0.17500000000000002,"r":-1,"i":true,"h":true,"cutOffPoint":80}

// Back to plain old p instead of pi, but using Zipf -1 as the rank power
// {"sumOfSquares":0.0059212732819136195,"k":0.52,"j":0.63,"a":0.53,"b":0.56,"s":0.26,"u":0.13,"r":-1,"i":false,"h":false,"cutOffPoint":80}

// and then if we simplify the constraints a bit and say that j must = k and b must = a
// somehow we can get it even lower than above, which means I just started zeroing in on the wrong sector

/*
ok so
{"sumOfSquares":0.005836311055336925,"k":0.48,"j":0.48,"a":0.66,"b":0.66,"s":0.23,"u":0.24,"r":-1,"i":false,"h":false,"cutOffPoint":80}
what if we just say k = 1/2, a = 2/3, s = 1/4 and u = 1/4 ?

so that's sop^(2/3)fr(rgh5(num)) + 1/2 * sop^(2/3)fr(rgh5(den)) + 1/4 * limit + 1/4 * (sop^(2/3)f(rgh5(num)) + 1/2 * sop^(2/3)f(rgh5(den)))
 */

/*
{"sumOfSquares":0.00574450779848622,"k":0.35000000000000003,"j":1,"a":0.6600000000000003,"b":0.6600000000000003,"s":0.23000000000000004,"u":0.2400000000000001,"r":-1,"i":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005592608864826583,"k":0.4100000000000001,"j":1,"a":0.6100000000000002,"b":1,"s":0.2,"u":0.1,"r":-1,"i":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005518190024465688,"k":0.37000000000000005,"j":1,"a":0.6100000000000001,"b":1,"s":0.18000000000000005,"u":0.11999999999999998,"r":-1,"i":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005442549688703772,"k":0.375,"j":1,"a":0.61,"b":1,"s":0.18,"u":0.12,"r":-1,"i":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005357700411912983,"k":0.368,"j":1,"a":0.624,"b":1,"s":0.171,"u":0.127,"r":-1,"i":false,"h":false,"cutOffPoint":80}

 */
