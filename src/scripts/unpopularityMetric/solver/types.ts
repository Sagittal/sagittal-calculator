import { Count } from "../../../general"
import { ParameterChunk, SubmetricChunk } from "./populate"

type Chunk = SubmetricChunk | ParameterChunk

interface SolverStatus {
    finishedPopulating: boolean,
    populatingChunkCount: Count<Chunk>,
    searchingChunkCount: Count<Chunk>,
    upperBoundChunkCount: Count<Chunk>,
}

export {
    Chunk,
    SolverStatus,
}
