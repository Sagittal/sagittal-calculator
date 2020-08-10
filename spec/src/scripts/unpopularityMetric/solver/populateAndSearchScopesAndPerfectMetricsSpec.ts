import { Count } from "../../../../../src/general"
import { Metric } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { bestMetrics, solverStatus } from "../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk, populateAndSearchScopesAndPerfectMetrics } from "../../../../../src/scripts/unpopularityMetric/solver"
import * as populate from "../../../../../src/scripts/unpopularityMetric/solver/populate/scopes"
import * as search from "../../../../../src/scripts/unpopularityMetric/solver/search/scopes"

describe("populateAndSearchScopesAndPerfectMetrics", () => {
    let originalJasmineTimeoutInterval: number
    beforeEach(() => {
        originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    })

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval
    })

    it("populates scopes",  () => {
        spyOn(populate, "populateScopes").and.callThrough()

        populateAndSearchScopesAndPerfectMetrics()

        expect(populate.populateScopes).toHaveBeenCalled()
    })

    it("searches scopes",  () => {
        spyOn(search, "searchScopes").and.callThrough()

        populateAndSearchScopesAndPerfectMetrics()

        expect(search.searchScopes).toHaveBeenCalled()
    })

    it("completes searching scopes before resolving",  () => {
        solverStatus.chunkCount = 1 as Count<Chunk>
        populateAndSearchScopesAndPerfectMetrics()

        expect(bestMetrics[ "{sum}" ]).toEqual({
            sumOfSquares: 0.014206086754420309,
            submetrics: [{ sum: true }],
        } as unknown as Metric)
    })
})
