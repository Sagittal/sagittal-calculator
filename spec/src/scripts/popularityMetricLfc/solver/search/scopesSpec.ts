import { Count, Ed, Window } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { scopesToSearch, solverStatus } from "../../../../../../src/scripts/popularityMetricLfc/globals"
import { Chunk, searchScopes } from "../../../../../../src/scripts/popularityMetricLfc/solver"
import { Parameter, ParameterValue } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("search scopes", (): void => {
    it("searches all remaining scopes at the current chunk count and then, given scopes are finished populated by then, searching finishes too", async (): Promise<void> => {
        const scopeA = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: {
                    center: 2 as ParameterValue,
                    ed: 2 as Ed<ParameterValue>,
                    window: 0.1 as Window<ParameterValue>,
                },
            },
        ] as Scope
        const scopeB = [{ [ Parameter.MAX ]: true }] as Scope
        const scopeC = [{ [ Parameter.COUNT ]: true }] as Scope

        solverStatus.finishedPopulating = false
        solverStatus.chunkCount = 1 as Count<Chunk>
        scopesToSearch.push(scopeA)
        scopesToSearch.push(scopeB)
        scopesToSearch.push(scopeC)

        setTimeout((): void => {
            solverStatus.finishedPopulating = true
        }, 0)

        await searchScopes()

        expect(scopesToSearch).toEqual([])
        expect(solverStatus.searchedScopeCount).toBe(3 as Count<Scope>)
    })
})
