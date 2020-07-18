import { Combination, computeDeepClone, computeDistributions, Count, merge } from "../../../../general"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { Chunk, Scope, SubmetricScope } from "../types"
import { populateScopeForChunkCount } from "./scopeForChunkCount"

const populateScopesForChunkCountAndSubmetricScopeCount = async (submetricChunkCombination: Combination<Chunk>, parameterChunkCombinations: Array<Combination<Chunk>>, pIndex: number, chunkCount: Count<Chunk>, sIndex: number, sTotal: number): Promise<void> => {
    if (debug.all || debug.solver) console.log(`populating scopes for submetric chunk combination ${sIndex + 1}/${sTotal} with parameter chunk combination ${pIndex + 1}/${parameterChunkCombinations.length} (${100 * pIndex/parameterChunkCombinations.length}%) ${debugSearchedAndPopulated()}`.cyan)

    const parameterChunkCombination: Combination<Chunk> = parameterChunkCombinations[ pIndex ]

    const baseScope: SubmetricScope[] = computeDeepClone(submetricChunkCombination)

    const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, baseScope.length)

    parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
        const scope: Scope = baseScope.map((baseSubmetricScope, index) =>
            merge(baseSubmetricScope, ...parameterChunkCombinationDistribution[ index ]) as SubmetricScope) as Scope

        populateScopeForChunkCount(scope, chunkCount)
    })

    if (pIndex === parameterChunkCombinations.length - 1) {
        return
    }

    return new Promise(async resolve => {
        setTimeout(async () => {
            await populateScopesForChunkCountAndSubmetricScopeCount(submetricChunkCombination, parameterChunkCombinations, pIndex + 1, chunkCount, sIndex, sTotal)
            resolve()
        }, 0)
    })
}

export {
    populateScopesForChunkCountAndSubmetricScopeCount,
}
