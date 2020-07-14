import "colors"
import { program } from "commander"
import { Combination } from "../../../general"
import { debug } from "../debug"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { Parameter, ParameterValue, Submetric, SubmetricType } from "../types"

program
    .option("-d, --debug", "debug")
    .parse(process.argv)

debug.rankedUnpopularities = !!program.debug

const submetrics =
    [
        {
            [ Parameter.K ]: 0.038 as ParameterValue,
            [ Parameter.A ]: 1.994 as ParameterValue,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.455 as ParameterValue,
            [ Parameter.W ]: -2.08 as ParameterValue,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.577 as ParameterValue,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ] as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

console.log(`${sumOfSquares}\n${JSON.stringify(submetrics)}`)
