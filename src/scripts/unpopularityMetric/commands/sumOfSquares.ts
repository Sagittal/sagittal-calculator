import {} from "../bestMetrics"
import {computeSumOfSquaresForSubmetrics} from "../sumOfSquares/sumOfSquaresForSubmetrics"
import {SUBMETRIC_TYPE, PARAMETER} from "../constants"

const submetrics =
    [
        {
            [PARAMETER.K]: 0.038,
            [PARAMETER.A]: 1.994,
            [PARAMETER.A_IS_BASE]: true,
            [PARAMETER.Y]: 0.455,
            [PARAMETER.W]: -2.08,
            [PARAMETER.NUMERATOR_IS_NUMINATOR]: false,
        },
        {
            [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
            [PARAMETER.WEIGHT]: 0.577,
            [PARAMETER.NUMERATOR_IS_NUMINATOR]: false,
        },
    ]

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics, {logUnpopularities: true})

console.log(`${sumOfSquares}\n${JSON.stringify(submetrics)}`)
