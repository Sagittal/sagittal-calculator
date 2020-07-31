import { Count } from "../../../../../../src/general"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { computeInitialChunkCountForSubmetrics } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/initialChunkCountForSubmetrics"
import { SubmetricChunk } from "../../../../../../src/scripts/unpopularityMetric/solver/populate"

describe("computeInitialChunkCountForSubmetrics", () => {
    it("when less than or equal to the total count of possible submetric chunks, returns the passed-in chunk count", () => {
        const chunkCount = 5 as Count<Chunk>

        const result = computeInitialChunkCountForSubmetrics(chunkCount)

        expect(result).toBe(chunkCount as Count<SubmetricChunk>)
    })

    it("when greater than the total count of possible submetric chunks, caps out at that total possible count", () => {
        const chunkCount = 7 as Count<Chunk>

        const result = computeInitialChunkCountForSubmetrics(chunkCount)

        expect(result).toBe(6 as Count<SubmetricChunk>)
    })
})
