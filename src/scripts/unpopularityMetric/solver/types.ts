import { Combination, Count, EnumHash } from "../../../general"
import { DynamicParameterScope, Parameter, ParameterValue, SubmetricType } from "../types"

interface Status {
    finishedPopulating: boolean,
    populatingChunkCount: Count<Chunk>,
    searchingChunkCount: Count<Chunk>,
    upperBoundChunkCount: Count<Chunk>,
}

type SubmetricChunk = SubmetricScope
type ParameterChunk = SubmetricScope

type Chunk = SubmetricChunk | ParameterChunk

type SubmetricScope = Partial<EnumHash<Parameter, ParameterValue | boolean | SubmetricType | DynamicParameterScope>>

type Scope = Combination<SubmetricScope>

export {
    Status,
    ParameterChunk,
    SubmetricChunk,
    Chunk,
    SubmetricScope,
    Scope,
}
