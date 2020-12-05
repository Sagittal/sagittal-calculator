import {Count, Mean} from "@sagittal/general"
import {Sample, Scope, SubmetricScope} from "../bestMetric"
import {PopularityParameterId, Submetric} from "../sumOfSquares"

type Chunk<T extends PopularityParameterId | Submetric = PopularityParameterId | Submetric> =
    SubmetricScope & {_ChunkOfBrand: T}

interface SolverStatus {
    chunkCount: Count<Chunk>,
    finishedPopulating: boolean,
    populatedScopeCount: Count<Scope>,
    searchedScopeCount: Count<Scope>,
    averageSamplesPerScope: Mean<{of: Count<Sample>}>,
    sampleCount: Count<Sample>,
}

export {
    Chunk,
    SolverStatus,
}
