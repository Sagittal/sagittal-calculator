import { Count } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import * as bestMetric from "../../../../../../src/scripts/unpopularityMetric/bestMetric/bestMetric"
import {
    scopesForChunkCount,
    searchedsForChunkCount,
    solverStatus,
} from "../../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { searchPopulatedScopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/search/populatedScopesForChunkCount"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("searchPopulatedScopesForChunkCount", () => {
    const searchingChunkCount = 8 as Count<Chunk>
    const scope = [{ [ Parameter.MAX ]: true }] as Scope
    const otherScope = [{ [ Parameter.A_AS_COEFFICIENT ]: 2 }] as Scope

    beforeEach(() => {
        solverStatus.searchingChunkCount = searchingChunkCount
        searchedsForChunkCount[ searchingChunkCount ] = 155
        scopesForChunkCount[ searchingChunkCount ] = [otherScope, scope]
    })

    it("increments the count of scopes which have been searched", async () => {
        await searchPopulatedScopesForChunkCount()

        expect(searchedsForChunkCount[ searchingChunkCount ]).toBe(156)
    })

    it("removes the searched scope from the stack", async () => {
        await searchPopulatedScopesForChunkCount()

        expect(scopesForChunkCount[ searchingChunkCount ]).toEqual([otherScope])
    })

    it("does those things even if there is an error while searching the scope", async () => {
        spyOn(bestMetric, "searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect").and.throwError("something")

        await searchPopulatedScopesForChunkCount()

        expect(scopesForChunkCount[ searchingChunkCount ]).toEqual([otherScope])
        expect(searchedsForChunkCount[ searchingChunkCount ]).toBe(156)
    })

    it("searches the scope it pops off the stack, and does not recurse, and enables timeout, and only takes winners", async () => {
        spyOn(bestMetric, "searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect").and.callThrough()

        await searchPopulatedScopesForChunkCount()

        expect(bestMetric.searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect).toHaveBeenCalledWith(
            scope,
            { chunkCount: searchingChunkCount, recurse: false, timeoutEnabled: true, onlyWinners: true },
        )
    })
})
