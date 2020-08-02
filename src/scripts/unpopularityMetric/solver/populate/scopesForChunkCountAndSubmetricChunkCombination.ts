import { Combination, computeDistributions, doOnNextEventLoop, Index, merge } from "../../../../general"
import { Scope, SubmetricScope } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { presentSearchedAndPopulated } from "../present"
import { Chunk } from "../types"
import { populateScopeForChunkCount } from "./scopeForChunkCount"
import { ParameterChunk, PopulateScoepsForChunkCountAndSubmetricChunkCombinationOptions, SubmetricChunk } from "./types"

const populateScopesForChunkCountAndSubmetricChunkCombination = async (submetricChunkCombination: Combination<SubmetricChunk>, options: PopulateScoepsForChunkCountAndSubmetricChunkCombinationOptions): Promise<void> => {
    const {
        parameterChunkCombinations,
        parameterChunkCombinationIndex = 0,
        chunkCount,
        submetricChunkCombinationIndex,
        submetricChunkCombinationCount,
    } = options

    saveDebugMessage(`populating scopes for submetric chunk combination ${submetricChunkCombinationIndex + 1}/${submetricChunkCombinationCount} with parameter chunk combination ${parameterChunkCombinationIndex + 1}/${parameterChunkCombinations.length} (${100 * parameterChunkCombinationIndex / parameterChunkCombinations.length}%) ${presentSearchedAndPopulated()}`, DebugTarget.POPULATE)

    const parameterChunkCombination: Combination<Chunk> = parameterChunkCombinations[ parameterChunkCombinationIndex ]

    const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, submetricChunkCombination.length)

    parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
        const scope: Scope = submetricChunkCombination.map((submetricChunkBin, index) => {
            const parametersDistributedToThisBin = parameterChunkCombinationDistribution[ index ]

            return merge(submetricChunkBin, ...parametersDistributedToThisBin) as SubmetricScope
        }) as Scope

        populateScopeForChunkCount(scope, chunkCount)
    })

    if (parameterChunkCombinationIndex === parameterChunkCombinations.length - 1) {
        return
    }

    return doOnNextEventLoop(async () => {
        await populateScopesForChunkCountAndSubmetricChunkCombination(submetricChunkCombination, {
            parameterChunkCombinations,
            parameterChunkCombinationIndex: parameterChunkCombinationIndex + 1 as Index<Combination<ParameterChunk>>,
            chunkCount,
            submetricChunkCombinationIndex,
            submetricChunkCombinationCount,
        })
    })
}

export {
    populateScopesForChunkCountAndSubmetricChunkCombination,
}
