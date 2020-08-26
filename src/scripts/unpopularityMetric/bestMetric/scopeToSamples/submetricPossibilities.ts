import { Combination, computeExtensionBase, ExtensionBaseType } from "../../../../general"
import { Parameter, ParameterValue } from "../../sumOfSquares"
import { DynamicParameterScope, SubmetricScope } from "../types"
import { computeParameterValues } from "./parameterValues"
import { SubmetricPossibility } from "./types"

const computeSubmetricPossibilities = (submetricScope: SubmetricScope = {}): Combination<SubmetricPossibility> => {
    let submetricPossibilities: Combination<SubmetricPossibility> = [computeExtensionBase(ExtensionBaseType.OBJECT)] as Combination<SubmetricPossibility>

    const submetricScopeEntries = Object.entries(submetricScope) as Array<[Parameter, DynamicParameterScope]>

    submetricScopeEntries.forEach(([parameter, parameterScope]: [Parameter, DynamicParameterScope]) => {
        const extendedSubmetricPossibilities: Combination<SubmetricPossibility> = [] as unknown[] as Combination<SubmetricPossibility>

        let values: ParameterValue[]
        if (typeof parameterScope !== "object") {
            values = [parameterScope]
        } else {
            values = computeParameterValues(parameterScope)
        }
        if (values.length === 0) {
            return
        }

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
