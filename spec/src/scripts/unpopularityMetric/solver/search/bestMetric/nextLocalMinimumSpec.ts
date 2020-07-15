import { Count, Sum } from "../../../../../../../src/general"
import { Combination } from "../../../../../../../src/general/math"
import { Chunk, Scope } from "../../../../../../../src/scripts/unpopularityMetric/solver"
import { searchNextLocalMinimum } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/nextLocalMinimum"
import { LocalMinimum } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/types"
import { DynamicParameter } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples"
import { SamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/types"
import { Submetric } from "../../../../../../../src/scripts/unpopularityMetric/types"

describe("searchNextLocalMinimum", () => {
    it("runs without error", () => {
        const nextLocalMinimum: LocalMinimum = {
            sumOfSquares: 0 as Sum<"SquaredWeightedRankDifferences">,
            samplePoint: [] as unknown as SamplePoint,
            submetrics: [] as unknown as Combination<Submetric>,
        }
        const dynamicParameters: DynamicParameter[] = []
        const scope: Scope = [] as unknown as Scope
        const index = 0
        const progressMessage = ""
        const indentation = ""
        const nextDepth = 0
        const recurse = false
        const localMinimum = {
            sumOfSquares: 0 as Sum<"SquaredWeightedRankDifferences">,
            samplePoint: [] as unknown as SamplePoint,
            submetrics: [] as unknown as Combination<Submetric>,
        }
        const chunkCount = 0 as Count<Chunk>
        const nextLocalMinima = [] as LocalMinimum[]

        searchNextLocalMinimum(nextLocalMinimum, {
            dynamicParameters,
            scope,
            progressMessage,
            index,
            indentation,
            nextDepth,
            recurse,
            localMinimum,
            chunkCount,
            nextLocalMinima
        })
    })
})
