import { Count } from "../../../utilities/types"
import { SubmetricScope } from "../types"

interface Status {
    finishedPopulating: boolean,
    populatingChunkCount: Count<Chunk>,
    upperBoundChunkCount: Count<Chunk>,
    searchingChunkCount: Count<Chunk>,
}

type SubmetricChunk = SubmetricScope
type ParameterChunk = SubmetricScope

type Chunk = SubmetricChunk | ParameterChunk

export {
    Status,
    ParameterChunk,
    SubmetricChunk,
    Chunk,
}
