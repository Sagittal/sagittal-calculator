import { computeParameterPoints } from "./parameterPoints"
import { ParameterPoint, SubmetricPoint } from "./types"
import { Parameter, ParameterConfig } from "../types"

const computeSubmetricPoints = (submetricConfigs = {}) => {
    let submetricPoints: SubmetricPoint[] = [{} as SubmetricPoint]; // todo: i should probably replace these semis with storing the object entries calls in variables

    (Object.entries(submetricConfigs) as Array<[Parameter, ParameterConfig]>).forEach(([parameter, parameterConfig]: [Parameter, ParameterConfig]) => {
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
