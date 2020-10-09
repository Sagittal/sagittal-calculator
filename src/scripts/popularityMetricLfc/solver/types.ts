import { Count, Mean } from "../../../general"
import { Sample, Scope, SubmetricScope } from "../bestMetric"
import { Parameter, Submetric } from "../sumOfSquares"

type Chunk<T extends Parameter | Submetric = Parameter | Submetric> = SubmetricScope & { _ChunkOfBrand: T }

interface SolverStatus {
    chunkCount: Count<Chunk>,
    finishedPopulating: boolean,
    populatedScopeCount: Count<Scope>,
    searchedScopeCount: Count<Scope>,
    averageSamplesPerScope: Mean<{ of: Count<Sample> }>,
    sampleCount: Count<Sample>,
}

export {
    Chunk,
    SolverStatus,
}
