import {Combination, computeExtensionBase, ExtensionBaseType, isEmpty, isObject} from "../../general"
import {computeParameterValues} from "../parameterValues"
import {DynamicParameterScope, Parameter} from "../types"
import {UsefulnessParameterId} from "./types"

// Todo: very similar to possibilities in the popularityMetricLfc; attempt to dry it up and/or simplify

const computePossibilities = (
    scope: Record<UsefulnessParameterId, DynamicParameterScope>,
): Combination<Partial<Record<UsefulnessParameterId, Parameter>>> => {
    let possibilities: Combination<Partial<Record<UsefulnessParameterId, Parameter>>> =
        [computeExtensionBase(ExtensionBaseType.OBJECT)] as
            Combination<Partial<Record<UsefulnessParameterId, Parameter>>>

    const scopeEntries = Object.entries(scope) as Array<[UsefulnessParameterId, DynamicParameterScope]>

    scopeEntries.forEach(([parameter, parameterScope]: [UsefulnessParameterId, DynamicParameterScope]): void => {
        const extendedPossibilities: Combination<Partial<Record<UsefulnessParameterId, Parameter>>> =
            [] as unknown[] as Combination<Partial<Record<UsefulnessParameterId, Parameter>>>

        let values: Parameter[]
        if (!isObject(parameterScope)) {
            values = [parameterScope]
        } else {
            values = computeParameterValues(parameterScope)
        }
        if (isEmpty(values)) {
            return
        }

        possibilities.forEach((possibility: Partial<Record<UsefulnessParameterId, Parameter>>): void => {
            values.forEach((value: Parameter): void => {
                extendedPossibilities.push({...possibility, [parameter]: value})
            })
        })

        possibilities = extendedPossibilities
    })

    return possibilities
}

export {
    computePossibilities,
}
