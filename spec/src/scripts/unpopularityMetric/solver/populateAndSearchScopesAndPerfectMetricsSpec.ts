import { Count } from "../../../../../src/general"
import { Metric, MetricName } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { bestMetrics, solverStatus } from "../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk, populateAndSearchScopesAndPerfectMetrics } from "../../../../../src/scripts/unpopularityMetric/solver"
import * as populate from "../../../../../src/scripts/unpopularityMetric/solver/populate/scopes"
import * as search from "../../../../../src/scripts/unpopularityMetric/solver/search/scopes"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("populateAndSearchScopesAndPerfectMetrics", () => {
    let originalJasmineTimeoutInterval: number
    beforeEach(() => {
        originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    })

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval
    })

    it("populates scopes", async () => {
        spyOn(populate, "populateScopes").and.callFake(async () => {
        })
        spyOn(search, "searchScopes").and.callFake(async () => {
        })

        await populateAndSearchScopesAndPerfectMetrics()

        expect(populate.populateScopes).toHaveBeenCalled()
    })

    it("searches scopes", async () => {
        spyOn(populate, "populateScopes").and.callFake(async () => {
        })
        spyOn(search, "searchScopes").and.callFake(async () => {
        })

        await populateAndSearchScopesAndPerfectMetrics()

        expect(search.searchScopes).toHaveBeenCalled()
    })

    it("completes searching scopes before resolving", async () => {
        onlyRunInCi()

        solverStatus.chunkCount = 1 as Count<Chunk>
        await populateAndSearchScopesAndPerfectMetrics()

        expect(bestMetrics.get("{},{sum}" as MetricName)).toEqual({
            sumOfSquares: 0.014206086754420309,
            name: "{},{sum}",
            submetrics: [{ sum: true }],
        } as Metric)
    })
})
