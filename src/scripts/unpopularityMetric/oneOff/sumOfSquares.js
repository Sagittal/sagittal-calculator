const {} = require("../bests")
const {computeSumOfSquaresForSubmetrics} = require("../sumOfSquares/sumOfSquaresForSubmetrics")
const {SUBMETRIC_TYPE, PARAMETER} = require("../constants")

const submetrics =
    [
        {
            [PARAMETER.K]: 0.038,
            [PARAMETER.A]: 1.994,
            [PARAMETER.A_IS_BASE]: true,
            [PARAMETER.Y]: 0.455,
            [PARAMETER.W]: -2.08,
        },
        {
            [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
            [PARAMETER.WEIGHT]: 0.577,
        },
    ]

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics, {logUnpopularities: true})

console.log(`${sumOfSquares}\n${JSON.stringify(submetrics)}`)
