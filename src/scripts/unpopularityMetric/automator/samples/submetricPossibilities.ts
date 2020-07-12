import { computeParameterValues } from "./parameterValues"
import { DynamicParameterConfig, DynamicParameterValue } from "./types"
import { Parameter, Submetric, SubmetricConfig } from "../../types"
import { Combination } from "../../../../utilities/types"

const computeSubmetricPossibilities = (submetricConfig: SubmetricConfig = {}): Combination<Submetric> => {
    let submetricPossibilities: Combination<Submetric> = [{}] as Combination<Submetric>

    const submetricConfigEntries = Object.entries(submetricConfig) as Array<[Parameter, DynamicParameterConfig]>

    submetricConfigEntries.forEach(([parameter, parameterConfig]: [Parameter, DynamicParameterConfig]) => {
        let extendedSubmetricPossibilities: Combination<Submetric> = [] as unknown as Combination<Submetric>

        let values: DynamicParameterValue[]
        if (typeof parameterConfig !== "object") {
            values = [parameterConfig]
        } else {
            values = computeParameterValues(parameterConfig)
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
