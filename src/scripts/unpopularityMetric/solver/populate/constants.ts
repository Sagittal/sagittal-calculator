import { Span } from "../../../../general"
import { Parameter, ParameterValue } from "../../types"
import { computeResolution } from "../search"
import { Chunk, SubmetricScope } from "../types"

// AKA: if they are going to be included in the automatically generated scopes per chunk count, what should they be set to
const INITIAL_PARAMETER_SCOPES: SubmetricScope = {
    [ Parameter.WEIGHT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.WEIGHT_IS_BASE ]: true,
    [ Parameter.WEIGHT_IS_EXPONENT ]: true,
    [ Parameter.K ]: {
        center: 1 as ParameterValue,
        span: 2 as Span<ParameterValue>,
        resolution: computeResolution(2 as Span<ParameterValue>),
    },
    [ Parameter.K_IS_BASE ]: true,
    [ Parameter.K_IS_EXPONENT ]: true,
    [ Parameter.J ]: {
        center: 1 as ParameterValue,
        span: 2 as Span<ParameterValue>,
        resolution: computeResolution(2 as Span<ParameterValue>),
    },
    [ Parameter.J_IS_BASE ]: true,
    [ Parameter.J_IS_EXPONENT ]: true,
    [ Parameter.A ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.A_IS_BASE ]: true,
    [ Parameter.A_IS_EXPONENT ]: true,
    [ Parameter.W ]: {
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
        resolution: computeResolution(6 as Span<ParameterValue>),
    },
    // [Parameter.X]: { center: 0 as DynamicParameterValue, span: 6 as Span<DynamicParameterValue>, resolution: computeResolution(6 as Span<DynamicParameterValue>) },
    [ Parameter.Y ]: {
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
        resolution: computeResolution(6 as Span<ParameterValue>),
    },
    // [Parameter.V]: { center: 0, span: 6 },
    // [Parameter.T]: { center: 0, span: 6 },
    [ Parameter.USE_NUMINATOR ]: true,
    [ Parameter.MODIFIED_COUNT ]: true,
    [ Parameter.SUM ]: true,
    [ Parameter.COUNT ]: true,
    [ Parameter.MAX ]: true,
    [ Parameter.WITHOUT_REPETITION ]: true,
    [ Parameter.USE_PRIME_INDEX ]: true,
}

const SUBMETRIC_CHUNKS: Chunk[] = [
    { // SOAPFAR
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
    },
    { // SOAPF
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
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
    { // LOG BASE A OF N
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
        [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
        [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
    },
] as Chunk[]

const PARAMETER_CHUNKS: Chunk[] = [
    {
        [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
    },
    {
        [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
        [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
    },
    {
        [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
        [ Parameter.K_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_EXPONENT ],
    },
    {
        [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
    },
    {
        [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
        [ Parameter.J_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_IS_BASE ],
    },
    {
        [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
        [ Parameter.J_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_IS_EXPONENT ],
    },
    {
        [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
    },
    {
        [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
        [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
    },
    {
        [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
        [ Parameter.A_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_EXPONENT ],
    },
    {
        [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
    },
    // { [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X]},
    {
        [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
    },
    // { [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V]},
    // { [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T]},
    {
        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
    },
    {
        [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
    },
    {
        [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
    },
] as Chunk[]

export {
    INITIAL_PARAMETER_SCOPES,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
}
