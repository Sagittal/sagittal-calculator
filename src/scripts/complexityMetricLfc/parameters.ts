import {Combination, Ed, Window} from "../../general"
import {computePossibilities} from "../possibilities"
import {DynamicParameterScope, Parameter} from "../types"
import {ComplexityParameterId, ComplexityParameterSet} from "./types"

// Const SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9 = 0.00195 as Parameter
//
// Const EXPERIMENTAL_COMPLEXITY_PARAMETER_SCOPES = [
//     {
//         [ComplexityParameterId.A]: 1 as Parameter,
//         [ComplexityParameterId.B]: 1.37 as Parameter,
//         [ComplexityParameterId.C]: 1 as Parameter,
//         [ComplexityParameterId.SE]: 1 as Parameter, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         [ComplexityParameterId.TE]: 0.00069053396 as Parameter, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         [ComplexityParameterId.SP]: 1/12 as Parameter,
//         [ComplexityParameterId.TP]: 1 as Parameter,
//     },
// ]
//
// Const DUMMY_PARAMETER_SETS = [{}] as Combination<ComplexityParameterSet>

const COMPLEXITY_SEARCH_ED = 11 as Ed<Parameter>

const COMPLEXITY_PARAMETER_SCOPES: Record<ComplexityParameterId, DynamicParameterScope> = {
    [ComplexityParameterId.A]: {
        center: 0.5 as Parameter,
        window: 1 as Window<Parameter>,
        ed: COMPLEXITY_SEARCH_ED,
    },
    [ComplexityParameterId.B]: {
        center: 2 as Parameter,
        window: 2 as Window<Parameter>,
        ed: COMPLEXITY_SEARCH_ED,
    },
    [ComplexityParameterId.C]: {
        center: 2 as Parameter,
        window: 2 as Window<Parameter>,
        ed: COMPLEXITY_SEARCH_ED,
    },
    [ComplexityParameterId.SE]: {
        center: 0.002 as Parameter,
        window: 0.002 as Window<Parameter>,
        ed: COMPLEXITY_SEARCH_ED,
    },
    [ComplexityParameterId.TE]: {
        center: 0.002 as Parameter,
        window: 0.002 as Window<Parameter>,
        ed: COMPLEXITY_SEARCH_ED,
    },
    [ComplexityParameterId.SP]: {
        center: 1 as Parameter,
        window: 2 as Window<Parameter>,
        ed: COMPLEXITY_SEARCH_ED,
    },
    [ComplexityParameterId.TP]: {
        center: 1 as Parameter,
        window: 2 as Window<Parameter>,
        ed: COMPLEXITY_SEARCH_ED,
    },
}

const computeComplexityParameterSets = (
    complexityParameterIds: ComplexityParameterId[],
): Combination<ComplexityParameterSet> => {
    const scope = complexityParameterIds.reduce(
        (
            scope: Record<ComplexityParameterId, DynamicParameterScope>,
            complexityParameterId: ComplexityParameterId,
        ): Record<ComplexityParameterId, DynamicParameterScope> => {
            return {
                ...scope,
                [complexityParameterId]: COMPLEXITY_PARAMETER_SCOPES[complexityParameterId],
            }
        },
        {} as Record<ComplexityParameterId, DynamicParameterScope>,
    )

    // Return DUMMY_PARAMETER_SETS

    return computePossibilities(scope) as Combination<ComplexityParameterSet>
}

export {
    computeComplexityParameterSets,
}
