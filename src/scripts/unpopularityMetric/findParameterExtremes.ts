import { Metric } from "./bestMetric"
import { Parameter, ParameterValue } from "./sumOfSquares"
import { isNumber, isUndefined } from "../../general"

const chunkCountResults = {} as unknown as Record<string, Metric> // could paste things in from 1.txt, 2.txt, etc.

const parameterExtremes = {} as Record<string, [ParameterValue | undefined, ParameterValue | undefined]>

Object.values(Parameter).forEach(parameter => {
    let parameterMin: ParameterValue | undefined = undefined //= 9999999 as ParameterValue
    let parameterMax: ParameterValue | undefined = undefined //= -9999999 as ParameterValue

    Object.values(chunkCountResults).forEach(chunkCountResult => {
        chunkCountResult.submetrics.forEach(submetric => {
            Object.entries(submetric).forEach(([parameterName, parameterValue]) => {
                if (parameterName === parameter && isNumber(parameterValue)) {
                    if (isUndefined(parameterMin) || parameterValue < parameterMin) {
                        parameterMin = parameterValue
                    }
                    if (isUndefined(parameterMax) || parameterValue > parameterMax) {
                        parameterMax = parameterValue
                    }
                }
            })
        })
    })

    if (!isUndefined(parameterMin) || !isUndefined(parameterMax)) {
        parameterExtremes[ parameter ] = [parameterMin, parameterMax]
    }
})

console.log(JSON.stringify(parameterExtremes, null, 4))
