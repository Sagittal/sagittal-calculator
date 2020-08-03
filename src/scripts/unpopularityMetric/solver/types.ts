import { Count } from "../../../general"
import { ParameterChunk, SubmetricChunk } from "./populate"
import { Scope } from "../bestMetric"

type Chunk = SubmetricChunk | ParameterChunk

interface SolverStatus {
    chunkCount: Count<Chunk>,
    finishedPopulating: boolean,
    populatedScopeCount: Count<Scope>,
    searchedScopeCount: Count<Scope>,
}

export {
    Chunk,
    SolverStatus,
}
