const {computeSumOfSquaresGivenParameters} = require("./sumOfSquaresGivenParameters")

const adjustments = {
    k: 0,
    a: 1.994,
    y: 0.455,
    aIsBaseNotPower: true,
    s: 0,
    zipfExponent: -1,
    usePrimeIndex: false,
    cutOffPoint: 80,
    useSoapfarNotSoapfrAndSoapf: true,
    ur: 1,
    u: 0.5,
    cr: 0.577,
    c: 0,
    w: -2.08,
}
const sumOfSquares = computeSumOfSquaresGivenParameters(adjustments)

console.log(JSON.stringify({sumOfSquares, ...adjustments}))
