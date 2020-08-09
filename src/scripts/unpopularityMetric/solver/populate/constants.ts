import { EnumHash, Span } from "../../../../general"
import { computeResolution, DynamicParameterScope } from "../../bestMetric"
import { Parameter, ParameterValue } from "../../sumOfSquares"
import { ParameterChunk, SubmetricChunk } from "./types"

// AKA: when included in the solver's generated scopes, what should they be scoped to
const INITIAL_PARAMETER_SCOPES: Partial<EnumHash<Parameter, ParameterValue | boolean | DynamicParameterScope>> = {
    [ Parameter.WEIGHT_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: 2 as ParameterValue, // locking the rest of these down too, per: http://forum.sagittal.org/viewtopic.php?p=2120#p2120
    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: {
        center: 0.875 as ParameterValue,
        span: 1.75 as Span<ParameterValue>,
        resolution: computeResolution(1.75 as Span<ParameterValue>),
    },
    [ Parameter.WEIGHT_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.K_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.K_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
    [ Parameter.K_AS_POWER_EXPONENT ]: {
        center: 1.375 as ParameterValue,
        span: 2.25 as Span<ParameterValue>,
        resolution: computeResolution(2.25 as Span<ParameterValue>),
    },
    [ Parameter.K_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.J_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.J_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
    [ Parameter.J_AS_POWER_EXPONENT ]: {
        center: 1.125 as ParameterValue,
        span: 1.25 as Span<ParameterValue>,
        resolution: computeResolution(1.25 as Span<ParameterValue>),
    },
    [ Parameter.J_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.A_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue, // per forum discussion, lock it down http://forum.sagittal.org/viewtopic.php?p=2113#p2113
    [ Parameter.A_AS_POWER_EXPONENT ]: {
        center: 1.25 as ParameterValue,
        span: 2.5 as Span<ParameterValue>,
        resolution: computeResolution(2.5 as Span<ParameterValue>),
    },
    [ Parameter.A_AS_POWER_BASE ]: 2 as ParameterValue,
    [ Parameter.W ]: {
        center: -0.25 as ParameterValue,
        span: 5.5 as Span<ParameterValue>,
        resolution: computeResolution(5.5 as Span<ParameterValue>),
    },
    [ Parameter.B ]: {
        center: -2.625 as ParameterValue,
        span: 2.75 as Span<ParameterValue>,
        resolution: computeResolution(2.75 as Span<ParameterValue>),
    },
    [ Parameter.X ]: {
        center: -0.375 as ParameterValue,
        span: 5.25 as Span<ParameterValue>,
        resolution: computeResolution(5.25 as Span<ParameterValue>),
    },
    [ Parameter.U ]: {
        center: -1.375 as ParameterValue,
        span: 5.25 as Span<ParameterValue>,
        resolution: computeResolution(5.25 as Span<ParameterValue>),
    },
    [ Parameter.Y ]: {
        center: 0.875 as ParameterValue,
        span: 0.75 as Span<ParameterValue>,
        resolution: computeResolution(0.75 as Span<ParameterValue>),
    },
    [ Parameter.V ]: {
        center: 0.875 as ParameterValue,
        span: 0.75 as Span<ParameterValue>,
        resolution: computeResolution(0.75 as Span<ParameterValue>),
    },
    // [Parameter.S]: { center: 0, span: 6 },
    // [Parameter.T]: { center: 0, span: 6 },
    [ Parameter.USE_NUMINATOR ]: true,
    [ Parameter.MODIFIED_COUNT ]: true,
    [ Parameter.SUM ]: true,
    [ Parameter.COUNT ]: true,
    [ Parameter.MAX ]: true,
    [ Parameter.WITHOUT_REPETITION ]: true,
    [ Parameter.USE_PRIME_INDEX ]: true,
}

const SUBMETRIC_CHUNKS: SubmetricChunk[] = [
    { // SOAPFAR
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
    },
    { // SOAPF
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
    },
    // { // COAPFAR
    //     [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
    // },
    // { // COAPF
    //     [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
    //     [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
    // },
    { // GPF
        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
        [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
    },
    { // LOG BASE A_AS_COEFFICIENT OF N http://forum.sagittal.org/viewtopic.php?p=2076#p2076
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
    },
] as SubmetricChunk[]

const PARAMETER_CHUNKS: ParameterChunk[] = [
    {
        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
    },
    // {
    //     [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
    // },
    {
        [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
    },
    // {
    //     [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
    // },
    // {
    //     [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
    // },
    // {
    //     [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
    // },
    {
        [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
    },
    // {
    //     [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
    // },
    // {
    //     [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
    // },
    {
        [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
    },
    {
        [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
    },
    // {
    //     [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
    // },
    // {
    //     [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
    // },
    // {
    //     [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
    // },
    {
        [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
    },
    // {
    //     [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
    // },
    {
        [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
    },
    {
        [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
    },
    {
        [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
    },
    {
        [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
    },
    {
        [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
    },
    {
        [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
    },
    // // { [Parameter.S]: INITIAL_PARAMETER_SCOPES[Parameter.S]},
    // // { [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T]},
    // {
    //     [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
    // },
    // {
    //     [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
    // },
    // {
    //     [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
    // },
] as ParameterChunk[]

export {
    INITIAL_PARAMETER_SCOPES,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
}
