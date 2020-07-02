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
//     usePrimeIndex: false,
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
  usePrimeIndex: false,
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
  usePrimeIndex: false,
  h: false,
}
 */

// OK THEN THIS IS THE BEST I CAN GET WITH BOTH SOPFR AND SOPR USING PI... which is not better than neither using PI
// {"sumOfSquares":0.0012047283944527976,"k":0.575,"j":0.53,"a":1.075,"b":1.140,"s":0.32,"u":0.190,"zipfExponent":-1.37,"usePrimeIndex":true,"h":true,"cutOffPoint":80}

// AND THIS IS THE BEST I CAN GET WITH BOTH SOPFR AND SOPR USING PI, AND USING ZIPF of -1 (of course this will make for much higher sum-of-squares; they must be compared w/in assignments of zipfExponent, not across
// {"sumOfSquares":0.007531643945668567,"k":0.535,"j":0.615,"a":0.595,"b":0.62,"s":0.26,"u":0.17500000000000002,"zipfExponent":-1,"usePrimeIndex":true,"h":true,"cutOffPoint":80}

// Back to plain old p instead of pi, but using Zipf -1 as the rank power
// {"sumOfSquares":0.0059212732819136195,"k":0.52,"j":0.63,"a":0.53,"b":0.56,"s":0.26,"u":0.13,"zipfExponent":-1,"usePrimeIndex":false,"h":false,"cutOffPoint":80}

// and then if we simplify the constraints a bit and say that j must = k and b must = a
// somehow we can get it even lower than above, which means I just started zeroing in on the wrong sector

/*
ok so
{"sumOfSquares":0.005836311055336925,"k":0.48,"j":0.48,"a":0.66,"b":0.66,"s":0.23,"u":0.24,"zipfExponent":-1,"usePrimeIndex":false,"h":false,"cutOffPoint":80}
what if we just say k = 1/2, a = 2/3, s = 1/4 and u = 1/4 ?

so that's sop^(2/3)fr(rgh5(num)) + 1/2 * sop^(2/3)fr(rgh5(den)) + 1/4 * limit + 1/4 * (sop^(2/3)f(rgh5(num)) + 1/2 * sop^(2/3)f(rgh5(den)))
 */

/*
{"sumOfSquares":0.00574450779848622,"k":0.35000000000000003,"j":1,"a":0.6600000000000003,"b":0.6600000000000003,"s":0.23000000000000004,"u":0.2400000000000001,"zipfExponent":-1,"usePrimeIndex":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005592608864826583,"k":0.4100000000000001,"j":1,"a":0.6100000000000002,"b":1,"s":0.2,"u":0.1,"zipfExponent":-1,"usePrimeIndex":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005518190024465688,"k":0.37000000000000005,"j":1,"a":0.6100000000000001,"b":1,"s":0.18000000000000005,"u":0.11999999999999998,"zipfExponent":-1,"usePrimeIndex":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005442549688703772,"k":0.375,"j":1,"a":0.61,"b":1,"s":0.18,"u":0.12,"zipfExponent":-1,"usePrimeIndex":false,"h":false,"cutOffPoint":80}
{"sumOfSquares":0.005357700411912983,"k":0.368,"j":1,"a":0.624,"b":1,"s":0.171,"u":0.127,"zipfExponent":-1,"usePrimeIndex":false,"h":false,"cutOffPoint":80}

 */


// {"sumOfSquares":0.005921045622793881,"k":0.502,"a":0.52,"y":1,"aIsBaseNotPower":1,"u":0.191,"s":0.252,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80}

// could not find a cr (include copfr) > 0 that moved the needle
// {"sumOfSquares":0.005928785296319135,"k":0.47000000000000003,"a":0.65,"y":1,"aIsBaseNotPower":1,"u":0.2400000000000001,"s":0.2300000000000001,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"cr":0}



// big one, once introducing w

// BRANCH ONE (L = false)
// {"sumOfSquares":0.008179998713024309,"k":0.0,"a":0.5,"y":0.5,"aIsBaseNotPower":1,"u":0.0,"s":0.0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.5,"w":-2}

// BRANCH TWO (L = true)
// {"sumOfSquares":0.007728674486461582,"k":0.5,"a":1.5,"y":1.0,"aIsBaseNotPower":1,"u":0.0,"s":0.5,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":1.0,"w":-1.5}
// {"sumOfSquares":0.006301754693725646,"k":0.2,"a":1.8,"y":0.7,"aIsBaseNotPower":1,"u":0.0,"s":0.2,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":1.3,"w":-2}
// {"sumOfSquares":0.005156942952584776,"k":0.2,"a":2.0,"y":0.7,"aIsBaseNotPower":1,"u":0.0,"s":0.0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.5,"w":-2}
// {"sumOfSquares":0.004915467126838784,"k":0.1,"a":2.1,"y":0.6,"aIsBaseNotPower":1,"u":0.0,"s":0.0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.5,"w":-2}
// {"sumOfSquares":0.004803686029440221,"k":0.05,"a":2.0,"y":0.4,"aIsBaseNotPower":1,"u":0.0,"s":0.0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.6,"w":-2.2}
// {"sumOfSquares":0.00479676378911157,"k":0,"a":1.95,"y":0.45,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.6,"w":-2.2}
// {"sumOfSquares":0.00462211252388932,"k":0.01,"a":1.95,"y":0.45,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.6,"w":-2.2}
// {"sumOfSquares":0.004455354439265315,"k":0.03,"a":2,"y":0.45,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.6,"w":-2.1}
// {"sumOfSquares":0.004414737153635361,"k":0.06,"a":2,"y":0.45,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.6,"w":-2.1}
// {"sumOfSquares":0.004250806472367508,"k":0.04,"a":2,"y":0.455,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.575,"w":-2.07}
// {"sumOfSquares":0.004250806472367508,"k":0.04,"a":2,"y":0.455,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.575,"w":-2.07}
// and like the above but with k literally = 0
// {"sumOfSquares":0.004861439527926833,"k":0,"a":1.8000000000000003,"y":0.4,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"cr":0.7,"w":-2.4999999999999996}


/// ok well now THIS is when usePrimeIndex switched to using k as a POWER instead of a multiplier

// {"sumOfSquares":0.007769724280635887,"k":0.7,"a":1.2,"y":0.9,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"w":-5.8}
// {"sumOfSquares":0.008785483884755176,"k":0.5,"a":1.3,"y":0.9,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"w":-4.0}
// {"sumOfSquares":0.00949392523842707,"k":0.4,"a":1.5,"y":0.9,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"w":-2.7}
// {"sumOfSquares":0.009681486078006903,"k":0.3,"a":1.5,"y":0.9,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"w":-2.6}
// {"sumOfSquares":0.00995289587818252,"k":0.2,"a":1.5,"y":0.9,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"w":-2.6}
// {"sumOfSquares":0.007861925864860673,"k":0.6,"a":1.3,"y":0.9,"aIsBaseNotPower":1,"u":0,"s":0,"zipfExponent":-1,"usePrimeIndex":false,"cutOffPoint":80,"useSoapfarNotSoapfrAndSoapf":true,"w":-4}
