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
import { ChunkCount, ParameterChunk, SubmetricChunk } from "./types"
import { SubmetricConfig } from "../types"
import { Combination, Combinations } from "../../../utilities/types"

const computeInitialConfigs = (chunkCount: ChunkCount, { quiet = false } = {}): Combinations<SubmetricConfig> => {
    let initialConfigs: Combinations<SubmetricConfig> = [] as unknown as Combinations<SubmetricConfig>

    if (!quiet) console.log(`calculating the initial configs: phase 1 of ${chunkCount}`)
    const submetricChunkCombinations: Combinations<SubmetricChunk> = computeCombinations(SUBMETRIC_CHUNKS, chunkCount)
    submetricChunkCombinations.forEach((submetricChunkCombination: Combination<SubmetricChunk>) => {
        initialConfigs.push(submetricChunkCombination)
    })

    let chunkCountForSubmetrics: ChunkCount = chunkCount
    while (chunkCountForSubmetrics > 1) {
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as ChunkCount
        const chunkCountForParameters = chunkCount - chunkCountForSubmetrics

        // todo: this part can take a really long time, so perhaps it should also do some progress logging

        SUBMETRIC_CHUNK_COMBINATIONS[ chunkCountForSubmetrics ] = SUBMETRIC_CHUNK_COMBINATIONS[ chunkCountForSubmetrics ] || computeCombinations(SUBMETRIC_CHUNKS, chunkCountForSubmetrics, { withRepeatedElements: true })
        const submetricChunkCombinations: Combinations<SubmetricChunk> = SUBMETRIC_CHUNK_COMBINATIONS[ chunkCountForSubmetrics ]

        PARAMETER_CHUNK_COMBINATIONS[ chunkCountForParameters ] = PARAMETER_CHUNK_COMBINATIONS[ chunkCountForParameters ] || computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
        const parameterChunkCombinations: Combinations<ParameterChunk> = PARAMETER_CHUNK_COMBINATIONS[ chunkCountForParameters ]

        if (!quiet) console.log(`calculating the initial configs: phase ${chunkCountForParameters + 1} of ${chunkCount}`)

        const pTotal = parameterChunkCombinations.length
        const total = submetricChunkCombinations.length * pTotal

        submetricChunkCombinations.forEach((submetricChunkCombination: Combination<SubmetricChunk>, sIndex) => {
            parameterChunkCombinations.forEach((parameterChunkCombination: Combination<ParameterChunk>, pIndex) => {
                const baseInitialConfig: Combination<SubmetricConfig> = computeDeepClone(submetricChunkCombination)

                const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, submetricChunkCombination.length)

                parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
                    const initialConfig: Combination<SubmetricConfig> = baseInitialConfig.map((baseInitialSubmetricConfig, index) => {
                        return merge(baseInitialSubmetricConfig, ...parameterChunkCombinationDistribution[ index ])
                    }) as Combination<SubmetricConfig>
                    initialConfigs.push(initialConfig)
                })

                const index = sIndex * pTotal + pIndex
                if (index > 0 && index % 10000 === 0) {
                    console.log(`${index}/${total} (${100 * index / total}%)`)
                }
            })
        })
    }

    return initialConfigs
}

export {
    computeInitialConfigs,
}
