import { DynamicParameterValue, Parameter, SubmetricScope, SubmetricType } from "../../types"
import { SampleRange } from "../search/scopeToSamples/types"
import { ParameterChunk, SubmetricChunk } from "../types"
import { computeResolution } from "../search/scopeToSamples/resolution"

// AKA: if they are going to be included in the automatically generated scopes per chunk count, what should they be set to
const INITIAL_PARAMETER_SCOPES: SubmetricScope = {
    [ Parameter.WEIGHT ]: { center: 0.5 as DynamicParameterValue, range: 1 as SampleRange, resolution: computeResolution(1 as SampleRange) },
    [ Parameter.WEIGHT_IS_BASE ]: true,
    [ Parameter.WEIGHT_IS_EXPONENT ]: true,
    [ Parameter.K ]: { center: 1 as DynamicParameterValue, range: 2 as SampleRange, resolution: computeResolution(2 as SampleRange) },
    [ Parameter.K_IS_BASE ]: true,
    [ Parameter.K_IS_EXPONENT ]: true,
    [ Parameter.J ]: { center: 1 as DynamicParameterValue, range: 2 as SampleRange, resolution: computeResolution(2 as SampleRange) },
    [ Parameter.J_IS_BASE ]: true,
    [ Parameter.J_IS_EXPONENT ]: true,
    [ Parameter.A ]: { center: 2 as DynamicParameterValue, range: 4 as SampleRange, resolution: computeResolution(4 as SampleRange) },
    [ Parameter.A_IS_BASE ]: true,
    [ Parameter.A_IS_EXPONENT ]: true,
    [ Parameter.W ]: { center: 0 as DynamicParameterValue, range: 6 as SampleRange, resolution: computeResolution(6 as SampleRange) },
    // [Parameter.X]: { center: 0 as DynamicParameterValue, range: 6 as SampleRange, resolution: computeResolution(6 as SampleRange) },
    [ Parameter.Y ]: { center: 0 as DynamicParameterValue, range: 6 as SampleRange, resolution: computeResolution(6 as SampleRange) },
    // [Parameter.V]: { center: 0, range: 6 },
    // [Parameter.T]: { center: 0, range: 6 },
    [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
    [ Parameter.MODIFIED_COUNT ]: true,
}

const SUBMETRIC_CHUNKS: SubmetricChunk[] = Object.values(SubmetricType).map(submetricType => {
    return { [ Parameter.SUBMETRIC_TYPE ]: submetricType }
})

const PARAMETER_CHUNKS: ParameterChunk[] = [
    { [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ] },
    {
        [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
        [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
    },
    {
        [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
        [ Parameter.K_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_EXPONENT ],
    },
    { [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ] },
    {
        [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
        [ Parameter.J_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_IS_BASE ],
    },
    {
        [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
        [ Parameter.J_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_IS_EXPONENT ],
    },
    { [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ] },
    {
        [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
        [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
    },
    {
        [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
        [ Parameter.A_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_EXPONENT ],
    },
    { [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ] },
    // { [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X]},
    { [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ] },
    // { [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V]},
    // { [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T]},
    { [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ] },
]

export {
    SUBMETRIC_CHUNKS,
    PARAMETER_CHUNKS,
}
