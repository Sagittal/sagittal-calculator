import { Count } from "../../../../../../../src/general"
import { Chunk } from "../../../../../../../src/scripts/unpopularityMetric/solver"
import { computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/sumsOfSquares"
import { Sample } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/types"

describe("computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect", () => {
    it("runs without error", () => {
        const samples = [] as Sample[]
        const chunkCount = 0 as Count<Chunk>
        const indentation = "" as string

        computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples, chunkCount, indentation)
    })
})
