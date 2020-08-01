import { Count } from "../../../../../src/general"
import { Metric } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { bestMetricsForChunkCount, solverStatus } from "../../../../../src/scripts/unpopularityMetric/globals"
import {
    Chunk,
    populateAndSearchScopes,
} from "../../../../../src/scripts/unpopularityMetric/solver"
import * as populate from "../../../../../src/scripts/unpopularityMetric/solver/populate/scopes"
import * as search from "../../../../../src/scripts/unpopularityMetric/solver/search/scopes"

describe("populateAndSearchScopes", () => {
    const chunkCount = 1 as Count<Chunk>
    beforeEach(() => {
        solverStatus.populatingChunkCount = chunkCount
        solverStatus.searchingChunkCount = chunkCount
        solverStatus.upperBoundChunkCount = chunkCount
        bestMetricsForChunkCount[ chunkCount ] = {}
    })

    it("populates scopes", async () => {
        spyOn(populate, "populateScopes").and.callThrough()

        await populateAndSearchScopes()

        expect(populate.populateScopes).toHaveBeenCalled()
    })

    it("searches scopes", async () => {
        spyOn(search, "searchScopes").and.callThrough()

        await populateAndSearchScopes()

        expect(search.searchScopes).toHaveBeenCalled()
    })

    it("it completes searching scopes before resolving", async () => {
        await populateAndSearchScopes()

        expect(bestMetricsForChunkCount[ chunkCount ][ "{sum}" ]).toEqual({
            sumOfSquares: 0.014206086754420309,
            submetrics: [{ sum: true }],
        } as unknown as Metric)
    })
})
