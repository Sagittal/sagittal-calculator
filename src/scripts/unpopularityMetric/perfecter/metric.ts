import { Combination, Span } from "../../../general"
import { computeResolution, MAXIMUM_UNIT, Metric, Scope, SubmetricScope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { PARAMETER_DYNAMISMS } from "./constants"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "./recursiveBestMetric"
import { PerfectMetricOptions } from "./types"

const perfectMetric = async (metric: Metric, options: PerfectMetricOptions) => {
    const scope: Scope = metric.submetrics.map((submetric: Submetric): SubmetricScope => {
        return Object.entries(submetric).reduce(
            (submetricScope: SubmetricScope, [parameter, parameterValue]) => {
                return {
                    ...submetricScope,
                    [ parameter ]: PARAMETER_DYNAMISMS[ parameter as Parameter ] ? {
                        center: parameterValue,
                        span: MAXIMUM_UNIT as number as Span<ParameterValue>,
                        resolution: computeResolution(MAXIMUM_UNIT as number as Span<ParameterValue>),
                    } : parameterValue,
                }
            },
            {},
        )
    }) as Combination<SubmetricScope>

    // todo shiiiiiiiiit I just realized we haven't handled a very important problem
    //   which is that we need to know which of the parameter values are tied to each other
    //   you know... were spread across all submetrics evenly, and thus they count for 1 chunk,
    //   but the value must not diverge!
    //   the perfecter doesn't understand that and will diverge them...
    //  ...perhaps it can be related to the unshifting of that {} below, though.
    //  and perhaps it should have something to do with whether it reports how many chunks it is
    //   well that might be nice to add that, but then I'd have to backfill it for everything in bestMetrics.ts
    //  ... ok but the problem at hand - I think I may need to rework the way metrics are defined
    //   so that it actually includes the all-bins ones

    // for the all-bins bin;
    //  at this point the all-bin parameters have been distributed already,
    //  but the below doesn't know that
    scope.unshift({})

    try {
        await recursiveSearchScopeAndMaybeUpdateBestMetric(scope, options)
    } catch (error) {
        saveDebugMessage(`error when perfecting scope ${JSON.stringify(scope)}: ${error}`, DebugTarget.ERRORS)
    }

    return metric
}

export {
    perfectMetric,
}
