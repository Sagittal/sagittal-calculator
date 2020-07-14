import { Count } from "../../../../../../src/general"
import { Chunk, Scope } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { populateScopeForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopeForChunkCount"

describe("populateScopeForChunkCount", () => {
    it("runs without error", () => {
        const scope: Scope = [] as unknown as Scope
        const chunkCount: Count<Chunk> = 0 as Count<Chunk>

        populateScopeForChunkCount(scope, chunkCount)
    })
})
