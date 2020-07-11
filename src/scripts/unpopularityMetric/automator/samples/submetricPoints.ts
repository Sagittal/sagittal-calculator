import { computeParameterPoints } from "./parameterPoints"
import { ParameterPoint, SubmetricPoint } from "./types"
import { Parameter, ParameterConfig } from "../../types"

const computeSubmetricPoints = (submetricConfig = {}) => {
    let submetricPoints: SubmetricPoint[] = [{} as SubmetricPoint]

    const submetricConfigEntries = Object.entries(submetricConfig) as Array<[Parameter, ParameterConfig]>

    submetricConfigEntries.forEach(([parameter, parameterConfig]: [Parameter, ParameterConfig]) => {
        let extendedSubmetricPoints: SubmetricPoint[] = []

        let parameterPoints: ParameterPoint[]
        if (typeof parameterConfig !== "object") {
            parameterPoints = [parameterConfig]
        } else {
            parameterPoints = computeParameterPoints(parameterConfig)
        }
        if (parameterPoints.length === 0) return

        submetricPoints.forEach(submetricPoint => {
            parameterPoints.forEach(parameterPoint => {
                extendedSubmetricPoints.push({ ...submetricPoint, [ parameter ]: parameterPoint })
            })
        })

        submetricPoints = extendedSubmetricPoints
    })

    return submetricPoints
}

export {
    computeSubmetricPoints,
}
