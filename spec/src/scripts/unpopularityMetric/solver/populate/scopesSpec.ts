import { Count } from "../../../../../../src/general"
import { Chunk, populateScopes, status } from "../../../../../../src/scripts/unpopularityMetric/solver"
import * as scopesForChunkCount
    from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCount"

describe("populateScopes", () => {
    it("populates scopes for the currently populating chunk count, then increments it and keeps going until hitting the upper bound chunk count", async () => {
        const upperBoundChunkCount = 3 as Count<Chunk>
        status.populatingChunkCount = 1 as Count<Chunk>
        status.upperBoundChunkCount = upperBoundChunkCount

        spyOn(scopesForChunkCount, "populateScopesForChunkCount").and.callThrough()

        await populateScopes()

        expect(status.populatingChunkCount).toBe(upperBoundChunkCount)
        expect(scopesForChunkCount.populateScopesForChunkCount).toHaveBeenCalledTimes(upperBoundChunkCount)
    })
})
