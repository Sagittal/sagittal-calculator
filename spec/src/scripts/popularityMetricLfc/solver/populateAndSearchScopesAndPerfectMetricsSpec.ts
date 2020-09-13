import { Count } from "../../../../../src/general"
import { Metric, MetricName } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { bestMetrics, solverStatus } from "../../../../../src/scripts/popularityMetricLfc/globals"
import { Chunk, populateAndSearchScopesAndPerfectMetrics } from "../../../../../src/scripts/popularityMetricLfc/solver"
import * as populate from "../../../../../src/scripts/popularityMetricLfc/solver/populate/scopes"
import * as search from "../../../../../src/scripts/popularityMetricLfc/solver/search/scopes"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("populateAndSearchScopesAndPerfectMetrics", (): void => {
    let originalJasmineTimeoutInterval: number
    beforeEach((): void => {
        originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    })

    afterEach((): void => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval
    })

    it("populates scopes", async (): Promise<void> => {
        spyOn(populate, "populateScopes").and.callFake(async (): Promise<void> => {
        })
        spyOn(search, "searchScopes").and.callFake(async (): Promise<void> => {
        })

        await populateAndSearchScopesAndPerfectMetrics()

        expect(populate.populateScopes).toHaveBeenCalled()
    })

    it("searches scopes", async (): Promise<void> => {
        spyOn(populate, "populateScopes").and.callFake(async (): Promise<void> => {
        })
        spyOn(search, "searchScopes").and.callFake(async (): Promise<void> => {
        })

        await populateAndSearchScopesAndPerfectMetrics()

        expect(search.searchScopes).toHaveBeenCalled()
    })

    it("completes searching scopes before resolving", async (): Promise<void> => {
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
