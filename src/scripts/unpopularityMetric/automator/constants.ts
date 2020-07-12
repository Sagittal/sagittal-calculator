import { Parameter, SubmetricConfig, SubmetricType } from "../types"
import { Combinations } from "../../../utilities/types"
import { ParameterChunk, SubmetricChunk } from "./types"
import { DynamicParameterValue, SampleRange } from "./samples/types"
import { RESOLUTION } from "./samples/constants"

// AKA: if they are going to be included in the automatically generated initial configs, what should they be set to
const PARAMETER_INITIAL_CONFIGS: SubmetricConfig = {
    [ Parameter.WEIGHT ]: { center: 0.5 as DynamicParameterValue, range: 1 as SampleRange, resolution: RESOLUTION },
    [ Parameter.WEIGHT_IS_BASE ]: true,
    [ Parameter.WEIGHT_IS_EXPONENT ]: true,
    [ Parameter.K ]: { center: 1 as DynamicParameterValue, range: 2 as SampleRange, resolution: RESOLUTION },
    [ Parameter.K_IS_BASE ]: true,
    [ Parameter.K_IS_EXPONENT ]: true,
    [ Parameter.J ]: { center: 1 as DynamicParameterValue, range: 2 as SampleRange, resolution: RESOLUTION },
    [ Parameter.J_IS_BASE ]: true,
    [ Parameter.J_IS_EXPONENT ]: true,
    [ Parameter.A ]: { center: 2 as DynamicParameterValue, range: 4 as SampleRange, resolution: RESOLUTION },
    [ Parameter.A_IS_BASE ]: true,
    [ Parameter.A_IS_EXPONENT ]: true,
    [ Parameter.W ]: { center: 0 as DynamicParameterValue, range: 12 as SampleRange, resolution: RESOLUTION },
    // [Parameter.X]: { center: 0 as DynamicParameterValue, range: 6 as SampleRange, resolution: RESOLUTION },
    [ Parameter.Y ]: { center: 0 as DynamicParameterValue, range: 6 as SampleRange, resolution: RESOLUTION },
    // [Parameter.V]: { center: 0, range: 6, resolution: RESOLUTION },
    // [Parameter.T]: { center: 0, range: 6, resolution: RESOLUTION },
    [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
    [ Parameter.MODIFIED_COUNT ]: true,
}

const SUBMETRIC_CHUNKS: SubmetricChunk[] = Object.values(SubmetricType).map(submetricType => {
    return { [ Parameter.SUBMETRIC_TYPE ]: submetricType }
})

const PARAMETER_CHUNKS: ParameterChunk[] = [
    { [ Parameter.K ]: PARAMETER_INITIAL_CONFIGS[ Parameter.K ] },
    {
        [ Parameter.K ]: PARAMETER_INITIAL_CONFIGS[ Parameter.K ],
        [ Parameter.K_IS_BASE ]: PARAMETER_INITIAL_CONFIGS[ Parameter.K_IS_BASE ],
    },
    {
        [ Parameter.K ]: PARAMETER_INITIAL_CONFIGS[ Parameter.K ],
        [ Parameter.K_IS_EXPONENT ]: PARAMETER_INITIAL_CONFIGS[ Parameter.K_IS_EXPONENT ],
    },
    { [ Parameter.J ]: PARAMETER_INITIAL_CONFIGS[ Parameter.J ] },
    {
        [ Parameter.J ]: PARAMETER_INITIAL_CONFIGS[ Parameter.J ],
        [ Parameter.J_IS_BASE ]: PARAMETER_INITIAL_CONFIGS[ Parameter.J_IS_BASE ],
    },
    {
        [ Parameter.J ]: PARAMETER_INITIAL_CONFIGS[ Parameter.J ],
        [ Parameter.J_IS_EXPONENT ]: PARAMETER_INITIAL_CONFIGS[ Parameter.J_IS_EXPONENT ],
    },
    { [ Parameter.A ]: PARAMETER_INITIAL_CONFIGS[ Parameter.A ] },
    {
        [ Parameter.A ]: PARAMETER_INITIAL_CONFIGS[ Parameter.A ],
        [ Parameter.A_IS_BASE ]: PARAMETER_INITIAL_CONFIGS[ Parameter.A_IS_BASE ],
    },
    {
        [ Parameter.A ]: PARAMETER_INITIAL_CONFIGS[ Parameter.A ],
        [ Parameter.A_IS_EXPONENT ]: PARAMETER_INITIAL_CONFIGS[ Parameter.A_IS_EXPONENT ],
    },
    { [ Parameter.W ]: PARAMETER_INITIAL_CONFIGS[ Parameter.W ] },
    // { [Parameter.X]: PARAMETER_INITIAL_CONFIGS[Parameter.X]},
    { [ Parameter.Y ]: PARAMETER_INITIAL_CONFIGS[ Parameter.Y ] },
    // { [Parameter.V]: PARAMETER_INITIAL_CONFIGS[Parameter.V]},
    // { [Parameter.T]: PARAMETER_INITIAL_CONFIGS[Parameter.T]},
    { [ Parameter.MODIFIED_COUNT ]: PARAMETER_INITIAL_CONFIGS[ Parameter.MODIFIED_COUNT ] },
]

const SUBMETRIC_CHUNK_COMBINATIONS: Combinations<SubmetricChunk>[] = []

const PARAMETER_CHUNK_COMBINATIONS: Combinations<ParameterChunk>[] = []

export {
    SUBMETRIC_CHUNKS,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNK_COMBINATIONS,
    PARAMETER_CHUNK_COMBINATIONS,
}
