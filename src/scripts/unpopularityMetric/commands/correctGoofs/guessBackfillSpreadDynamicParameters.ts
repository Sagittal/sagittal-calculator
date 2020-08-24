import * as colors from "colors"
import { program } from "commander"
import { Metric } from "../../bestMetric"
import { clearDebugLogFiles, debugSettings, DebugTarget, saveDebugMessage, setDebugTargets } from "../../debug"
import { PARAMETER_DYNAMISMS } from "../../perfecter"
import { Parameter, ParameterValue } from "../../sumOfSquares"
import { load } from "../shared"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .parse(process.argv)

setDebugTargets(program.debugTargets || DebugTarget.ALL)
if (!program.color) {
    colors.disable()
}
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

const metricsMissingSpreadDynamicParameters = load("metrics") as unknown as Record<string, Metric>

const guessedBackfilledSpreadDynamicParametersMetrics = Object.entries(metricsMissingSpreadDynamicParameters).reduce(
    (guessedBackfilledSpreadDynamicParametersMetrics: Record<string, Metric>, [metricName, metric]: [string, Metric]) => {
        const parameterValues: Partial<Record<Parameter, ParameterValue>> = {}

        let spreadDynamicParameters: Parameter[] | undefined = undefined

        metric.submetrics.forEach(submetric => {
            Object.entries(submetric).forEach(submetricEntry => {
                const [parameter, parameterValue] = submetricEntry as [Parameter, ParameterValue]

                if (
                    parameterValues[ parameter ] === parameterValue &&
                    (spreadDynamicParameters ? !spreadDynamicParameters.includes(parameter) : true) &&
                    PARAMETER_DYNAMISMS[ parameter ]
                ) {
                    spreadDynamicParameters = spreadDynamicParameters || []
                    spreadDynamicParameters.push(parameter)
                }
                if (!parameterValues[ parameter ]) {
                    parameterValues[ parameter ] = parameterValue
                }
            })
        })

        return {
            ...guessedBackfilledSpreadDynamicParametersMetrics,
            [ metricName ]: spreadDynamicParameters ? { ...metric, spreadDynamicParameters } : metric,
        }
    },
    {} as Record<string, Metric>,
)

saveDebugMessage(JSON.stringify(guessedBackfilledSpreadDynamicParametersMetrics, null, 4), DebugTarget.ALL)
