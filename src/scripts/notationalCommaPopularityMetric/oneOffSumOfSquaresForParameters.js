const {computeSumOfSquaresGivenParameters} = require("./sumOfSquaresGivenParameters")

const parameters = {
    soapfar: {
        adjustments: { // todo: confusing why sometimes it seems we need this and other times not, this adjustments nesting level... typescript would help
            weight: 1,
            // k: 1,
            // a: 2,
            // aIsBaseNotPower: 1,
            w: -1,
            // x: -2,
            // y: 0.06896551724137931,
            // t: -2,
        }
    }
}

const sumOfSquares = computeSumOfSquaresGivenParameters(parameters, true)

console.log(JSON.stringify({sumOfSquares, ...parameters}))
