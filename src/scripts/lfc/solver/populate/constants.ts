import { Span } from "../../../../general"
import { computeDynamicParameterScope, ParameterScopes } from "../../bestMetric"
import { Parameter, ParameterValue, Submetric } from "../../sumOfSquares"
import { Chunk } from "../types"

// AKA: when included in the solver's generated scopes, what should they be scoped to
const NO_USELESS_INITIAL_PARAMETER_SCOPES: ParameterScopes = {
    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 0.875 as ParameterValue,
        span: 1.75 as Span<ParameterValue>,
    }),
    [ Parameter.K_AS_COEFFICIENT ]: computeDynamicParameterScope({
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
    }),
    [ Parameter.K_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 1.375 as ParameterValue,
        span: 2.25 as Span<ParameterValue>,
    }),
    [ Parameter.J_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 1.125 as ParameterValue,
        span: 1.25 as Span<ParameterValue>,
    }),
    // per forum discussion, lock it down http://forum.sagittal.org/viewtopic.php?p=2113#p2113
    [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
    [ Parameter.A_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 1.25 as ParameterValue,
        span: 2.5 as Span<ParameterValue>,
    }),
    [ Parameter.W ]: computeDynamicParameterScope({
        center: -0.25 as ParameterValue,
        span: 5.5 as Span<ParameterValue>,
    }),
    [ Parameter.B ]: computeDynamicParameterScope({
        center: -2.625 as ParameterValue,
        span: 2.75 as Span<ParameterValue>,
    }),
    [ Parameter.X ]: computeDynamicParameterScope({
        center: -0.375 as ParameterValue,
        span: 5.25 as Span<ParameterValue>,
    }),
    [ Parameter.U ]: computeDynamicParameterScope({
        center: -1.375 as ParameterValue,
        span: 5.25 as Span<ParameterValue>,
    }),
    [ Parameter.Y ]: computeDynamicParameterScope({
        center: 0.875 as ParameterValue,
        span: 0.75 as Span<ParameterValue>,
    }),
    [ Parameter.V ]: computeDynamicParameterScope({
        center: 0.875 as ParameterValue,
        span: 0.75 as Span<ParameterValue>,
    }),
    [ Parameter.SUM ]: true,
    [ Parameter.COUNT ]: true,
    [ Parameter.MAX ]: true,
    [ Parameter.WITHOUT_REPETITION ]: true,
}

const INITIAL_PARAMETER_SCOPES: ParameterScopes = {
    [ Parameter.WEIGHT_AS_COEFFICIENT ]: computeDynamicParameterScope({
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
    }),
    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.WEIGHT_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.K_AS_COEFFICIENT ]: computeDynamicParameterScope({
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
    }),
    [ Parameter.K_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
    [ Parameter.K_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.K_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.J_AS_COEFFICIENT ]: computeDynamicParameterScope({
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
    }),
    [ Parameter.J_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
    [ Parameter.J_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.J_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.A_AS_COEFFICIENT ]: computeDynamicParameterScope({
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
    }),
    [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
    [ Parameter.A_AS_POWER_EXPONENT ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.A_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.W ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.B ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.X ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.U ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.Y ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.V ]: computeDynamicParameterScope({
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
    }),
    [ Parameter.USE_NUMINATOR ]: true,
    [ Parameter.MODIFIED_COUNT ]: true,
    [ Parameter.USE_PRIME_INDEX ]: true,
    [ Parameter.SUM ]: true,
    [ Parameter.COUNT ]: true,
    [ Parameter.MAX ]: true,
    [ Parameter.WITHOUT_REPETITION ]: true,
}

const NO_USELESS_SUBMETRIC_CHUNKS: Array<Chunk<Submetric>> = [
    { // SOAPFAR
        [ Parameter.SUM ]: NO_USELESS_INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
    },
    { // SOAPF
        [ Parameter.SUM ]: NO_USELESS_INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        [ Parameter.WITHOUT_REPETITION ]: NO_USELESS_INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
    },
    { // GPF
        [ Parameter.WITHOUT_REPETITION ]: NO_USELESS_INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
        [ Parameter.MAX ]: NO_USELESS_INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
    },
    { // LOG BASE A OF N http://forum.sagittal.org/viewtopic.php?p=2076#p2076
        [ Parameter.SUM ]: NO_USELESS_INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        [ Parameter.A_AS_LOGARITHM_BASE ]: NO_USELESS_INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
    },
] as Array<Chunk<Submetric>>

const SUBMETRIC_CHUNKS: Array<Chunk<Submetric>> = [
    { // SOAPFAR
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
    },
    { // SOAPF
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
    },
    { // COAPFAR
        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
    },
    { // COAPF
        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
    },
    { // GPF
        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
        [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
    },
    { // LOG BASE A OF N http://forum.sagittal.org/viewtopic.php?p=2076#p2076
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
    },
] as Array<Chunk<Submetric>>

const SUBMETRIC_PARAMETERS = [Parameter.SUM, Parameter.COUNT, Parameter.MAX, Parameter.WITHOUT_REPETITION]

const NO_USELESS_PARAMETER_CHUNKS: Array<Chunk<Parameter>> = Object.entries(NO_USELESS_INITIAL_PARAMETER_SCOPES)
    .filter(([parameter]) => {
        return !SUBMETRIC_PARAMETERS.includes(parameter as Parameter)
    })
    .map(([parameter, initialParameterScope]) => {
        return {
            [ parameter ]: initialParameterScope,
        } as Chunk<Parameter>
    })

const PARAMETER_CHUNKS: Array<Chunk<Parameter>> = Object.entries(INITIAL_PARAMETER_SCOPES)
    .filter(([parameter]) => {
        return !SUBMETRIC_PARAMETERS.includes(parameter as Parameter)
    })
    .map(([parameter, initialParameterScope]) => {
        return {
            [ parameter ]: initialParameterScope,
        } as Chunk<Parameter>
    })

export {
    NO_USELESS_INITIAL_PARAMETER_SCOPES,
    INITIAL_PARAMETER_SCOPES,
    NO_USELESS_SUBMETRIC_CHUNKS,
    SUBMETRIC_CHUNKS,
    NO_USELESS_PARAMETER_CHUNKS,
    PARAMETER_CHUNKS,
}
