import { computeParameterValues } from "./parameterValues"
import { DynamicParameterSampleConfig, DynamicParameterValue } from "./types"
import { Parameter, Submetric, SubmetricSampleConfig } from "../../types"
import { Combination } from "../../../../utilities/types"

const computeSubmetricPossibilities = (submetricSampleConfig: SubmetricSampleConfig = {}): Combination<Submetric> => {
    let submetricPossibilities: Combination<Submetric> = [{}] as Combination<Submetric>

    const submetricSampleConfigEntries = Object.entries(submetricSampleConfig) as Array<[Parameter, DynamicParameterSampleConfig]>

    submetricSampleConfigEntries.forEach(([parameter, parameterSampleConfig]: [Parameter, DynamicParameterSampleConfig]) => {
        let extendedSubmetricPossibilities: Combination<Submetric> = [] as unknown as Combination<Submetric>

        let values: DynamicParameterValue[]
        if (typeof parameterSampleConfig !== "object") {
            values = [parameterSampleConfig]
        } else {
            values = computeParameterValues(parameterSampleConfig)
        }
        if (values.length === 0) return

        submetricPossibilities.forEach(submetricPossibility => {
            values.forEach(value => {
                extendedSubmetricPossibilities.push({ ...submetricPossibility, [ parameter ]: value })
            })
        })

        submetricPossibilities = extendedSubmetricPossibilities
    })

    return submetricPossibilities
}

export {
    computeSubmetricPossibilities,
}
