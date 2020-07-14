import { Count } from "../../../../../../src/general"
import { Combination } from "../../../../../../src/general/math"
import { debug } from "../../../../../../src/scripts/unpopularityMetric/debug"
import { populateScopesForSubmetricChunkCombination } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForSubmetricChunkCombination"
import { Chunk, ParameterChunk, SubmetricChunk } from "../../../../../../src/scripts/unpopularityMetric/solver/types"

describe("populateScopesForSubmetricChunkCombination", () => {
    it("runs without error", () => {
        const submetricChunkCombination: Combination<SubmetricChunk> = [] as unknown as Combination<SubmetricChunk>
        const parameterChunkCombinations: Array<Combination<ParameterChunk>> = [ [] as unknown as Combination<ParameterChunk> ]
        const pIndex: number = 0
        const chunkCount: Count<Chunk> = 0 as Count<Chunk>

        debug.all = false

        populateScopesForSubmetricChunkCombination(submetricChunkCombination, parameterChunkCombinations, pIndex, chunkCount)
    })
})
