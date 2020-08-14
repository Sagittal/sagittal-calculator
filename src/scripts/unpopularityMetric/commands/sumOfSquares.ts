import { Combination } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeSumOfSquaresForSubmetrics, Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup } from "./shared/shared"

applySharedUnpopularityMetricCommandSetup(DebugTarget.UNPOPULARITIES)

const submetrics =
    [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 1.994 as ParameterValue,
            [ Parameter.Y ]: 0.455 as ParameterValue,
            [ Parameter.W ]: -2.08 as ParameterValue,
            [ Parameter.USE_NUMINATOR ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.577 as ParameterValue,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ] as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

saveDebugMessage(`${sumOfSquares}\n${JSON.stringify(submetrics)}`, DebugTarget.ALL)
