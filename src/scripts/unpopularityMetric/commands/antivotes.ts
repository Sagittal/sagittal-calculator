import * as colors from "colors"
import { program } from "commander"
import { Combination, presentRatio, Ratio } from "../../../general"
import { clearLogs, debug, debugSettings, saveLog } from "../debug"
import { computeAntivotes, Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { DebugTarget } from "../types"

program
    .option("-d, --debug", "debug")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .parse(process.argv)

if (!program.color) {
    colors.disable()
}
debug[ DebugTarget.SUBMETRIC_ANTIVOTES ] = !!program.debug
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearLogs()
}

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
