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



// {"sumOfSquares":0.0064931497690717,"soapfar":{"weight":1,"k":0.5918367346938775,"a":1.2346938775510203,"aIsBaseNotPower":1,"w":-4.918367346938775,"y":0.8775510204081632}}



// final best: {"sumOfSquares":0.005426051701524347,"soapfar":{"weight":1,"k":0.6428571428571429,"a":2,"aIsBaseNotPower":1,"w":-2.142857142857143,"x":2,"y":1.1428571428571428,"v":-0.8571428571428572,"t":1.2428571428571429}}
// final best: {"sumOfSquares":0.005191157331911776,"soapfar":{"weight":1,"k":0.6150793650793651,"a":2,"aIsBaseNotPower":1,"w":-2.4761904761904763,"x":3.5,"y":1.4206349206349205,"v":-0.523809523809524,"t":1.5206349206349206}}
// final best: {"sumOfSquares":0.0047381892808182596,"soapfar":{"weight":1,"k":0.603968253968254,"a":2,"aIsBaseNotPower":1,"w":-2.503968253968254,"x":3.7777777777777777,"y":1.5039682539682537,"v":-0.3571428571428573,"t":1.6039682539682538}}




// final best: {"sumOfSquares":0.005119614091819136,"soapfar":{"weight":1,"k":0.6428571428571429,"a":2,"aIsBaseNotPower":1,"w":-2.32192809489,"x":2.928571428571429,"y":1.4285714285714286,"v":1.1428571428571428,"t":0.3857142857142857}}
// final best: {"sumOfSquares":0.005057618121187465,"soapfar":{"weight":1,"k":0.6071428571428572,"a":2,"aIsBaseNotPower":1,"w":-2.32192809489,"x":2.928571428571429,"y":1.4285714285714286,"v":1.1428571428571428,"t":0.3857142857142857}}
// final best: {"sumOfSquares":0.004936591625002264,"soapfar":{"weight":1,"k":0.6357142857142858,"a":2,"aIsBaseNotPower":1,"w":-2.32192809489,"x":2.928571428571429,"y":1.4285714285714286,"v":1.1428571428571428,"t":0.3857142857142857}}
// pretty good ^^^ but so many arbitrary-feeling variables

// final best: {"sumOfSquares":0.006438493169005372,"soapfar":{"weight":1,"k":0.5918367346938775,"a":2,"aIsBaseNotPower":1,"w":-1.584962500721156,"x":0.3673469387755102,"y":0.8571428571428571}}
// final best: {"sumOfSquares":0.005658562707583378,"soapfar":{"weight":1,"k":0.6363636363636364,"a":2,"aIsBaseNotPower":1,"w":-1.584962500721156,"x":0.34482758620689635,"y":1.2413793103448276,"t":0.7758620689655173}}
// could still drill down into this one a bit ^^^


// final best: {"sumOfSquares":0.005916043390218151,"soapfar":{"weight":1,"k":0.6530612244897959,"a":2,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":2.816326530612245,"y":0.8571428571428571}}
// final best: {"sumOfSquares":0.005832104822365286,"soapfar":{"weight":1,"k":0.6581632653061225,"a":2,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":2.7857142857142856,"y":0.8673469387755102}}

// final best: {"sumOfSquares":0.007682647988452395,"soapfar":{"weight":1,"k":0.5,"a":2,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":3,"y":0.9494949494949495,"v":-1.0707070707070707,"t":1.393939393939394}}


// final best: {"sumOfSquares":0.005167669657110088,"soapfar":{"weight":1,"k":0.6363636363636364,"a":2,"aIsBaseNotPower":1,"w":-2.2222222222222223,"x":2.5,"y":1.7777777777777777,"v":-0.18181818181818188,"t":2,"numeratorIsNuminator":0}}
// final best: {"sumOfSquares":0.0050717972627475445,"soapfar":{"weight":1,"k":0.5918367346938775,"a":2,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":2.806122448979592,"y":1.836734693877551,"t":2,"numeratorIsNuminator":0}}
// final best: {"sumOfSquares":0.005076350921367342,"soapfar":{"weight":1,"k":0.596938775510204,"a":2,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":2.8775510204081636,"y":1.806122448979592,"t":2}}

// w/ x as sqrt8 and t as 2
// final best: {"sumOfSquares":0.005243140038013866,"soapfar":{"weight":1,"k":0.6,"a":2,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":2.82842712475,"y":1.8307226698294548,"t":2}}

// pretty much just the log2 locked in:
// final best: {"sumOfSquares":0.005632159280209806,"soapfar":{"weight":1,"k":0.6,"a":2,"aIsBaseNotPower":1,"w":-2,"x":1.7,"y":0.9,"v":-0.8,"t":1}}
// final best: {"sumOfSquares":0.00518741496012857,"soapfar":{"weight":1,"k":0.6333333333333333,"a":2,"aIsBaseNotPower":1,"w":-2.0833333333333335,"x":1.9666666666666663,"y":1.2,"v":-1.1333333333333333,"t":1.625}}
// final best: {"sumOfSquares":0.005124175814254762,"soapfar":{"weight":1,"k":0.6333333,"a":2,"aIsBaseNotPower":1,"w":-2.1333330000000004,"x":2.1666666,"y":1.25,"v":-1.1333333,"t":1.6749999999999998}}

// log2(p/5) locked in, but a little flexible on them:
// final best: {"sumOfSquares":0.005119315714496736,"soapfar":{"weight":1,"k":0.6428571428571429,"a":1.995,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":2.857142857142857,"y":1.7142857142857142,"t":1.8142857142857145}}
// final best: {"sumOfSquares":0.00496600459627689,"soapfar":{"weight":1,"k":0.6011904761904763,"a":2.025,"aIsBaseNotPower":1,"w":-2.346928094887362,"x":3.1904761904761907,"y":1.4642857142857142,"t":1.3142857142857145}}
// final best: {"sumOfSquares":0.004914443167075693,"soapfar":{"weight":1,"k":0.6011904761904763,"a":2.025,"aIsBaseNotPower":1,"w":-2.346928094887362,"x":3.1904761904761907,"y":1.6642857142857141,"t":1.7142857142857144}}
// final best: {"sumOfSquares":0.0048933097103044925,"soapfar":{"weight":1,"k":0.5886904761904762,"a":2.0125,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":3.0029761904761907,"y":1.639285714285714,"t":1.6517857142857144}}
// final best: {"sumOfSquares":0.0047156505967502205,"soapfar":{"weight":1,"k":0.5970238095238095,"a":2.0125,"aIsBaseNotPower":1,"w":-2.334428094887362,"x":3.069642857142857,"y":1.6226190476190474,"t":1.618452380952381}}
// final best: {"sumOfSquares":0.004643131193678951,"soapfar":{"weight":1,"k":0.5920238095238095,"a":2.0107142857142857,"aIsBaseNotPower":1,"w":-2.341928094887362,"x":3.069642857142857,"y":1.6476190476190475,"t":1.658452380952381}}
// so that's like k=3/5, log2(p/5)+3, r^(5/3)+(5/3) ... or are all those 5/3 and 3/5 actually phi and 1/phi? but what would it have to do with this?
// also that 3 is actually obscenely close to 2^phi... 3.06956450765
// yeah well... but it gets even closer when they are all 5/3 and 3/5 things though so...

// log2(p/5) locked in, but a little flexible on them, and using v instead of t:
// final best: {"sumOfSquares":0.005180309711234972,"soapfar":{"weight":1,"k":0.6,"a":2.05,"aIsBaseNotPower":1,"w":-2.321928094887362,"x":3.2,"y":1.2,"v":0.7999999999999998}}
// final best: {"sumOfSquares":0.004917732589121831,"soapfar":{"weight":1,"k":0.6,"a":2.05,"aIsBaseNotPower":1,"w":-2.296928094887362,"x":3.1166666666666667,"y":1.3666666666666667,"v":1.3}}


// only only 5 params (k, a, w, x, y)
// final best: {"sumOfSquares":0.005999794556138422,"soapfar":{"weight":1,"k":0.6428571428571429,"a":1.4385714285714284,"aIsBaseNotPower":1,"w":-3.7142857142857144,"x":1.4285714285714284,"y":0.8571428571428571}}
// ...man, just the sheer variety of things that will get you really close to our best...
// maybe instead of t i should just use both a soapfar and a coapfar
// final best: {"sumOfSquares":0.0057815647383538645,"soapfar":{"weight":1,"k":0.6428571428571429,"a":1.6528571428571426,"aIsBaseNotPower":1,"w":-2.857142857142857,"x":1.857142857142857,"y":0.8571428571428571}}
// final best: {"sumOfSquares":0.0057123313300739215,"soapfar":{"weight":1,"k":0.6228571428571429,"a":1.6528571428571426,"aIsBaseNotPower":1,"w":-2.857142857142857,"x":1.857142857142857,"y":0.8571428571428571}}
// final best: {"sumOfSquares":0.0056803477457678065,"soapfar":{"weight":1,"k":0.6328571428571429,"a":1.5728571428571425,"aIsBaseNotPower":1,"w":-3.0571428571428574,"x":1.607142857142857,"y":0.8571428571428571}}





// ok now trying with soapfar and coapfar
// final best: {"sumOfSquares":0.04537826694079116,"soapfar":{"weight":1,"k":0.16666666666666666,"a":1.5,"aIsBaseNotPower":1,"y":0.3333333333333333},"coapfar":{"weight":0,"k":0,"a":1.5,"aIsBaseNotPower":1,"y":0}}
// ... well okay that was with 0 weight on the coapfar... and also that's 0.0453, not .00453
// final best: {"sumOfSquares":0.0072373629575015076,"soapfar":{"weight":1,"k":0.75,"a":1.5,"aIsBaseNotPower":1,"w":-1,"y":0.5},"coapfar":{"weight":0.6666666666666666,"k":1,"a":1.5,"aIsBaseNotPower":1,"w":-2.5,"y":0}}



// holy shit just 3 params but to .0083?
// final best: {"sumOfSquares":0.00836466920045394,"soapfar":{"weight":1,"k":0.6428571428571429,"w":0.3571428571428572,"y":0.8571428571428571}}
// final best: {"sumOfSquares":0.006689884017318771,"soapfar":{"weight":1,"w":-1}}



/*
{"sumOfSquares":0.00786272668294799,"soapfar":{"weight":1,"k":0.76,"w":-1}}
{"sumOfSquares":0.007729677718388149,"soapfar":{"weight":1,"k":0.8,"w":-1}}
{"sumOfSquares":0.006689884017318771,"soapfar":{"weight":1,"k":1,"w":-1}}
final best: {"sumOfSquares":0.006689884017318771,"soapfar":{"weight":1,"k":1,"w":-1}}

{"sumOfSquares":0.009644148277914023,"soapfar":{"weight":1,"k":0.6599999999999999,"w":0.20000000000000018}}
{"sumOfSquares":0.008602038235548023,"soapfar":{"weight":1,"k":0.7,"w":-1}}
{"sumOfSquares":0.00786272668294799,"soapfar":{"weight":1,"k":0.78,"w":-1}}
final best: {"sumOfSquares":0.00786272668294799,"soapfar":{"weight":1,"k":0.78,"w":-1}}

 */

// ok another 4-parameter one, all soapfar, just kawy
// final best: {"sumOfSquares":0.006519248736225973,"soapfar":{"weight":1,"k":0.6,"a":3.033333333333333,"aIsBaseNotPower":1,"w":-0.9333333333333331,"y":0.8766666666666667}}
// final best: {"sumOfSquares":0.006279995846952803,"soapfar":{"weight":1,"k":0.6428571428571428,"a":2.9904761904761905,"aIsBaseNotPower":1,"w":-0.9119047619047618,"y":0.8552380952380952}}
