import { computeParameterValues } from "./parameterValues"
import { DynamicParameterConfig, DynamicParameterValue, SubmetricValue } from "./types"
import { Parameter } from "../../types"

const computeSubmetricPoints = (submetricConfig = {}) => {
    let submetricPoints: SubmetricValue[] = [{} as SubmetricValue]

    const submetricConfigEntries = Object.entries(submetricConfig) as Array<[Parameter, DynamicParameterConfig]>

    submetricConfigEntries.forEach(([parameter, parameterConfig]: [Parameter, DynamicParameterConfig]) => {
        let extendedSubmetricPoints: SubmetricValue[] = []

        let values: DynamicParameterValue[]
        if (typeof parameterConfig !== "object") {
            values = [parameterConfig]
        } else {
            values = computeParameterValues(parameterConfig)
        }
        if (values.length === 0) return

        submetricPoints.forEach(submetricPoint => {
            values.forEach(value => {
                extendedSubmetricPoints.push({ ...submetricPoint, [ parameter ]: value })
            })
        })

        submetricPoints = extendedSubmetricPoints
    })

    return submetricPoints
}

export {
    computeSubmetricPoints,
}
