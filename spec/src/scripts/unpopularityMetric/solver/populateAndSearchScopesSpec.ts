import { Metric } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { bestMetrics, solverStatus } from "../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk, populateAndSearchScopes } from "../../../../../src/scripts/unpopularityMetric/solver"
import * as populate from "../../../../../src/scripts/unpopularityMetric/solver/populate/scopes"
import * as search from "../../../../../src/scripts/unpopularityMetric/solver/search/scopes"
import { Count } from "../../../../../src/general"

describe("populateAndSearchScopes", () => {
    let originalJasmineTimeoutInterval: number
    beforeEach(() => {
        originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    })

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval
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
        solverStatus.chunkCount = 1 as Count<Chunk>
        await populateAndSearchScopes()

        expect(bestMetrics[ "{sum}" ]).toEqual({
            sumOfSquares: 0.014206086754420309,
            submetrics: [{ sum: true }],
        } as unknown as Metric)
    })
})
