import {
    computeResolution,
    MAXIMUM_UNIT,
    Metric,
    Scope,
    searchScopeAndMaybeUpdateBestMetric,
    SubmetricScope,
} from "../../bestMetric"
import { ParameterValue, Submetric } from "../../sumOfSquares"
import { Combination, Span } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"

const perfectMetric = async (metric: Metric) => {
    const scope: Scope = metric.submetrics.map((submetric: Submetric): SubmetricScope => {
        return Object.entries(submetric).reduce(
            (submetricScope: SubmetricScope, [parameter, parameterValue]) => {
                return {
                    ...submetricScope,
                    [parameter]: {
                        center: parameterValue,
                        span: MAXIMUM_UNIT as number as Span<ParameterValue>,
                        resolution: computeResolution(MAXIMUM_UNIT as number as Span<ParameterValue>)
                    },
                }
            },
            {},
        )
    }) as Combination<SubmetricScope>
    scope.unshift({}) // for the all-bins bin... at this point the all-bin parameters have been distributed already, but the below doesn't know that

    try {
        await searchScopeAndMaybeUpdateBestMetric(scope, { recurse: true, onlyWinners: true, timeoutEnabled: true })
    } catch (e) {
        saveDebugMessage(`error when perfecting scope ${JSON.stringify(scope)}: ${e.message}`, DebugTarget.ERRORS)
    }

    return metric
}

export {
    perfectMetric,
}
