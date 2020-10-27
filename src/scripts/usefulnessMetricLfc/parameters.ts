import {Ed, Window} from "../../general"
import {DynamicParameterScope, ParameterValue} from "../types"
import {computePossibilities} from "./possibilities"
import {UsefulnessParameterId, UsefulnessParameterSet} from "./types"

// Const SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9 = 0.00195 as ParameterValue
//
// Const EXPERIMENTAL_USEFULNESS_PARAMTER_SCOPES = [
//     {
//         A: 0.5 as ParameterValue,
//         B: 2 as ParameterValue,
//         C: 2 as ParameterValue,
//         SE: 0.001883679 as ParameterValue, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         TE: 0.001088841 as ParameterValue, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         SP: 0.5 as ParameterValue,
//         TP: 0.5 as ParameterValue,
//     },
// ]

const USEFULNESS_SEARCH_ED = 11 as Ed<ParameterValue> // Actually do 101

const USEFULNESS_PARAMETER_SCOPES: Record<UsefulnessParameterId, DynamicParameterScope> = {
    [UsefulnessParameterId.A]: {
        center: 0.5 as ParameterValue,
        window: 1 as Window<ParameterValue>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.B]: {
        center: 2 as ParameterValue,
        window: 2 as Window<ParameterValue>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.C]: {
        center: 2 as ParameterValue,
        window: 2 as Window<ParameterValue>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.SE]: {
        center: 0.002 as ParameterValue,
        window: 0.002 as Window<ParameterValue>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.TE]: {
        center: 0.002 as ParameterValue,
        window: 0.002 as Window<ParameterValue>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.SP]: {
        center: 1 as ParameterValue,
        window: 2 as Window<ParameterValue>,
        ed: USEFULNESS_SEARCH_ED,
    },
    [UsefulnessParameterId.TP]: {
        center: 1 as ParameterValue,
        window: 2 as Window<ParameterValue>,
        ed: USEFULNESS_SEARCH_ED,
    },
}

const computeUsefulnessParameterSets = (usefulnessParameterIds: UsefulnessParameterId[]): UsefulnessParameterSet[] => {
    const scope = usefulnessParameterIds.reduce(
        (
            scope: Record<UsefulnessParameterId, DynamicParameterScope>,
            usefulnessParameterId: UsefulnessParameterId,
        ): Record<UsefulnessParameterId, DynamicParameterScope> => {
            return {
                ...scope,
                // Todo: or it might be faster to like, pluck / subset the scopes const above?
                [usefulnessParameterId]: USEFULNESS_PARAMETER_SCOPES[usefulnessParameterId],
            }
        },
        {} as Record<UsefulnessParameterId, DynamicParameterScope>,
    )

    // Return EXPERIMENTAL_USEFULNESS_PARAMTER_SCOPES

    return computePossibilities(scope)
}

export {
    computeUsefulnessParameterSets,
}
