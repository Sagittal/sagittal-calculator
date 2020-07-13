import { Count } from "../../../utilities/types"
import { SubmetricSampleConfig } from "../types"

interface Status {
    finishedPopulating: boolean,
    populatingChunkCount: Count<Chunk>,
    upperBoundChunkCount: Count<Chunk>,
    processingChunkCount: Count<Chunk>,
}

type SubmetricChunk = SubmetricSampleConfig
type ParameterChunk = SubmetricSampleConfig

type Chunk = SubmetricChunk | ParameterChunk

export {
    Status,
    ParameterChunk,
    SubmetricChunk,
    Chunk,
}
