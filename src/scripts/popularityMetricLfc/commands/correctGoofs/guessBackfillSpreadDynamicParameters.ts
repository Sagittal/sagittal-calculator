import {Filename, LogTarget, Maybe, Name, saveLog, stringify} from "../../../../general"
import {Parameter} from "../../../types"
import {Metric} from "../../bestMetric"
import {PARAMETER_DYNAMISMS} from "../../perfecter"
import {PopularityParameterId, Submetric} from "../../sumOfSquares"
import {applySharedPopularityMetricLfcCommandSetup, load} from "../shared"

applySharedPopularityMetricLfcCommandSetup()

const metricsMissingSpreadDynamicParameters = load("metrics" as Filename) as Record<Name<Metric>, Metric>

const metricsMissingSpreadDynamicParametersEntries =
    Object.entries(metricsMissingSpreadDynamicParameters) as Array<[Name<Metric>, Metric]>
const guessedBackfilledSpreadDynamicParametersMetrics = metricsMissingSpreadDynamicParametersEntries.reduce(
    (
        guessedBackfilledSpreadDynamicParametersMetrics:
            Record<Name<Metric>, Metric>, metricEntry: [Name<Metric>, Metric],
    ): Record<Name<Metric>, Metric> => {
        const [metricName, metric] = metricEntry
        const parameterValues: Partial<Record<PopularityParameterId, Parameter>> = {}

        let spreadDynamicParameters: Maybe<PopularityParameterId[]> = undefined

        metric.submetrics.forEach((submetric: Submetric): void => {
            Object.entries(submetric).forEach((submetricEntry: [string, Maybe<Parameter | boolean>]): void => {
                const [parameter, parameterValue] = submetricEntry as [PopularityParameterId, Parameter]

                if (
                    parameterValues[parameter] === parameterValue &&
                    (spreadDynamicParameters ? !spreadDynamicParameters.includes(parameter) : true) &&
                    PARAMETER_DYNAMISMS[parameter]
                ) {
                    spreadDynamicParameters = spreadDynamicParameters || []
                    spreadDynamicParameters.push(parameter)
                }
                if (!parameterValues[parameter]) {
                    parameterValues[parameter] = parameterValue
                }
            })
        })

        return {
            ...guessedBackfilledSpreadDynamicParametersMetrics,
            [metricName]: spreadDynamicParameters ? {...metric, spreadDynamicParameters} : metric,
        }
    },
    {} as Record<Name<Metric>, Metric>,
)

saveLog(stringify(guessedBackfilledSpreadDynamicParametersMetrics, {multiline: true}), LogTarget.FINAL)
