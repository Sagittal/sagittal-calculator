import { Combination, computeDistributions, Count, merge } from "../../../../general"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { Chunk, Scope, SubmetricScope } from "../types"
import { populateScopeForChunkCount } from "./scopeForChunkCount"
import { computeIsValidSubmetricScope } from "./valid"

const populateScopesForChunkCountAndSubmetricScopeCount = async (submetricScopeCount: Count<SubmetricScope>, chunkCombinations: Array<Combination<Chunk>>, pIndex: number, chunkCount: Count<Chunk>): Promise<void> => {
    if (debug.all || debug.solver) {
        if (pIndex % 100 === 0) {
            console.log(`populating scopes for chunk combination ${pIndex}/${chunkCombinations.length} (${100 * pIndex/chunkCombinations.length}%) (if the populated #s aren't going up it just means that they're all getting filtered out) ${debugSearchedAndPopulated()}`.cyan)
        }
    }

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
