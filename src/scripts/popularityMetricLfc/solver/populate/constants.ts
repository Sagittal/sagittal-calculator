// tslint:disable max-line-length

import {Maybe, Parameter, ParameterScope, ParameterScopes, Window} from "../../../../general"
import {computeDynamicParameterScope} from "../../bestMetric"
import {PopularityParameterId, Submetric} from "../../sumOfSquares"
import {Chunk} from "../types"

// AKA: when included in the solver's generated scopes, what should they be scoped to
const NO_USELESS_INITIAL_PARAMETER_SCOPES: ParameterScopes = {
    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 0.875 as Parameter,
        window: 1.75 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.K_AS_COEFFICIENT]: computeDynamicParameterScope({
        center: 0.5 as Parameter,
        window: 1 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.K_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 1.375 as Parameter,
        window: 2.25 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.J_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 1.125 as Parameter,
        window: 1.25 as Window<{of: Parameter}>,
    }),
    // Per forum discussion, lock it down http://forum.sagittal.org/viewtopic.php?p=2113#p2113
    [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
    [PopularityParameterId.A_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 1.25 as Parameter,
        window: 2.5 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.W]: computeDynamicParameterScope({
        center: -0.25 as Parameter,
        window: 5.5 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.B]: computeDynamicParameterScope({
        center: -2.625 as Parameter,
        window: 2.75 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.X]: computeDynamicParameterScope({
        center: -0.375 as Parameter,
        window: 5.25 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.U]: computeDynamicParameterScope({
        center: -1.375 as Parameter,
        window: 5.25 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.Y]: computeDynamicParameterScope({
        center: 0.875 as Parameter,
        window: 0.75 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.V]: computeDynamicParameterScope({
        center: 0.875 as Parameter,
        window: 0.75 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.SUM]: true,
    [PopularityParameterId.COUNT]: true,
    [PopularityParameterId.MAX]: true,
    [PopularityParameterId.WITHOUT_REPETITION]: true,
}

const INITIAL_PARAMETER_SCOPES: ParameterScopes = {
    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: computeDynamicParameterScope({
        center: 0.5 as Parameter,
        window: 1 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: 2 as Parameter,
    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: 2 as Parameter,
    [PopularityParameterId.K_AS_COEFFICIENT]: computeDynamicParameterScope({
        center: 0.5 as Parameter,
        window: 1 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.K_AS_LOGARITHM_BASE]: 2 as Parameter,
    [PopularityParameterId.K_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.K_AS_POWER_BASE]: 2 as Parameter,
    [PopularityParameterId.J_AS_COEFFICIENT]: computeDynamicParameterScope({
        center: 0.5 as Parameter,
        window: 1 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.J_AS_LOGARITHM_BASE]: 2 as Parameter,
    [PopularityParameterId.J_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.J_AS_POWER_BASE]: 2 as Parameter,
    [PopularityParameterId.A_AS_COEFFICIENT]: computeDynamicParameterScope({
        center: 0.5 as Parameter,
        window: 1 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
    [PopularityParameterId.A_AS_POWER_EXPONENT]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.A_AS_POWER_BASE]: 2 as Parameter,
    [PopularityParameterId.W]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.B]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.X]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.U]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.Y]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.V]: computeDynamicParameterScope({
        center: 0 as Parameter,
        window: 6 as Window<{of: Parameter}>,
    }),
    [PopularityParameterId.USE_NUMINATOR]: true,
    [PopularityParameterId.MODIFIED_COUNT]: true,
    [PopularityParameterId.USE_PRIME_INDEX]: true,
    [PopularityParameterId.SUM]: true,
    [PopularityParameterId.COUNT]: true,
    [PopularityParameterId.MAX]: true,
    [PopularityParameterId.WITHOUT_REPETITION]: true,
}

const NO_USELESS_SUBMETRIC_CHUNKS: Array<Chunk<Submetric>> = [
    { // SOAPFAR
        [PopularityParameterId.SUM]: NO_USELESS_INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
    },
    { // SOAPF
        [PopularityParameterId.SUM]: NO_USELESS_INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
        [PopularityParameterId.WITHOUT_REPETITION]: NO_USELESS_INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
    },
    { // GPF
        [PopularityParameterId.WITHOUT_REPETITION]: NO_USELESS_INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
        [PopularityParameterId.MAX]: NO_USELESS_INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
    },
    { // LOG BASE A OF N http://forum.sagittal.org/viewtopic.php?p=2076#p2076
        [PopularityParameterId.SUM]: NO_USELESS_INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
        [PopularityParameterId.A_AS_LOGARITHM_BASE]: NO_USELESS_INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
    },
] as Array<Chunk<Submetric>>

const SUBMETRIC_CHUNKS: Array<Chunk<Submetric>> = [
    { // SOAPFAR
        [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
    },
    { // SOAPF
        [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
        [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
    },
    { // COAPFAR
        [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
    },
    { // COAPF
        [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
        [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
    },
    { // GPF
        [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
        [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
    },
    { // LOG BASE A OF N http://forum.sagittal.org/viewtopic.php?p=2076#p2076
        [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
        [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
    },
] as Array<Chunk<Submetric>>

const SUBMETRIC_PARAMETERS = [PopularityParameterId.SUM, PopularityParameterId.COUNT, PopularityParameterId.MAX, PopularityParameterId.WITHOUT_REPETITION]

const NO_USELESS_PARAMETER_CHUNKS: Array<Chunk<PopularityParameterId>> = Object.entries(NO_USELESS_INITIAL_PARAMETER_SCOPES)
    .filter(([parameter]: [string, Maybe<ParameterScope>]): boolean => {
        return !SUBMETRIC_PARAMETERS.includes(parameter as PopularityParameterId)
    })
    .map(([parameter, initialParameterScope]: [string, Maybe<ParameterScope>]): Chunk<PopularityParameterId> => {
        return {
            [parameter]: initialParameterScope,
        } as Chunk<PopularityParameterId>
    })

const PARAMETER_CHUNKS: Array<Chunk<PopularityParameterId>> = Object.entries(INITIAL_PARAMETER_SCOPES)
    .filter(([parameter]: [string, Maybe<ParameterScope>]): boolean => {
        return !SUBMETRIC_PARAMETERS.includes(parameter as PopularityParameterId)
    })
    .map(([parameter, initialParameterScope]: [string, Maybe<ParameterScope>]): Chunk<PopularityParameterId> => {
        return {
            [parameter]: initialParameterScope,
        } as Chunk<PopularityParameterId>
    })

const ALL_BINS_SUBMETRIC_SCOPE: Chunk<Submetric> = {} as Chunk<Submetric>

export {
    NO_USELESS_INITIAL_PARAMETER_SCOPES,
    INITIAL_PARAMETER_SCOPES,
    NO_USELESS_SUBMETRIC_CHUNKS,
    SUBMETRIC_CHUNKS,
    NO_USELESS_PARAMETER_CHUNKS,
    PARAMETER_CHUNKS,
    ALL_BINS_SUBMETRIC_SCOPE,
}
