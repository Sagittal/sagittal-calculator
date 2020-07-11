import { computeCombinations } from "../../../utilities/combinations"
import { computeDeepClone } from "../../../utilities/deepClone"
import { computeDistributions } from "../../../utilities/distributions"
import { merge } from "../../../utilities/merge"
import {
    PARAMETER_CONFIG_COMBINATIONS,
    PARAMETER_CONFIGS,
    SUBMETRIC_CONFIG_COMBINATIONS,
    SUBMETRIC_CONFIGS,
} from "./constants"
import { ChunkCount } from "./types"
import { Configs, ParameterConfigs, SubmetricConfigs } from "../types"

const computeInitialConfigs = (chunkCount: ChunkCount, { quiet = false } = {}) => {
    let initialConfigs: Configs[] = []

    if (!quiet) console.log(`calculating the initial configs: phase 1 of ${chunkCount}`)
    const submetricConfigsCombinations: SubmetricConfigs[][] = computeCombinations(SUBMETRIC_CONFIGS, chunkCount)
    submetricConfigsCombinations.forEach((submetricConfigsCombination: SubmetricConfigs[]) => {
        initialConfigs.push(submetricConfigsCombination)
    })

    let chunkCountForSubmetrics: ChunkCount = chunkCount
    while (chunkCountForSubmetrics > 1) {
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as ChunkCount
        const chunkCountForParameters = chunkCount - chunkCountForSubmetrics

        // this part can take a really long time

        SUBMETRIC_CONFIG_COMBINATIONS[ chunkCountForSubmetrics ] = SUBMETRIC_CONFIG_COMBINATIONS[ chunkCountForSubmetrics ] || computeCombinations(SUBMETRIC_CONFIGS, chunkCountForSubmetrics, { withRepeatedElements: true })
        const submetricConfigsCombinations: SubmetricConfigs[][] = SUBMETRIC_CONFIG_COMBINATIONS[ chunkCountForSubmetrics ]

        PARAMETER_CONFIG_COMBINATIONS[ chunkCountForParameters ] = PARAMETER_CONFIG_COMBINATIONS[ chunkCountForParameters ] || computeCombinations(PARAMETER_CONFIGS, chunkCountForParameters, { withRepeatedElements: true })
        const parameterConfigsCombinations: ParameterConfigs[][] = PARAMETER_CONFIG_COMBINATIONS[ chunkCountForParameters ]

        if (!quiet) console.log(`calculating the initial configs: phase ${chunkCountForParameters + 1} of ${chunkCount}`)

        const pTotal = parameterConfigsCombinations.length
        const total = submetricConfigsCombinations.length * pTotal

        submetricConfigsCombinations.forEach((submetricConfigsCombination: SubmetricConfigs[], sIndex) => {
            parameterConfigsCombinations.forEach((parameterConfigsCombination: ParameterConfigs[], pIndex) => {
                const baseInitialConfig: SubmetricConfigs[] = computeDeepClone(submetricConfigsCombination)

                const parameterConfigsDistributions = computeDistributions(parameterConfigsCombination, submetricConfigsCombination.length)

                parameterConfigsDistributions.forEach(parameterConfigsDistribution => {
                    const initialConfig = baseInitialConfig.map((baseInitialSubmetric, index) => {
                        return merge(baseInitialSubmetric, ...parameterConfigsDistribution[ index ])
                    })
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
