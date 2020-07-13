import { Combination, Count } from "../../../../utilities/types"
import { SampleConfig, SubmetricSampleConfig } from "../../types"
import { computeDeepClone } from "../../../../utilities/deepClone"
import { computeDistributions } from "../../../../utilities/distributions"
import { merge } from "../../../../utilities/merge"
import { populateSampleConfigForChunkCount } from "./sampleConfigForChunkCount"
import { Chunk, ParameterChunk, SubmetricChunk } from "../types"

const populateSampleConfigsForSubmetricChunkCombination = async (submetricChunkCombination: Combination<SubmetricChunk>, parameterChunkCombinations: Combination<ParameterChunk>[], pIndex: number, chunkCount: Count<Chunk>, debug: boolean): Promise<void> => {
    const parameterChunkCombination: Combination<ParameterChunk> = parameterChunkCombinations[ pIndex ]

    const baseInitialSampleConfig: SubmetricSampleConfig[] = computeDeepClone(submetricChunkCombination)

    const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, baseInitialSampleConfig.length)
    if (debug) console.log(`from parameter chunk combination with ${parameterChunkCombination.length} count and submetric chunk combination with ${baseInitialSampleConfig.length} count we find ${parameterChunkCombinationDistributions.length} distributions, which is how many more sample configs should be contributed here`.cyan)

    parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
        const initialSampleConfig: SampleConfig = baseInitialSampleConfig.map((baseInitialSubmetricSampleConfig, index) => {
            return merge(baseInitialSubmetricSampleConfig, ...parameterChunkCombinationDistribution[ index ]) as SubmetricSampleConfig
        }) as SampleConfig

        populateSampleConfigForChunkCount(initialSampleConfig, chunkCount)
    })

    if (pIndex === parameterChunkCombinations.length - 1) return

    return new Promise(async resolve => {
        setTimeout(async () => {
            await populateSampleConfigsForSubmetricChunkCombination(submetricChunkCombination, parameterChunkCombinations, pIndex + 1, chunkCount, debug)
            resolve()
        }, 0)
    })
}

export {
    populateSampleConfigsForSubmetricChunkCombination,
}
