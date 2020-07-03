// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {computeSumOfSquaresGivenCombinedAdjustments} = require("./notationalCommaPopularityMetric/sumOfSquaresGivenCombinedAdjustments")
const {computeAdjustmentsToCheck} = require("./notationalCommaPopularityMetric/adjustmentsToCheck")
const {computePrimeContentUnpopularitySubmetricCombinedAdjustments} = require("./notationalCommaPopularityMetric/primeContentUnpopularitySubmetricCombinedAdjustments")
const {computeLog} = require("../utilities/log")

const ZERO = {center: 0, count: 1}
const ONE = {center: 1, count: 1}
const NUMERIC_BOOLEAN = {center: 0.5, range: 1, count: 2}

const combinedAdjustmentsToCheck = computePrimeContentUnpopularitySubmetricCombinedAdjustments({
    soapfar: computeAdjustmentsToCheck({
        // todo: and k could be either a power, a base, or a coefficient too
        // todo: also have a "submetric power or base"
        // todo: also have a "use the submetric power or base as a base"
        // todo: shouldn’t you be able to weight the numinator too? with "j" I guess? in cases when you ONLY want the numinator that's the only way you could do it
        weight: ONE,                                                // submetric coefficient
        k: {center:0.213895488, count: 1},                       // diminuator coefficient
        a: {center:2, count: 1},                         // prime power or base
        aIsBaseNotPower: ONE,                           // use the prime power or base as a base
        w: {center:-2.048657352, count: 1},                        // prime constant (applied after applying power or base)
        // x: {center:1.607142857142857, range: 0.2, count: 11},                         // prime constant (applied before applying power or base)
        y: {center:0.642099097, count: 1},                         // term power
        // v: {center: 0, range: 4, count: 51},                         // term constant (applied before applying power)
        // t: {center: 2, range: 4, count: 51},                         // term constant (applied after applying power) // todo: whoa i think it breaks it if y is 0 and t is -1
        // numeratorIsNuminator: {center:1, count: 1}
    }),
    // soapf: computeAdjustmentsToCheck({
    //     weight: {center: 0.5, range: 1, count: 5},
    //     k: {center:0.6, count: 1},                       // diminuator coefficient
    //     a: {center: 2, count: 1},                         // prime power or base
    //     aIsBaseNotPower: ONE,                           // use the prime power or base as a base
    //     w: {center: -2.321928094887362, count: 1},                        // prime constant (applied after applying power or base)
    //     x: {center:3, count: 1},                         // prime constant (applied before applying power or base)
    //     y: {center:1.666666666666667, count: 1},                         // term power
    //     // v: {center: -1.1333333, range: 0.5, count: 15},                         // term constant (applied before applying power)
    //     t: {center:1.666666666666667, count: 1},                         // term constant (applied after applying power)
    // }),
    // coapfar: computeAdjustmentsToCheck({
    //     weight: {center: 0.577, count: 1},
        // k: {center:0.213895488, count: 1},                       // diminuator coefficient
        // a: {center:2, count: 1},                         // prime power or base
        // aIsBaseNotPower: ONE,                           // use the prime power or base as a base
        // w: {center:-2.048657352, count: 1},                        // prime constant (applied after applying power or base)
        // x: {center:1.607142857142857, range: 0.2, count: 11},                         // prime constant (applied before applying power or base)
        // y: {center:0.642099097, count: 1},                         // term power
        //     // v: {center: -1.1333333, range: 0.5, count: 15},                         // term constant (applied before applying power)
    //     // t: {center:1.666666666666667, count: 1},                         // term constant (applied after applying power)
    // }),
    coapf: computeAdjustmentsToCheck({
         weight: {center: 0.577, count: 1},
    //     k: {center:0.6, count: 1},                       // diminuator coefficient
    //     a: {center: 2, count: 1},                         // prime power or base
    //     aIsBaseNotPower: ONE,                           // use the prime power or base as a base
    //     w: {center: -2.321928094887362, count: 1},                        // prime constant (applied after applying power or base)
    //     x: {center:3, count: 1},                         // prime constant (applied before applying power or base)
    //     y: {center:1.666666666666667, count: 1},                         // term power
    //     // v: {center: -1.1333333, range: 0.5, count: 15},                         // term constant (applied before applying power)
    //     t: {center:1.666666666666667, count: 1},                         // term constant (applied after applying power)
    }),
    // soapifar: computeAdjustmentsToCheck({
    //     weight: {center: 0.5, range: 1, count: 50},
    //     k: {center:1/1.618033988749895, count: 1},                       // diminuator coefficient
    //     a: {center: 2, count: 1},                         // prime power or base
    //     aIsBaseNotPower: ONE,                           // use the prime power or base as a base
    //     w: {center: -computeLog(5,2), count: 1},                        // prime constant (applied after applying power or base)
    //     x: {center:2^1.618033988749895, count: 1},                         // prime constant (applied before applying power or base)
    //     y: {center:1.618033988749895, count: 1},                         // term power
    //     // v: {center: -1.1333333, range: 0.5, count: 15},                         // term constant (applied before applying power)
    //     t: {center:1.618033988749895, count: 1},                         // term constant (applied after applying power)
    // }),
    // soapif: computeAdjustmentsToCheck({
    //     weight: {center: 0.5, range: 1, count: 5},
    //     k: {center:0.6, count: 1},                       // diminuator coefficient
    //     a: {center: 2, count: 1},                         // prime power or base
    //     aIsBaseNotPower: ONE,                           // use the prime power or base as a base
    //     w: {center: -2.321928094887362, count: 1},                        // prime constant (applied after applying power or base)
    //     x: {center:3, count: 1},                         // prime constant (applied before applying power or base)
    //     y: {center:1.666666666666667, count: 1},                         // term power
    //     // v: {center: -1.1333333, range: 0.5, count: 15},                         // term constant (applied before applying power)
    //     t: {center:1.666666666666667, count: 1},                         // term constant (applied after applying power)
    // }),
    // coapifar: computeAdjustmentsToCheck({
    //     weight: {center: 0.5, range: 1, count: 5},
    //     k: {center:0.6, count: 1},                       // diminuator coefficient
    //     a: {center: 2, count: 1},                         // prime power or base
    //     aIsBaseNotPower: ONE,                           // use the prime power or base as a base
    //     w: {center: -2.321928094887362, count: 1},                        // prime constant (applied after applying power or base)
    //     x: {center:3, count: 1},                         // prime constant (applied before applying power or base)
    //     y: {center:1.666666666666667, count: 1},                         // term power
    //     // v: {center: -1.1333333, range: 0.5, count: 15},                         // term constant (applied before applying power)
    //     t: {center:1.666666666666667, count: 1},                         // term constant (applied after applying power)
    // }),
    // coapif: computeAdjustmentsToCheck({
    //     weight: {center: 0.5, range: 1, count: 5},
    //     k: {center:0.6, count: 1},                       // diminuator coefficient
    //     a: {center: 2, count: 1},                         // prime power or base
    //     aIsBaseNotPower: ONE,                           // use the prime power or base as a base
    //     w: {center: -2.321928094887362, count: 1},                        // prime constant (applied after applying power or base)
    //     x: {center:3, count: 1},                         // prime constant (applied before applying power or base)
    //     y: {center:1.666666666666667, count: 1},                         // term power
    //     // v: {center: -1.1333333, range: 0.5, count: 15},                         // term constant (applied before applying power)
    //     t: {center:1.666666666666667, count: 1},                         // term constant (applied after applying power)
    // }),
})

let best = {sumOfSquares: Infinity}

const totalToCheck = combinedAdjustmentsToCheck.length
console.log("total combined adjustments to check:", totalToCheck)
combinedAdjustmentsToCheck.forEach((combinedAdjustments, index) => {
    // console.log(combinedAdjustments)
    // console.log(combinedAdjustments)

    const sumOfSquares = computeSumOfSquaresGivenCombinedAdjustments(combinedAdjustments)
    // console.log(sumOfSquares)
    if (sumOfSquares < best.sumOfSquares) {
        best = {sumOfSquares, ...combinedAdjustments}
        if (sumOfSquares === 0) {
            console.log(combinedAdjustments)
            computeSumOfSquaresGivenCombinedAdjustments(combinedAdjustments, true)
            throw new Error("should not be 0") // todo: damn okay so if all the antivotes come out 0, then the ranks just go in order, which means that it becomes a perfect fit for the real data...
        }

        console.log(JSON.stringify(best))
    }

    if (index % 10000 === 0) console.log("combined adjustments checked so far:", index, 'out of', totalToCheck, '(', 100 * index / totalToCheck, '% )')
})
console.log('final best:', JSON.stringify(best))
