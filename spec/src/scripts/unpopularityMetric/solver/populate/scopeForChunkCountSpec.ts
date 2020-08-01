import { Count } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import { populatedsForChunkCount, scopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { populateScopeForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopeForChunkCount"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("populateScopeForChunkCount", () => {
    it("adds the scope to the stack and increments the count of the total ever populated", () => {
        const scope: Scope = [{ [ Parameter.SUM ]: true }] as Scope
        const chunkCount: Count<Chunk> = 0 as Count<Chunk>

        const alreadyPopulatedScope: Scope = [{ [ Parameter.COUNT ]: true }] as Scope
        scopesForChunkCount[ chunkCount ] = [alreadyPopulatedScope]
        populatedsForChunkCount[ chunkCount ] = 5

        populateScopeForChunkCount(scope, chunkCount)

        expect(scopesForChunkCount[ chunkCount ]).toEqual([alreadyPopulatedScope, scope])
        expect(populatedsForChunkCount[ chunkCount ]).toEqual(6)
    })

    it("works if its the first scope", () => {
        const scope: Scope = [] as unknown as Scope
        const chunkCount: Count<Chunk> = 0 as Count<Chunk>

        delete scopesForChunkCount[ chunkCount ]
        delete populatedsForChunkCount[ chunkCount ]

        populateScopeForChunkCount(scope, chunkCount)

        expect(scopesForChunkCount[ chunkCount ]).toEqual([scope])
        expect(populatedsForChunkCount[ chunkCount ]).toEqual(1)
    })
})
