// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {computeSumOfSquaresGivenCombinedAdjustments} = require("./notationalCommaPopularityMetric/sumOfSquaresGivenCombinedAdjustments")
const {computeAdjustmentsToCheck} = require("./notationalCommaPopularityMetric/adjustmentsToCheck")
const {computePrimeContentUnpopularitySubmetricCombinedAdjustments} = require("./notationalCommaPopularityMetric/primeContentUnpopularitySubmetricCombinedAdjustments")

const ONE = {center: 1, count: 1}
const NUMERIC_BOOLEAN = {center: 0.5, range: 1, count: 2}

const combinedAdjustmentsToCheck = computePrimeContentUnpopularitySubmetricCombinedAdjustments({
    soapfar: computeAdjustmentsToCheck({
        // todo: also have a "submetric power or base"
        // todo: also have a "use the submetric power or base as a base"
        weight: ONE,                                                // submetric coefficient
        k: {center: 0.038, range: 0.01, count: 5},                       // diminuator coefficient
        a: {center: 1.994, range: 0.01, count: 5},                         // prime power or base
        aIsBaseNotPower: ONE,                           // use the prime power or base as a base
        w: {center: -2.08, range: 0.01, count: 2},                        // prime constant (applied after applying power or base)
        // x: {center: 0, range: 2, count: 2},                         // prime constant (applied before applying power or base)
        y: {center: 0.455, range: 0.01, count: 2},                         // term power
        // v: {center: 0, range: 2, count: 2},                         // term constant (applied before applying power)
        // t: {center: 0, range: 2, count: 2},                         // term constant (applied after applying power)
    }),
    // soapf: computeAdjustmentsToCheck({}),
    coapfar: computeAdjustmentsToCheck({
        weight: {center: 0.577, range: 0.01, count: 2}
    }),
    // coapf: computeAdjustmentsToCheck({}),
    // soapifar: computeAdjustmentsToCheck({}),
    // soapif: computeAdjustmentsToCheck({}),
    // coapifar: computeAdjustmentsToCheck({}),
    // coapif: computeAdjustmentsToCheck({}),
})

let best = {sumOfSquares: Infinity}

console.log("total combined adjustments to check:", combinedAdjustmentsToCheck.length)
combinedAdjustmentsToCheck.forEach((combinedAdjustments, index) => {
    // console.log(combinedAdjustments)
    const sumOfSquares = computeSumOfSquaresGivenCombinedAdjustments(combinedAdjustments)
    if (sumOfSquares < best.sumOfSquares) {
        best = {sumOfSquares, ...combinedAdjustments}
        console.log(JSON.stringify(best))
    }

    if (index % 10000 === 0) console.log("combined adjustments checked so far:", index)
})
