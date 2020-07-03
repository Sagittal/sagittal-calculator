// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {computeSumOfSquaresGivenCombinedAdjustments} = require("./notationalCommaPopularityMetric/sumOfSquares/sumOfSquaresGivenCombinedAdjustments")
const {computeAdjustmentsToCheck} = require("./notationalCommaPopularityMetric/parameters/adjustmentsToCheck")
const {computePrimeContentUnpopularitySubmetricCombinedAdjustments} = require("./notationalCommaPopularityMetric/parameters/primeContentUnpopularitySubmetricCombinedAdjustments")
const {LOCKED_AT_ONE} = require("./notationalCommaPopularityMetric/parameters/constants")

// todo: should have constants for these names
// todo: and constants for each of the adjustments, which is where i should move these comments

const combinedAdjustmentsToCheck = computePrimeContentUnpopularitySubmetricCombinedAdjustments({
    soapfar: computeAdjustmentsToCheck({ // todo: this call should be handled inside computePrimeContentUnpopularitySubmetricCombinedAdjustments I think... don't change its test though, just encapsulate another layer
        // todo: and k could be either a power, a base, or a coefficient too
        // todo: also have a "submetric power or base"
        // todo: also have a "use the submetric power or base as a base"
        // todo: shouldn’t you be able to weight the numinator too? with "j" I guess? in cases when you ONLY want the numinator that's the only way you could do it
        weight: LOCKED_AT_ONE,                                                // submetric coefficient
        k: {center:0.213895488, count: 1},                       // diminuator coefficient
        a: {center:2, count: 1},                         // prime power or base
        aIsBaseNotPower: LOCKED_AT_ONE,                           // use the prime power or base as a base
        w: {center:-2.048657352, count: 1},                        // prime constant (applied after applying power or base)
        // x: {center:1.607142857142857, range: 0.2, count: 11},                         // prime constant (applied before applying power or base)
        y: {center:0.642099097, count: 1},                         // term power
        // v: {center: 0, range: 4, count: 51},                         // term constant (applied before applying power)
        // t: {center: 2, range: 4, count: 51},                         // term constant (applied after applying power) // todo: whoa i think it breaks it if y is 0 and t is -1
        // numeratorIsNuminator: {center:1, count: 1}
    }),
})

let best = {sumOfSquares: Infinity}

const totalToCheck = combinedAdjustmentsToCheck.length
console.log("total combined adjustments to check:", totalToCheck)
combinedAdjustmentsToCheck.forEach((combinedAdjustments, index) => {
    const sumOfSquares = computeSumOfSquaresGivenCombinedAdjustments(combinedAdjustments)
    if (sumOfSquares < best.sumOfSquares) {
        best = {sumOfSquares, ...combinedAdjustments}
        if (sumOfSquares === 0) {
            computeSumOfSquaresGivenCombinedAdjustments(combinedAdjustments, {logOurApproximatePopularities: true})
            throw new Error("This sum of squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
        }

        console.log(JSON.stringify(best))
    }

    if (index % 10000 === 0) console.log("combined adjustments checked so far:", index, 'out of', totalToCheck, '(', 100 * index / totalToCheck, '% )')
})
console.log('final best:', JSON.stringify(best))
