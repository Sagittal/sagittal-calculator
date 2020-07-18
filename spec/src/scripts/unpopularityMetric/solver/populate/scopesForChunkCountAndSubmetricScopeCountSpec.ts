import { Count } from "../../../../../../src/general"
import { Combination } from "../../../../../../src/general/math"
import { debug } from "../../../../../../src/scripts/unpopularityMetric/debug"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { populateScopesForChunkCountAndSubmetricScopeCount } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCountAndSubmetricScopeCount"

describe("populateScopesForChunkCountAndSubmetricScopeCount", () => {
    it("runs without error", () => {
        const submetricChunkCombination: Combination<Chunk> = [] as unknown as Combination<Chunk>
        const chunkCombinations: Array<Combination<Chunk>> = [[] as unknown as Combination<Chunk>]
        const pIndex: number = 0
        const chunkCount: Count<Chunk> = 0 as Count<Chunk>
        const sIndex: number = 0
        const sTotal: number = 1

        debug.all = false

        populateScopesForChunkCountAndSubmetricScopeCount(submetricChunkCombination, chunkCombinations, pIndex, chunkCount, sIndex, sTotal)
    })
})
