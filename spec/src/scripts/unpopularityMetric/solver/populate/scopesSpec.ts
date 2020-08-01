import { Count } from "../../../../../../src/general"
import { solverStatus } from "../../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk, populateScopes } from "../../../../../../src/scripts/unpopularityMetric/solver"
import * as scopesForChunkCount
    from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCount"

describe("populateScopes", () => {
    let originalJasmineTimeoutInterval: number
    beforeEach(() => {
        originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
    })

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval
    })

    it("populates scopes for the currently populating chunk count, then increments it and keeps going until hitting the upper bound chunk count", async () => {
        const upperBoundChunkCount = 3 as Count<Chunk>
        solverStatus.populatingChunkCount = 1 as Count<Chunk>
        solverStatus.upperBoundChunkCount = upperBoundChunkCount

        spyOn(scopesForChunkCount, "populateScopesForChunkCount").and.callThrough()

        await populateScopes()

        expect(solverStatus.populatingChunkCount).toBe(upperBoundChunkCount)
        expect(scopesForChunkCount.populateScopesForChunkCount).toHaveBeenCalledTimes(upperBoundChunkCount)

    })
})
