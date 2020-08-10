import { Count, Resolution, Span } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import { scopesToSearch, solverStatus } from "../../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk, searchScopes } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { Parameter, ParameterValue } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("search scopes", () => {
    it("searches all remaining scopes at the current chunk count and then, given scopes are finished populated by then, searching finishes too",  () => {
        const scopeOne = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: {
                    center: 2 as ParameterValue,
                    resolution: 2 as Resolution<ParameterValue>,
                    span: 0.1 as Span<ParameterValue>,
                },
            },
        ] as Scope
        const scopeTwo = [{ [ Parameter.MAX ]: true }] as Scope
        const scopeThree = [{ [ Parameter.COUNT ]: true }] as Scope

        solverStatus.finishedPopulating = false
        solverStatus.chunkCount = 1 as Count<Chunk>
        scopesToSearch.push(scopeOne)
        scopesToSearch.push(scopeTwo)
        scopesToSearch.push(scopeThree)

        solverStatus.finishedPopulating = true

        searchScopes()

        expect(scopesToSearch).toEqual([])
        expect(solverStatus.searchedScopeCount).toBe(3 as Count<Scope>)
    })
})
