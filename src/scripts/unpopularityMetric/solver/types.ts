import { Count, Unit } from "../../../general"
import { Scope } from "../bestMetric"
import { ParameterValue } from "../sumOfSquares"
import { ParameterChunk, SubmetricChunk } from "./populate"

type Chunk = SubmetricChunk | ParameterChunk

interface SolverStatus {
    chunkCount: Count<Chunk>,
    finishedPopulating: boolean,
    populatedScopeCount: Count<Scope>,
    searchedScopeCount: Count<Scope>,
    maximumUnit: Unit<ParameterValue>,
}

export {
    Chunk,
    SolverStatus,
}
