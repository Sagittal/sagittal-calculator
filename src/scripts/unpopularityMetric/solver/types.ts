import { Combination, Count, EnumHash } from "../../../general"
import { DynamicParameterScope, Parameter, ParameterValue } from "../types"
import { ParameterChunk, SubmetricChunk } from "./populate/types"

interface Status {
    finishedPopulating: boolean,
    populatingChunkCount: Count<Chunk>,
    searchingChunkCount: Count<Chunk>,
    upperBoundChunkCount: Count<Chunk>,
}

type SubmetricScope = Partial<EnumHash<Parameter, ParameterValue | boolean | DynamicParameterScope>>

type Chunk = SubmetricChunk | ParameterChunk

type Scope = Combination<SubmetricScope>

export {
    Status,
    Chunk,
    SubmetricScope,
    Scope,
}
