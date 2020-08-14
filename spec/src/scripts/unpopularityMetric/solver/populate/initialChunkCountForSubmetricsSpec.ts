import { Count } from "../../../../../../src/general"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { SubmetricChunk } from "../../../../../../src/scripts/unpopularityMetric/solver/populate"
import { computeInitialChunkCountForSubmetrics } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/initialChunkCountForSubmetrics"
import { unpopularityMetricSettings } from "../../../../../../src/scripts/unpopularityMetric/globals"

describe("computeInitialChunkCountForSubmetrics", () => {
    describe("when all chunks are being used, including probably useless ones", () => {
        it("when less than or equal to the total count of possible submetric chunks (6), returns the passed-in chunk count", () => {
            const chunkCount = 3 as Count<Chunk>

            const result = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(result).toBe(chunkCount as Count<SubmetricChunk>)
        })

        it("when greater than the total count of possible submetric chunks (6), caps out at that total possible count", () => {
            const chunkCount = 7 as Count<Chunk>

            const result = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(result).toBe(6 as Count<SubmetricChunk>)
        })
    })

    describe("when no useless chunks are being used", () => {
        beforeEach(() => {
            unpopularityMetricSettings.noUseless = true
        })

        it("when less than or equal to the total count of possible submetric chunks (4), returns the passed-in chunk count", () => {
            const chunkCount = 3 as Count<Chunk>

            const result = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(result).toBe(chunkCount as Count<SubmetricChunk>)
        })

        it("when greater than the total count of possible submetric chunks (4), caps out at that total possible count", () => {
            const chunkCount = 7 as Count<Chunk>

            const result = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(result).toBe(4 as Count<SubmetricChunk>)
        })
    })
})
