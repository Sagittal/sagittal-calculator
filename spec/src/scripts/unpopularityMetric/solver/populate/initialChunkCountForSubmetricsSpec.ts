import { Count } from "../../../../../../src/general"
import { unpopularityMetricSettings } from "../../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { computeInitialChunkCountForSubmetrics } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/initialChunkCountForSubmetrics"
import { Submetric } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeInitialChunkCountForSubmetrics", () => {
    describe("when all chunks are being used, including probably useless ones", () => {
        it("when <= the total count of possible submetric chunks (6), returns the passed-in chunk count", () => {
            const chunkCount = 3 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(actual).toBe(chunkCount as Count<Chunk<Submetric>>)
        })

        it("when > the total count of possible submetric chunks (6), caps out at that total possible count", () => {
            const chunkCount = 7 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            const expected = 6 as Count<Chunk<Submetric>>
            expect(actual).toBe(expected)
        })
    })

    describe("when no useless chunks are being used", () => {
        beforeEach(() => {
            unpopularityMetricSettings.noUseless = true
        })

        it("when <= the total count of possible submetric chunks (4), returns the passed-in chunk count", () => {
            const chunkCount = 3 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(actual).toBe(chunkCount as Count<Chunk<Submetric>>)
        })

        it("when > the total count of possible submetric chunks (4), caps out at that total possible count", () => {
            const chunkCount = 7 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            const expected = 4 as Count<Chunk<Submetric>>
            expect(actual).toBe(expected)
        })
    })
})
