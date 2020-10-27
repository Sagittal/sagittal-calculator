import {Combination, computeExtensionBase, ExtensionBaseType, isEmpty, isObject} from "../../../../general"
import {computeParameterValues} from "../../../parameterValues"
import {DynamicParameterScope, Parameter} from "../../../types"
import {PopularityParameterId} from "../../sumOfSquares"
import {SubmetricScope} from "../types"
import {SubmetricPossibility} from "./types"

const computeSubmetricPossibilities = (
    submetricScope: SubmetricScope = {} as SubmetricScope,
): Combination<SubmetricPossibility> => {
    let submetricPossibilities: Combination<SubmetricPossibility> =
        [computeExtensionBase(ExtensionBaseType.OBJECT)] as Combination<SubmetricPossibility>

    const submetricScopeEntries =
        Object.entries(submetricScope) as Array<[PopularityParameterId, DynamicParameterScope]>

    submetricScopeEntries.forEach(
        ([parameter, parameterScope]: [PopularityParameterId, DynamicParameterScope]): void => {
            const extendedSubmetricPossibilities: Combination<SubmetricPossibility> =
                [] as unknown[] as Combination<SubmetricPossibility>

            let values: Parameter[]
            if (!isObject(parameterScope)) {
                values = [parameterScope]
            } else {
                values = computeParameterValues(parameterScope)
            }
            if (isEmpty(values)) {
                return
            }

            submetricPossibilities.forEach((submetricPossibility: SubmetricPossibility): void => {
                values.forEach((value: Parameter): void => {
                    extendedSubmetricPossibilities.push({...submetricPossibility, [parameter]: value})
                })
            })

            submetricPossibilities = extendedSubmetricPossibilities
        },
    )

    return submetricPossibilities
}

export {
    computeSubmetricPossibilities,
}
