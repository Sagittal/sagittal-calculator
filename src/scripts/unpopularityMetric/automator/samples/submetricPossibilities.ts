import { computeParameterValues } from "./parameterValues"
import { DynamicParameterSampleConfig, DynamicParameterValue, SubmetricPossibility } from "./types"
import { Parameter, SubmetricSampleConfig } from "../../types"
import { Combination } from "../../../../utilities/types"

const computeSubmetricPossibilities = (submetricSampleConfig: SubmetricSampleConfig = {}): Combination<SubmetricPossibility> => {
    let submetricPossibilities: Combination<SubmetricPossibility> = [ {} ] as Combination<SubmetricPossibility>

    const submetricSampleConfigEntries = Object.entries(submetricSampleConfig) as Array<[ Parameter, DynamicParameterSampleConfig ]>

    submetricSampleConfigEntries.forEach(([ parameter, parameterSampleConfig ]: [ Parameter, DynamicParameterSampleConfig ]) => {
        let extendedSubmetricPossibilities: Combination<SubmetricPossibility> = [] as unknown as Combination<SubmetricPossibility>

        let values: DynamicParameterValue[]
        if (typeof parameterSampleConfig !== "object") {
            values = [ parameterSampleConfig ]
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
