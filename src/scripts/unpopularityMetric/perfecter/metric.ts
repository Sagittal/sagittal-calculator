import { Combination, Resolution, Span } from "../../../general"
import { MAXIMUM_UNIT, Metric, Scope, SubmetricScope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { PARAMETER_DYNAMISMS } from "./constants"
import { computeDynamicParameterScopeForPerfecting } from "./dynamicParameterScope"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "./recursiveBestMetric"
import { PerfectMetricOptions } from "./types"

const perfectMetric = async (metric: Metric, options: PerfectMetricOptions) => {
    const spreadParameters = metric.spreadParameters
    const spreadParameterValues: Partial<Record<Parameter, ParameterValue>> = {}

    const scope: Scope = metric.submetrics.map((submetric: Submetric): SubmetricScope => {
        return Object.entries(submetric).reduce(
            (submetricScope: SubmetricScope, submetricEntry) => {
                const [parameter, parameterValue] = submetricEntry as [Parameter, ParameterValue]
                if (spreadParameters && spreadParameters.includes(parameter)) {
                    spreadParameterValues[ parameter ] = parameterValue

                    return submetricScope
                }

                return {
                    ...submetricScope,
                    [ parameter ]: PARAMETER_DYNAMISMS[ parameter ] ?
                        computeDynamicParameterScopeForPerfecting(parameterValue) :
                        parameterValue,
                }
            },
            {},
        )
    }) as Combination<SubmetricScope>

    const allBinsSubmetricScope: SubmetricScope = {}
    if (spreadParameters) {
        spreadParameters.forEach(spreadParameter => {
            const spreadParameterValue = spreadParameterValues[ spreadParameter ] as ParameterValue
            allBinsSubmetricScope[ spreadParameter ] = computeDynamicParameterScopeForPerfecting(spreadParameterValue)
        })
    }
    scope.unshift(allBinsSubmetricScope)

    try {
        await recursiveSearchScopeAndMaybeUpdateBestMetric(scope, options)
    } catch (error) {
        saveDebugMessage(`error when perfecting scope ${JSON.stringify(scope)}: ${error}`, DebugTarget.ERRORS)
    }
}

export {
    perfectMetric,
}
