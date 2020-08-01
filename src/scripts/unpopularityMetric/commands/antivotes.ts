import "colors"
import { program } from "commander"
import { Combination, presentRatio, Ratio } from "../../../general"
import { clearLogs, debug, saveLog } from "../debug"
import { computeAntivotes } from "../sumOfSquares"
import { DebugTarget, Parameter, ParameterValue, Submetric } from "../types"
import * as colors from "colors"

clearLogs()

program
    .option("-d, --debug", "debug")
    .option("-c, --no-color", "no color")
    .parse(process.argv)

if (!program.color) {
    colors.disable()
}
debug[ DebugTarget.SUBMETRIC_ANTIVOTES ] = !!program.debug

const submetrics =
    [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.K_AS_COEFFICIENT ]: 0 as ParameterValue,
            [ Parameter.A_AS_BASE ]: 1.994 as ParameterValue,
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

saveLog(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}`, DebugTarget.SUBMETRIC_ANTIVOTES)
