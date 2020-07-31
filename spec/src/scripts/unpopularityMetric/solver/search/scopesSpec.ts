import { Count, Resolution, Span } from "../../../../../../src/general"
import { Chunk, Scope, searchScopes, status } from "../../../../../../src/scripts/unpopularityMetric/solver"
import {
    scopesForChunkCount,
    searchedsForChunkCount,
} from "../../../../../../src/scripts/unpopularityMetric/solver/globals"
import { Parameter, ParameterValue } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("search scopes", () => {
    it("searches all remaining scopes at the current chunk count then moves on to searching scopes the next chunk count, and upon finishing those, given scopes are finished populated by then, then searching finishes too", async () => {
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

        status.finishedPopulating = false
        status.searchingChunkCount = 1 as Count<Chunk>
        status.populatingChunkCount = 2 as Count<Chunk>
        status.upperBoundChunkCount = 2 as Count<Chunk>
        scopesForChunkCount[ 1 ] = [scopeOne, scopeTwo]
        scopesForChunkCount[ 2 ] = [scopeThree]
        searchedsForChunkCount[ 1 ] = 0
        searchedsForChunkCount[ 2 ] = 0

        setTimeout(() => {
            status.finishedPopulating = true
        }, 100)

        await searchScopes()

        expect(status.searchingChunkCount).toBe(2 as Count<Chunk>)
        expect(scopesForChunkCount[ 1 ]).toEqual([])
        expect(scopesForChunkCount[ 2 ]).toEqual([])
        expect(searchedsForChunkCount[ 1 ]).toBe(2) // TODO: this is flakey?
        expect(searchedsForChunkCount[ 2 ]).toBe(1)
    })
})
