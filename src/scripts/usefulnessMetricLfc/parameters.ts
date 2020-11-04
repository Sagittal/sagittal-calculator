import {Combination, Ed, Window} from "../../general"
import {computePossibilities} from "../possibilities"
import {DynamicParameterScope, Parameter} from "../types"
import {UsefulnessParameterId, UsefulnessParameterSet} from "./types"

// Const SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9 = 0.00195 as Parameter
//
// Const EXPERIMENTAL_USEFULNESS_PARAMETER_SCOPES = [
//     {
//         [UsefulnessParameterId.A]: 1 as Parameter,
//         [UsefulnessParameterId.B]: 1.37 as Parameter,
//         [UsefulnessParameterId.C]: 1 as Parameter,
//         [UsefulnessParameterId.SE]: 1 as Parameter, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         [UsefulnessParameterId.TE]: 0.00069053396 as Parameter, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         [UsefulnessParameterId.SP]: 1/12 as Parameter,
//         [UsefulnessParameterId.TP]: 1 as Parameter,
//     },
// ]
//
// Const DUMMY_PARAMETER_SETS = [{}] as Combination<UsefulnessParameterSet>

const USEFULNESS_SEARCH_ED = 11 as Ed<Parameter>

const USEFULNESS_PARAMETER_SCOPES: Record<UsefulnessParameterId, DynamicParameterScope> = {
    [UsefulnessParameterId.A]: {
        center: 0.5 as Parameter,
        window: 1 as Window<Parameter>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.B]: {
        center: 2 as Parameter,
        window: 2 as Window<Parameter>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.C]: {
        center: 2 as Parameter,
        window: 2 as Window<Parameter>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.SE]: {
        center: 0.002 as Parameter,
        window: 0.002 as Window<Parameter>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.TE]: {
        center: 0.002 as Parameter,
        window: 0.002 as Window<Parameter>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.SP]: {
        center: 1 as Parameter,
        window: 2 as Window<Parameter>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.TP]: {
        center: 1 as Parameter,
        window: 2 as Window<Parameter>,
        ed: USEFULNESS_SEARCH_ED,
    },
}

const computeUsefulnessParameterSets = (
    usefulnessParameterIds: UsefulnessParameterId[],
): Combination<UsefulnessParameterSet> => {
    const scope = usefulnessParameterIds.reduce(
        (
            scope: Record<UsefulnessParameterId, DynamicParameterScope>,
            usefulnessParameterId: UsefulnessParameterId,
        ): Record<UsefulnessParameterId, DynamicParameterScope> => {
            return {
                ...scope,
                [usefulnessParameterId]: USEFULNESS_PARAMETER_SCOPES[usefulnessParameterId],
            }
        },
        {} as Record<UsefulnessParameterId, DynamicParameterScope>,
    )

    // Return DUMMY_PARAMETER_SETS

    return computePossibilities(scope) as Combination<UsefulnessParameterSet>
}

export {
    computeUsefulnessParameterSets,
}
