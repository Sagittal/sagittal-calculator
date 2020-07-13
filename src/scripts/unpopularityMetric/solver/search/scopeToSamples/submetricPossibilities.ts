import { computeParameterValues } from "./parameterValues"
import { SubmetricPossibility } from "./types"
import { DynamicParameterScope, DynamicParameterValue, Parameter, SubmetricScope } from "../../../types"
import { Combination } from "../../../../../utilities/types"

const computeSubmetricPossibilities = (submetricScope: SubmetricScope = {}): Combination<SubmetricPossibility> => {
    let submetricPossibilities: Combination<SubmetricPossibility> = [ {} ] as Combination<SubmetricPossibility>

    const submetricScopeEntries = Object.entries(submetricScope) as Array<[ Parameter, DynamicParameterScope ]>

    submetricScopeEntries.forEach(([ parameter, parameterScope ]: [ Parameter, DynamicParameterScope ]) => {
        let extendedSubmetricPossibilities: Combination<SubmetricPossibility> = [] as unknown as Combination<SubmetricPossibility>

        let values: DynamicParameterValue[]
        if (typeof parameterScope !== "object") {
            values = [ parameterScope ]
        } else {
            values = computeParameterValues(parameterScope)
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
