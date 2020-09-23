import { Avg, Count } from "../../../general"
import { Sample, Scope, SubmetricScope } from "../bestMetric"
import { Parameter, Submetric } from "../sumOfSquares"

type Chunk<T extends Parameter | Submetric = Parameter | Submetric> = SubmetricScope & { _ChunkOfBrand: T }

interface SolverStatus {
    chunkCount: Count<Chunk>,
    finishedPopulating: boolean,
    populatedScopeCount: Count<Scope>,
    searchedScopeCount: Count<Scope>,
    averageSamplesPerScope: Avg<Count<Sample>>,
    sampleCount: Count<Sample>,
}

export {
    Chunk,
    SolverStatus,
}
