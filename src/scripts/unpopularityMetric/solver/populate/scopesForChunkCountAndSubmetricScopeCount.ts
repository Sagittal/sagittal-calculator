import { Combination, computeDistributions, Count, merge } from "../../../../general"
import { Chunk, Scope, SubmetricScope } from "../types"
import { populateScopeForChunkCount } from "./scopeForChunkCount"
import { computeIsValidSubmetricScope } from "./valid"

const populateScopesForChunkCountAndSubmetricScopeCount = async (submetricScopeCount: Count<SubmetricScope>, chunkCombinations: Array<Combination<Chunk>>, pIndex: number, chunkCount: Count<Chunk>): Promise<void> => {
    const chunkCombination: Combination<Chunk> = chunkCombinations[ pIndex ]

    const chunkCombinationDistributions = computeDistributions(chunkCombination, submetricScopeCount)

    chunkCombinationDistributions.forEach(chunkCombinationDistribution => {
        const scope: Scope = chunkCombinationDistribution.map(chunkCombinationDistributionBin =>
            merge(...chunkCombinationDistributionBin),
        ) as Scope

        const distributionIsValid = scope.every(submetricScope => {
            return computeIsValidSubmetricScope(submetricScope)
        })
        if (!distributionIsValid) return

        populateScopeForChunkCount(scope, chunkCount)
    })

    if (pIndex === chunkCombinations.length - 1) {
        return
    }

    return new Promise(async resolve => {
        setTimeout(async () => {
            await populateScopesForChunkCountAndSubmetricScopeCount(submetricScopeCount, chunkCombinations, pIndex + 1, chunkCount)
            resolve()
        }, 0)
    })
}

export {
    populateScopesForChunkCountAndSubmetricScopeCount,
}
