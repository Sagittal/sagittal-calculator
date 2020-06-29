// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {computeSumOfSquaresGivenCandidateMetricParameters} = require("./notationalCommaPopularityMetric/sumOfSquaresGivenCandidateMetricParameters")

// todo: probably i should use gpf, sopafr, sopaf instead of sopfgtt and soupfgtt and ignore the gtt parts of the names or make sure that's built into how they're USED instead of how they work

let best = {sumOfSquares: Infinity}

for (let k = 0.0; k < 1; k += 0.01) {
    for (let a = 0.6; a < 1.4; a += 0.01) {
        for (let y = 0.6; y < 1.2; y += 0.01) {
            for (let s = 0.41; s < 0.44; s += 0.001) {
                // I have decided not to let k, a, y, l, or m vary between sopafr and sopaf. That they would be different doesn't feel psychologically motivated.
                // And when combined as sopafry, of course they could not be somehow different.
                const parameters = {
                    k,                                  // denominator scalar (in sopafr, sopaf, or sopafry)
                    a,                                  // prime power/log (in sopafr, sopaf, or sopafry)
                    y,                                  // term  power/log (in sopafr, sopaf, or sopafry)
                    l: false,                           // when true, use 'a' logarithmically instead of exponentially
                    m: false,                           // when true, use 'y' logarithmically instead of exponentially
                    u: 0,                               // sopaf scalar (only relevant when 'x' is false)
                    s,                                  // prime limit scalar
                    r: -1,                              // or z; Zipf's exponent; exponential weight on the ranks
                    i: false,                           // when true, use the prime counting function, pi; when false, use the prime itself (everywhere, in sopafr, sopaf, or sopafry)
                    cutOffPoint: 80,                    // the point where ratios no longer have >0.05% of votes, and drops from 19 votes suddenly to 16
                    x: true                             // when true, use sopafry; when false, use sopafr and sopaf
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
