import { Combination, Count } from "../../../../utilities/types"
import { Scope, SubmetricScope } from "../../types"
import { computeDeepClone } from "../../../../utilities/deepClone"
import { computeDistributions } from "../../../../utilities/distributions"
import { merge } from "../../../../utilities/merge"
import { populateScopeForChunkCount } from "./scopeForChunkCount"
import { Chunk, ParameterChunk, SubmetricChunk } from "../types"

const populateScopesForSubmetricChunkCombination = async (submetricChunkCombination: Combination<SubmetricChunk>, parameterChunkCombinations: Combination<ParameterChunk>[], pIndex: number, chunkCount: Count<Chunk>, debug: boolean): Promise<void> => {
    const parameterChunkCombination: Combination<ParameterChunk> = parameterChunkCombinations[ pIndex ]

    const baseInitialScope: SubmetricScope[] = computeDeepClone(submetricChunkCombination)

    const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, baseInitialScope.length)
    if (debug) console.log(`from parameter chunk combination with ${parameterChunkCombination.length} count and submetric chunk combination with ${baseInitialScope.length} count we find ${parameterChunkCombinationDistributions.length} distributions, which is how many more scopes should be contributed here`.cyan)

    parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
        const initialScope: Scope = baseInitialScope.map((baseInitialSubmetricScope, index) => {
            return merge(baseInitialSubmetricScope, ...parameterChunkCombinationDistribution[ index ]) as SubmetricScope
        }) as Scope

        populateScopeForChunkCount(initialScope, chunkCount)
    })

    if (pIndex === parameterChunkCombinations.length - 1) return

    return new Promise(async resolve => {
        setTimeout(async () => {
            await populateScopesForSubmetricChunkCombination(submetricChunkCombination, parameterChunkCombinations, pIndex + 1, chunkCount, debug)
            resolve()
        }, 0)
    })
}

export {
    populateScopesForSubmetricChunkCombination,
}
