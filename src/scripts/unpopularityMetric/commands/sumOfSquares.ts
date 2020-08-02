import * as colors from "colors"
import { program } from "commander"
import { Combination } from "../../../general"
import { clearDebugLogFiles, debugSettings, DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { computeSumOfSquaresForSubmetrics, Parameter, ParameterValue, Submetric } from "../sumOfSquares"

program
    .option("-d, --debugTargets", "debug")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .parse(process.argv)

if (!program.color) {
    colors.disable()
}
debugTargets[ DebugTarget.RANKED_UNPOPULARITIES ] = !!program.debug
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

const submetrics =
    [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
            [ Parameter.A_AS_BASE ]: 1.994 as ParameterValue,
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
