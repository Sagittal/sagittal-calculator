import { program } from "commander"
import { Combination, presentRatio, Ratio } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeAntivotes, Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup } from "./shared/shared"

applySharedUnpopularityMetricCommandSetup(DebugTarget.ANTIVOTES)

program.parse(process.argv)

const submetrics =
    [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.K_AS_COEFFICIENT ]: 0 as ParameterValue,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 1.994 as ParameterValue,
            [ Parameter.Y ]: 0.455 as ParameterValue,
            [ Parameter.W ]: -2.08 as ParameterValue,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.577 as ParameterValue,
        },
    ] as Combination<Submetric>

const fiveRoughRatio: Ratio = [11, 7] as Ratio

const antivotes = computeAntivotes(fiveRoughRatio, submetrics)

saveDebugMessage(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}`, DebugTarget.ANTIVOTES)
