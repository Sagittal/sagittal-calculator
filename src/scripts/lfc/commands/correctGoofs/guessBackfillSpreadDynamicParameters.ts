import { Filename, IO, LogTarget, Maybe, saveLog } from "../../../../general"
import { Metric } from "../../bestMetric"
import { LFC } from "../../constants"
import { PARAMETER_DYNAMISMS } from "../../perfecter"
import { Parameter, ParameterValue } from "../../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "../shared"

applySharedLfcCommandSetup()

const metricsMissingSpreadDynamicParameters = load("metrics" as Filename) as Record<string, Metric>

const guessedBackfilledSpreadDynamicParametersMetrics = Object.entries(metricsMissingSpreadDynamicParameters).reduce(
    (guessedBackfilledSpreadDynamicParametersMetrics: Record<string, Metric>, metricEntry: [string, Metric]) => {
        const [metricName, metric] = metricEntry
        const parameterValues: Partial<Record<Parameter, ParameterValue>> = {}

        let spreadDynamicParameters: Maybe<Parameter[]> = undefined

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

// TODO: this undefined, 4 shiznit should be extracted to an io helper
saveLog(JSON.stringify(guessedBackfilledSpreadDynamicParametersMetrics, undefined, 4) as IO, LogTarget.ALL, LFC)
