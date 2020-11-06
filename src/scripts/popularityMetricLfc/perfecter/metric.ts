import {Combination, LogTarget, Parameter, saveLog, stringify} from "../../../general"
import {Metric, Scope, SubmetricScope} from "../bestMetric"
import {PopularityParameterId, Submetric} from "../sumOfSquares"
import {PARAMETER_DYNAMISMS} from "./constants"
import {computeDynamicParameterScopeForPerfecting} from "./dynamicParameterScope"
import {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
    recursiveSearchScopeAndMaybeUpdateBestMetricSync,
} from "./perfectMetric"
import {PerfectMetricOptions} from "./types"

const computeScopeFromMetric = (metric: Metric): Scope => {
    const spreadDynamicParameters = metric.spreadDynamicParameters
    const spreadDynamicParameterValues: Partial<Record<PopularityParameterId, Parameter>> = {}

    const scope: Scope = metric.submetrics.map((submetric: Submetric): SubmetricScope => {
        return Object.entries(submetric).reduce(
            (submetricScope: SubmetricScope, submetricEntry: [string, unknown]): SubmetricScope => {
                const [parameter, parameterValue] = submetricEntry as [PopularityParameterId, Parameter]
                if (spreadDynamicParameters && spreadDynamicParameters.includes(parameter)) {
                    spreadDynamicParameterValues[parameter] = parameterValue

                    return submetricScope
                }

                return {
                    ...submetricScope,
                    [parameter]: PARAMETER_DYNAMISMS[parameter] ?
                        // Okay so it looks like we can either
                        //  Make this parameter dynamism something we check for the spread parameters too
                        //  Or we could just not identify them as spread parameters in the first place
                        //  And leave it up to right here to handle it
                        //  I mean they are literally spread, even if they can't change,
                        //  Which might be good to acknowledge if we ever change the bases not to be locked down
                        //  Although then there's the problem of my guess backfill script misidentifying them
                        //  Maybe if you just change it to spreadDynamicParameters the problem is solved?
                        //  And we've gone with the latter.
                        computeDynamicParameterScopeForPerfecting(parameterValue) :
                        parameterValue,
                }
            },
            {} as SubmetricScope,
        )
    }) as Combination<SubmetricScope>

    const allBinsSubmetricScope: SubmetricScope = {} as SubmetricScope
    if (spreadDynamicParameters) {
        spreadDynamicParameters.forEach((spreadDynamicParameter: PopularityParameterId): void => {
            const spreadDynamicParameterValue = spreadDynamicParameterValues[spreadDynamicParameter] as Parameter
            allBinsSubmetricScope[spreadDynamicParameter] =
                computeDynamicParameterScopeForPerfecting(spreadDynamicParameterValue)
        })
    }
    scope.unshift(allBinsSubmetricScope)

    return scope
}

const perfectMetric = async (metric: Metric, options: PerfectMetricOptions): Promise<void> => {
    const scope = computeScopeFromMetric(metric)

    try {
        await recursiveSearchScopeAndMaybeUpdateBestMetric(scope, options)
    } catch (error) {
        saveLog(`error when perfecting scope ${stringify(scope)}: ${error}`, LogTarget.ERROR)
    }
}

const perfectMetricSync = (metric: Metric, options: PerfectMetricOptions): void => {
    const scope = computeScopeFromMetric(metric)

    try {
        recursiveSearchScopeAndMaybeUpdateBestMetricSync(scope, options)
    } catch (error) {
        saveLog(`error when perfecting scope ${stringify(scope)}: ${error}`, LogTarget.ERROR)
    }
}

export {
    perfectMetric,
    perfectMetricSync,
}
