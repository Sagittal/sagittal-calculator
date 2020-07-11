import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares/sumOfSquaresForSubmetrics"
import { Parameter, Submetric, SubmetricType } from "../types"
import { Combination } from "../../../utilities/types"

const submetrics =
    [
        {
            [ Parameter.K ]: 0.038,
            [ Parameter.A ]: 1.994,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.455,
            [ Parameter.W ]: -2.08,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.577,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ] as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics, { logUnpopularities: true })

console.log(`${sumOfSquares}\n${JSON.stringify(submetrics)}`)
