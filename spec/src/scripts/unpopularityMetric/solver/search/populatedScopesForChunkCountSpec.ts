import { Count } from "../../../../../../src/general"
import { Chunk, Scope, status } from "../../../../../../src/scripts/unpopularityMetric/solver"
import {
    scopesForChunkCount,
    searchedsForChunkCount,
} from "../../../../../../src/scripts/unpopularityMetric/solver/globals"
import * as bestMetric from "../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/bestMetric"
import { searchPopulatedScopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/search/populatedScopesForChunkCount"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("searchPopulatedScopesForChunkCount", () => {
    const searchingChunkCount = 8 as Count<Chunk>
    const scope = [{ [ Parameter.MAX ]: true }] as Scope
    const otherScope = [{ [ Parameter.A ]: 2 }] as Scope

    beforeEach(() => {
        status.searchingChunkCount = searchingChunkCount
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

    it("searches the scope it pops off the stack, and does not recurse, and enables timeout", async () => {
        spyOn(bestMetric, "searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect").and.callThrough()

        await searchPopulatedScopesForChunkCount()

        expect(bestMetric.searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect).toHaveBeenCalledWith(
            scope,
            { chunkCount: searchingChunkCount, recurse: false, timeoutEnabled: true },
        )
    })
})
