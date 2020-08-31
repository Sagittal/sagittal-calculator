import {
    Extrema,
    Filename,
    IO,
    isNumber,
    isUndefined,
    LogTarget,
    Max,
    Maybe,
    Min,
    saveLog,
    stringify,
} from "../../../general"
import { Metric } from "../bestMetric"
import { LFC_SCRIPT_GROUP } from "../constants"
import { Parameter, ParameterValue } from "../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "./shared"

applySharedLfcCommandSetup({ defaultLogTargets: [LogTarget.ALL] })

const chunkCountResults = load("metrics" as Filename) as Record<string, Metric>

const parameterExtrema = {} as Record<string, Extrema<ParameterValue, "Open">>

Object.values(Parameter).forEach(parameter => {
    if (parameter.includes("Base")) {
        return
    }

    let parameterMin: Maybe<Min<ParameterValue>> = undefined
    let parameterMax: Maybe<Max<ParameterValue>> = undefined

    Object.values(chunkCountResults).forEach(chunkCountResult => {
        chunkCountResult.submetrics.forEach(submetric => {
            Object.entries(submetric).forEach(([parameterName, parameterValue]) => {
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

    if (!isUndefined(parameterMin) || !isUndefined(parameterMax)) {
        parameterExtrema[ parameter ] = [parameterMin, parameterMax]
    }
})

saveLog(stringify(parameterExtrema, { multiline: true }) as IO, LogTarget.ALL, LFC_SCRIPT_GROUP)
