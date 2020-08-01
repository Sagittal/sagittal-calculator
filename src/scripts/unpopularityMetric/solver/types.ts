import { Count } from "../../../general"
import { ParameterChunk, SubmetricChunk } from "./populate"

type Chunk = SubmetricChunk | ParameterChunk

interface SolverStatus { // todo actually this does feel a bit more like a solver-specific thing
    finishedPopulating: boolean,
    populatingChunkCount: Count<Chunk>,
    searchingChunkCount: Count<Chunk>,
    upperBoundChunkCount: Count<Chunk>,
}

export {
    Chunk,
    SolverStatus,
}
