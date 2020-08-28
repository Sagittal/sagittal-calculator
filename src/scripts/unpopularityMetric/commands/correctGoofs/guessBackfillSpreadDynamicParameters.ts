import { Maybe } from "../../../../general"
import { Metric } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { PARAMETER_DYNAMISMS } from "../../perfecter"
import { Parameter, ParameterValue } from "../../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup, load } from "../shared"

applySharedUnpopularityMetricCommandSetup()

const metricsMissingSpreadDynamicParameters = load("metrics") as Record<string, Metric>

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

saveDebugMessage(JSON.stringify(guessedBackfilledSpreadDynamicParametersMetrics, undefined, 4), DebugTarget.ALL)
