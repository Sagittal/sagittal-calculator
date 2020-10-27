import {Combination, computeExtensionBase, ExtensionBaseType, isEmpty, isObject} from "../../../../general"
import {computeParameterValues} from "../../../parameterValues"
import {DynamicParameterScope, ParameterValue} from "../../../types"
import {Parameter} from "../../sumOfSquares"
import {SubmetricScope} from "../types"
import {SubmetricPossibility} from "./types"

const computeSubmetricPossibilities = (
    submetricScope: SubmetricScope = {} as SubmetricScope,
): Combination<SubmetricPossibility> => {
    let submetricPossibilities: Combination<SubmetricPossibility> =
        [computeExtensionBase(ExtensionBaseType.OBJECT)] as Combination<SubmetricPossibility>

    const submetricScopeEntries = Object.entries(submetricScope) as Array<[Parameter, DynamicParameterScope]>

    submetricScopeEntries.forEach(([parameter, parameterScope]: [Parameter, DynamicParameterScope]): void => {
        const extendedSubmetricPossibilities: Combination<SubmetricPossibility> =
            [] as unknown[] as Combination<SubmetricPossibility>

        let values: ParameterValue[]
        if (!isObject(parameterScope)) {
            values = [parameterScope]
        } else {
            values = computeParameterValues(parameterScope)
        }
        if (isEmpty(values)) {
            return
        }

        submetricPossibilities.forEach((submetricPossibility: SubmetricPossibility): void => {
            values.forEach((value: ParameterValue): void => {
                extendedSubmetricPossibilities.push({...submetricPossibility, [parameter]: value})
            })
        })

        submetricPossibilities = extendedSubmetricPossibilities
    })

    return submetricPossibilities
}

export {
    computeSubmetricPossibilities,
}
