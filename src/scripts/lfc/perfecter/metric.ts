import { Combination, IO, LogTarget, saveLog, stringify } from "../../../general"
import { Metric, Scope, SubmetricScope } from "../bestMetric"
import { LFC_SCRIPT_GROUP } from "../constants"
import { Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { PARAMETER_DYNAMISMS } from "./constants"
import { computeDynamicParameterScopeForPerfecting } from "./dynamicParameterScope"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "./recursiveBestMetric"
import { PerfectMetricOptions } from "./types"

const perfectMetric = async (metric: Metric, options: PerfectMetricOptions) => {
    const spreadDynamicParameters = metric.spreadDynamicParameters
    const spreadDynamicParameterValues: Partial<Record<Parameter, ParameterValue>> = {}

    const scope: Scope = metric.submetrics.map((submetric: Submetric): SubmetricScope => {
        return Object.entries(submetric).reduce(
            (submetricScope: SubmetricScope, submetricEntry) => {
                const [parameter, parameterValue] = submetricEntry as [Parameter, ParameterValue]
                if (spreadDynamicParameters && spreadDynamicParameters.includes(parameter)) {
                    spreadDynamicParameterValues[ parameter ] = parameterValue

                    return submetricScope
                }

                return {
                    ...submetricScope,
                    [ parameter ]: PARAMETER_DYNAMISMS[ parameter ] ?
                        // okay so it looks like we can either
                        //  make this parameter dynamism something we check for the spread parameters too
                        //  or we could just not identify them as spread parameters in the first place
                        //  and leave it up to right here to handle it
                        //  I mean they are literally spread, even if they can't change,
                        //  which might be good to acknowledge if we ever change the bases not to be locked down
                        //  although then there's the problem of my guess backfiller misidentifying them
                        //  maybe if you just change it to spreadDynamicParameters the problem is solved?
                        //  and we've gone with the latter.
                        computeDynamicParameterScopeForPerfecting(parameterValue) :
                        parameterValue,
                }
            },
            {} as SubmetricScope,
        )
    }) as Combination<SubmetricScope>

    const allBinsSubmetricScope: SubmetricScope = {} as SubmetricScope
    if (spreadDynamicParameters) {
        spreadDynamicParameters.forEach(spreadDynamicParameter => {
            const spreadDynamicParameterValue = spreadDynamicParameterValues[ spreadDynamicParameter ] as ParameterValue
            allBinsSubmetricScope[ spreadDynamicParameter ] =
                computeDynamicParameterScopeForPerfecting(spreadDynamicParameterValue)
        })
    }
    scope.unshift(allBinsSubmetricScope)

    try {
        await recursiveSearchScopeAndMaybeUpdateBestMetric(scope, options)
    } catch (error) {
        saveLog(`error when perfecting scope ${stringify(scope)}: ${error}` as IO, LogTarget.ERRORS, LFC_SCRIPT_GROUP)
    }
}

export {
    perfectMetric,
}
