// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {presentRatio} = require("../utilities/comma/present/ratio")

const {computeSumOfSquaresGivenCandidateMetricParameters} = require("./notationalCommaPopularityMetric/sumOfSquaresGivenCandidateMetricParameters")
const {ourCandidateMetric} = require("./notationalCommaPopularityMetric/candidateMetric") // should be "compute"

const CUT_OFF_POINT = 80
const R = -1
const I = false // when true, use pi; when false, use p (for sop(i)f)
const H = false // when true, use pi; when false, use p (for soup(i)f)

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
//
// let best = {sumOfSquares: Infinity}
//
// for (let k = 0.3; k < 0.7; k += 0.01) {                       // sopfr denominator scalar
//     // for (let j = 0.62; j < 0.65; j += 0.01) {                       // sopf denominator scalar (perhaps should = k)
//         for (let a = 0.3; a < 0.7; a += 0.01) {                   // sopfr prime power
//             // for (let b = 0.54; b < 0.58; b += 0.01) {                 // sopf prime power (perhaps should = a)
//                 for (let s = 0.2; s < 0.4; s += 0.01) {            // prime limit scalar
//                     for (let u = 0.1; u < 0.3; u += 0.01) {       // sopf scalar
//                         //                                            // (sopfr is the base so its scalar can be the "base" scalar at 1 that everything else is relative to)
//                         const parameters = {k, j: k, a, b: a, s, u, r: R, i: I, h: H, cutOffPoint: CUT_OFF_POINT}
//                         const sumOfSquares = computeSumOfSquaresGivenCandidateMetricParameters(parameters)
//
//                         if (sumOfSquares < best.sumOfSquares) {
//                             best = {sumOfSquares, ...parameters}
//                             console.log(JSON.stringify(best))
//                         }
//                     }
//                 }
//             // }
//         }
//     // }
// }


/*
ok so
{"sumOfSquares":0.005836311055336925,"k":0.48,"j":0.48,"a":0.66,"b":0.66,"s":0.23,"u":0.24,"r":-1,"i":false,"h":false,"cutOffPoint":80}
what if we just say k = 1/2, a = 2/3, s = 1/4 and u = 1/4 ?

so that's sop^(2/3)fr(rgh5(num)) + 1/2 * sop^(2/3)fr(rgh5(den)) + 1/4 * limit + 1/4 * (sop^(2/3)f(rgh5(num)) + 1/2 * sop^(2/3)f(rgh5(den)))
 */

const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")
const parameters = {
    "k":0.5,"j":0.5,"a":0.6666666,"b":0.66666666,"s":0.25,"u":0.25,"r":-1,"i":false,"h":false,"cutOffPoint":80,
}
console.log(COMMA_POPULARITIES.slice(0, 80).map(commaPopularity => {
    return `${presentRatio(commaPopularity.ratio)} ${ourCandidateMetric(commaPopularity.ratio, parameters)}`
}))
