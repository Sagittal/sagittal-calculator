// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {computeSumOfSquaresGivenCandidateMetricParameters} = require("./notationalCommaPopularityMetric/sumOfSquaresGivenCandidateMetricParameters")

const CUT_OFF_POINT = 80
const R = -1
const I = false // when true, use pi; when false, use p (for sop(i)f)
const H = false // when true, use pi; when false, use p (for soup(i)f)
const L = false // when true, use logarithmic weights on primes instead of exponential for sopfr
const M = false // when true, use logarithmic weights on primes instead of exponential for sopf // todo: probably i should use gpf, sopfr, sopf instead of sopfgtt and soupfgtt and ignore the gtt parts of the names or make sure that's built into how they're USED instead of how they work

let best = {sumOfSquares: Infinity}

for (let k = 0.355; k < 0.357; k += 0.001) {                        // sopfr denominator scalar
    for (let j = 0.800; j < 0.803; j += 0.001) {                    // sopf denominator scalar (perhaps should = k)
        for (let a = 1.407; a < 1.411; a += 0.001) {                // sopfr prime power
            for (let b = 1.340; b < 1.350; b += 0.001) {            // sopf prime power (perhaps should = a)
                for (let s = 0.582; s < 0.584; s += 0.001) {        // prime limit scalar
                    for (let u = 0.178; u < 0.180; u += 0.001) {    // sopf scalar
                        //                                          // (sopfr is the base so its scalar can be the "base" scalar at 1 that everything else is relative to)
                        const parameters = {
                            k,
                            j,
                            a,
                            b,
                            s,
                            u,
                            r: R,
                            i: I,
                            h: H,
                            cutOffPoint: CUT_OFF_POINT,
                            l: L,
                            m: M,
                        }
                        const sumOfSquares = computeSumOfSquaresGivenCandidateMetricParameters(parameters)

                        if (sumOfSquares < best.sumOfSquares) {
                            best = {sumOfSquares, ...parameters}
                            console.log(JSON.stringify(best))
                        }
                    }
                }
            }
        }
    }
}
