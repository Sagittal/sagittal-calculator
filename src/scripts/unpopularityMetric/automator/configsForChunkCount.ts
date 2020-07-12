import { computeCombinations } from "../../../utilities/combinations"
import { computeDeepClone } from "../../../utilities/deepClone"
import { computeDistributions } from "../../../utilities/distributions"
import { merge } from "../../../utilities/merge"
import {
    PARAMETER_CHUNK_COMBINATIONS,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNK_COMBINATIONS,
    SUBMETRIC_CHUNKS,
} from "./constants"
import { Chunk, ParameterChunk, SubmetricChunk } from "./types"
import { SubmetricConfig } from "../types"
import { Combination, Combinations, Count } from "../../../utilities/types"

const computeConfigsForChunkCount = (chunkCount: Count<Chunk>, { debug = false } = {}): Combinations<SubmetricConfig> => {
    let configsForChunkCount: Combinations<SubmetricConfig> = [] as unknown as Combinations<SubmetricConfig>

    if (debug) console.log(`calculating the configs for this chunk count: phase 1 of ${chunkCount}`)
    const submetricChunkCombinations: Combinations<SubmetricChunk> = computeCombinations(SUBMETRIC_CHUNKS, chunkCount)
    submetricChunkCombinations.forEach((submetricChunkCombination: Combination<SubmetricChunk>) => {
        configsForChunkCount.push(submetricChunkCombination)
    })

    let chunkCountForSubmetrics: Count<Chunk> = chunkCount
    while (chunkCountForSubmetrics > 1) {
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<Chunk>
        const chunkCountForParameters: Count<ParameterChunk> = chunkCount - chunkCountForSubmetrics as Count<ParameterChunk>

        if (debug) console.log(`calculating the configs for this chunk count: phase ${chunkCountForParameters + 1} of ${chunkCount} (give lead time for combinations calculation)`)

        SUBMETRIC_CHUNK_COMBINATIONS[ chunkCountForSubmetrics ] = SUBMETRIC_CHUNK_COMBINATIONS[ chunkCountForSubmetrics ] || computeCombinations(SUBMETRIC_CHUNKS, chunkCountForSubmetrics, { withRepeatedElements: true })
        const submetricChunkCombinations: Combinations<SubmetricChunk> = SUBMETRIC_CHUNK_COMBINATIONS[ chunkCountForSubmetrics ]

        PARAMETER_CHUNK_COMBINATIONS[ chunkCountForParameters ] = PARAMETER_CHUNK_COMBINATIONS[ chunkCountForParameters ] || computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
        const parameterChunkCombinations: Combinations<ParameterChunk> = PARAMETER_CHUNK_COMBINATIONS[ chunkCountForParameters ]

        const pTotal = parameterChunkCombinations.length
        const total = submetricChunkCombinations.length * pTotal

        submetricChunkCombinations.forEach((submetricChunkCombination: Combination<SubmetricChunk>, sIndex) => {
            parameterChunkCombinations.forEach((parameterChunkCombination: Combination<ParameterChunk>, pIndex) => {
                const baseInitialConfig: SubmetricConfig[] = computeDeepClone(submetricChunkCombination)

                const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, submetricChunkCombination.length)

                parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
                    const initialConfig: Combination<SubmetricConfig> = baseInitialConfig.map((baseInitialSubmetricConfig, index) => {
                        return merge(baseInitialSubmetricConfig, ...parameterChunkCombinationDistribution[ index ]) as SubmetricConfig
                    }) as Combination<SubmetricConfig>
                    configsForChunkCount.push(initialConfig)
                })

                const index = sIndex * pTotal + pIndex
                if (index > 0 && index % 10000 === 0) {
                    console.log(`${index}/${total} (${100 * index / total}%)`)
                }
            })
        })
    }

    return configsForChunkCount
}

export {
    computeConfigsForChunkCount,
}
