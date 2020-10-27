import {Ed, Window} from "../../general"
import {DynamicParameterScope, ParameterValue} from "../types"
import {computePossibilities} from "./possibilities"
import {UsefulnessParameterId, UsefulnessParameterSet} from "./types"

// const SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9 = 0.00195 as ParameterValue
//
// const EXPERIMENTAL_USEFULNESS_PARAMTER_SCOPES = [
//     {
//         a: 0.5 as ParameterValue,
//         b: 2 as ParameterValue,
//         c: 2 as ParameterValue,
//         sE: 0.001883679 as ParameterValue, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         tE: 0.001088841 as ParameterValue, // SE_OR_TE_WHEN_DAAS_OR_DATE_IS_9,
//         sP: 0.5 as ParameterValue,
//         tP: 0.5 as ParameterValue,
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

    // return EXPERIMENTAL_USEFULNESS_PARAMTER_SCOPES

    return computePossibilities(scope)
}

export {
    computeUsefulnessParameterSets,
}
