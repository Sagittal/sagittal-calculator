import { Combination, computeDistributions, doOnNextEventLoop, Index, merge } from "../../../../general"
import { saveLog } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { Chunk, Scope, SubmetricScope } from "../types"
import { populateScopeForChunkCount } from "./scopeForChunkCount"
import { ParameterChunk, PopulateScoepsForChunkCountAndSubmetricChunkCombinationOptions, SubmetricChunk } from "./types"
import { DebugTarget } from "../../types"

const populateScopesForChunkCountAndSubmetricChunkCombination = async (submetricChunkCombination: Combination<SubmetricChunk>, options: PopulateScoepsForChunkCountAndSubmetricChunkCombinationOptions): Promise<void> => {
    const {
        parameterChunkCombinations,
        parameterChunkCombinationIndex = 0,
        chunkCount,
        submetricChunkCombinationIndex,
        submetricChunkCombinationCount,
    } = options

    saveLog(`populating scopes for submetric chunk combination ${submetricChunkCombinationIndex + 1}/${submetricChunkCombinationCount} with parameter chunk combination ${parameterChunkCombinationIndex + 1}/${parameterChunkCombinations.length} (${100 * parameterChunkCombinationIndex / parameterChunkCombinations.length}%) ${debugSearchedAndPopulated()}`, DebugTarget.POPULATION)

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
