import { Combination, computeDeepClone, computeDistributions, Count, merge } from "../../../../general"
import { debug } from "../../debug"
import { Chunk, ParameterChunk, Scope, SubmetricChunk, SubmetricScope } from "../types"
import { populateScopeForChunkCount } from "./scopeForChunkCount"

const populateScopesForSubmetricChunkCombination = async (submetricChunkCombination: Combination<SubmetricChunk>, parameterChunkCombinations: Array<Combination<ParameterChunk>>, pIndex: number, chunkCount: Count<Chunk>): Promise<void> => {
    const parameterChunkCombination: Combination<ParameterChunk> = parameterChunkCombinations[ pIndex ]

    const baseInitialScope: SubmetricScope[] = computeDeepClone(submetricChunkCombination)

    const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, baseInitialScope.length)
    if (debug.all) {
        console.log(`from parameter chunk combination with ${parameterChunkCombination.length} count and submetric chunk combination with ${baseInitialScope.length} count we find ${parameterChunkCombinationDistributions.length} distributions, which is how many more scopes should be contributed here`.cyan)
    }

    parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
        const initialScope: Scope = baseInitialScope.map((baseInitialSubmetricScope, index) =>
            merge(baseInitialSubmetricScope, ...parameterChunkCombinationDistribution[ index ]) as SubmetricScope) as Scope

        populateScopeForChunkCount(initialScope, chunkCount)
    })

    if (pIndex === parameterChunkCombinations.length - 1) {
        return
    }

    return new Promise(async resolve => {
        setTimeout(async () => {
            await populateScopesForSubmetricChunkCombination(submetricChunkCombination, parameterChunkCombinations, pIndex + 1, chunkCount)
            resolve()
        }, 0)
    })
}

export {
    populateScopesForSubmetricChunkCombination,
}
