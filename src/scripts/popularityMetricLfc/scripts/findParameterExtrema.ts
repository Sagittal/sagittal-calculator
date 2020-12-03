import {
    Extrema,
    Filename,
    isNumber,
    isUndefined,
    LogTarget,
    Max,
    Maybe,
    Min,
    Name,
    Parameter,
    saveLog,
    stringify,
} from "../../../general"
import {Metric} from "../bestMetric"
import {PopularityParameterId, Submetric} from "../sumOfSquares"
import {applySharedPopularityMetricLfcScriptSetup, load} from "./shared"

applySharedPopularityMetricLfcScriptSetup()

const chunkCountResults = load("metrics" as Filename) as Record<Name<Metric>, Metric>

const parameterExtrema = {} as Record<string, Extrema<{of: Parameter}>>

Object.values(PopularityParameterId).forEach((parameter: PopularityParameterId): void => {
    if (parameter.includes("Base")) {
        return
    }

    let parameterMin: Maybe<Min<Parameter>> = undefined
    let parameterMax: Maybe<Max<Parameter>> = undefined

    const chunkCountResultsValues = Object.values(chunkCountResults) as Metric[]
    chunkCountResultsValues.forEach((chunkCountResult: Metric): void => {
        chunkCountResult.submetrics.forEach((submetric: Submetric): void => {
            Object.entries(submetric).forEach(([parameterName, parameterValue]: [string, unknown]): void => {
                if (parameterName === parameter && isNumber(parameterValue)) {
                    if (isUndefined(parameterMin) || parameterValue < parameterMin) {
                        parameterMin = parameterValue as Min<Parameter>
                    }
                    if (isUndefined(parameterMax) || parameterValue > parameterMax) {
                        parameterMax = parameterValue as Max<Parameter>
                    }
                }
            })
        })
    })

    if (!isUndefined(parameterMin) && !isUndefined(parameterMax)) {
        parameterExtrema[parameter] = [parameterMin, parameterMax]
    }
})

saveLog(stringify(parameterExtrema, {multiline: true}), LogTarget.FINAL)
