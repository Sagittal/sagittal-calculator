import { EnumHash, Span } from "../../../../general"
import { DynamicParameterScope, Parameter, ParameterValue } from "../../types"
import { computeResolution } from "../search"
import { ParameterChunk, SubmetricChunk } from "./types"

// AKA: if they are going to be included in the automatically generated scopes per chunk count, what should they be set to
const INITIAL_PARAMETER_SCOPES: Partial<EnumHash<Parameter, ParameterValue | boolean | DynamicParameterScope>> = {
    [ Parameter.WEIGHT_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.WEIGHT_AS_BASE ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.WEIGHT_AS_EXPONENT ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.K_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.K_AS_BASE ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.K_AS_EXPONENT ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.J_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.J_AS_BASE ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.J_AS_EXPONENT ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.A_AS_COEFFICIENT ]: {
        center: 0.5 as ParameterValue,
        span: 1 as Span<ParameterValue>,
        resolution: computeResolution(1 as Span<ParameterValue>),
    },
    [ Parameter.A_AS_BASE ]: 2 as ParameterValue, // per forum discussion, lock it down http://forum.sagittal.org/viewtopic.php?p=2113#p2113
    [ Parameter.A_AS_EXPONENT ]: {
        center: 2 as ParameterValue,
        span: 4 as Span<ParameterValue>,
        resolution: computeResolution(4 as Span<ParameterValue>),
    },
    [ Parameter.W ]: {
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
        resolution: computeResolution(6 as Span<ParameterValue>),
    },
    [ Parameter.X ]: {
        center: 0 as ParameterValue,
        span: 6 as Span<ParameterValue>,
        resolution: computeResolution(6 as Span<ParameterValue>),
    },
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

const SUBMETRIC_CHUNKS: SubmetricChunk[] = [
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
    { // LOG BASE A_AS_COEFFICIENT OF N
        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        [ Parameter.A_AS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_BASE ],
    },
] as SubmetricChunk[]

const PARAMETER_CHUNKS: ParameterChunk[] = [
    {
        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
    },
    {
        [ Parameter.K_AS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_BASE ],
    },
    {
        [ Parameter.K_AS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_EXPONENT ],
    },
    {
        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
    },
    {
        [ Parameter.J_AS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_BASE ],
    },
    {
        [ Parameter.J_AS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_EXPONENT ],
    },
    {
        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
    },
    {
        [ Parameter.A_AS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_BASE ],
    },
    {
        [ Parameter.A_AS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_EXPONENT ],
    },
    {
        [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
    },
    {
        [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
    },
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
] as ParameterChunk[]

export {
    INITIAL_PARAMETER_SCOPES,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
}
