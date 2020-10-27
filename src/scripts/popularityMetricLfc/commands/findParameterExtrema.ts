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
    saveLog,
    stringify,
} from "../../../general"
import {ParameterValue} from "../../types"
import {Metric} from "../bestMetric"
import {Parameter, Submetric} from "../sumOfSquares"
import {applySharedPopularityMetricLfcCommandSetup, load} from "./shared"

applySharedPopularityMetricLfcCommandSetup()

const chunkCountResults = load("metrics" as Filename) as Record<Name<Metric>, Metric>

const parameterExtrema = {} as Record<string, Extrema<ParameterValue>>

Object.values(Parameter).forEach((parameter: Parameter): void => {
    if (parameter.includes("Base")) {
        return
    }

    let parameterMin: Maybe<Min<ParameterValue>> = undefined
    let parameterMax: Maybe<Max<ParameterValue>> = undefined

    const chunkCountResultsValues = Object.values(chunkCountResults) as Metric[]
    chunkCountResultsValues.forEach((chunkCountResult: Metric): void => {
        chunkCountResult.submetrics.forEach((submetric: Submetric): void => {
            Object.entries(submetric).forEach(([parameterName, parameterValue]: [string, unknown]): void => {
                if (parameterName === parameter && isNumber(parameterValue)) {
                    if (isUndefined(parameterMin) || parameterValue < parameterMin) {
                        parameterMin = parameterValue as Min<ParameterValue>
                    }
                    if (isUndefined(parameterMax) || parameterValue > parameterMax) {
                        parameterMax = parameterValue as Max<ParameterValue>
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
