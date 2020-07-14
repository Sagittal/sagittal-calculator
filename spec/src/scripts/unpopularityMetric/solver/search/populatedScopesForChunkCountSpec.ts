import { debug } from "../../../../../../src/scripts/unpopularityMetric/debug"
import { Scope } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { scopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/globals"
import { searchPopulatedScopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/search/populatedScopesForChunkCount"

describe("searchPopulatedScopesForChunkCount", () => {
    it("runs without error", async () => {
        debug.all = false

        const scope: Scope = [] as unknown as Scope
        scopesForChunkCount[ 0 ] = [scope]

        await searchPopulatedScopesForChunkCount()
    })
})
