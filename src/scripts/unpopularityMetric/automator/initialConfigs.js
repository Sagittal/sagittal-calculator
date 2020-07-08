const {computeCombinations} = require("../../../utilities/combinations")
const {computeDeepClone} = require("../../../utilities/deepClone")
const {computeDistributions} = require("../../../utilities/distributions")
const {merge} = require("../../../utilities/merge")
const {SUBMETRIC_CONFIGS, PARAMETER_CONFIGS, SUBMETRIC_CONFIG_COMBINATIONS, PARAMETER_CONFIG_COMBINATIONS} = require("./constants")

const computeInitialConfigs = chunkCount => {
    let initialConfigs = []

    console.log(`calculating the initial configs: phase 1 of ${chunkCount}`)
    const submetricConfigsCombinations = computeCombinations(SUBMETRIC_CONFIGS, chunkCount)
    submetricConfigsCombinations.forEach(submetricConfigsCombination => {
        initialConfigs.push(submetricConfigsCombination)
    })

    let chunkCountForSubmetrics = chunkCount
    while (chunkCountForSubmetrics > 1) {
        chunkCountForSubmetrics -= 1
        const chunkCountForParameters = chunkCount - chunkCountForSubmetrics

        // this part can take a really long time

        SUBMETRIC_CONFIG_COMBINATIONS[chunkCountForSubmetrics] = SUBMETRIC_CONFIG_COMBINATIONS[chunkCountForSubmetrics] || computeCombinations(SUBMETRIC_CONFIGS, chunkCountForSubmetrics, {withRepeatedElements: true})
        const submetricConfigsCombinations = SUBMETRIC_CONFIG_COMBINATIONS[chunkCountForSubmetrics]

        PARAMETER_CONFIG_COMBINATIONS[chunkCountForParameters] = PARAMETER_CONFIG_COMBINATIONS[chunkCountForParameters] || computeCombinations(PARAMETER_CONFIGS, chunkCountForParameters, {withRepeatedElements: true})
        const parameterConfigsCombinations = PARAMETER_CONFIG_COMBINATIONS[chunkCountForParameters]

        console.log(`calculating the initial configs: phase ${chunkCountForParameters + 1} of ${chunkCount}`)

        const pTotal = parameterConfigsCombinations.length
        const total = submetricConfigsCombinations.length * pTotal

        submetricConfigsCombinations.forEach((submetricConfigsCombination, sIndex) => {
            parameterConfigsCombinations.forEach((parameterConfigsCombination, pIndex) => {
                const baseInitialConfig = computeDeepClone(submetricConfigsCombination)

                const parameterConfigsDistributions = computeDistributions(parameterConfigsCombination, submetricConfigsCombination.length)

                parameterConfigsDistributions.forEach(parameterConfigsDistribution => {
                    const initialConfig = baseInitialConfig.map((baseInitialSubmetric, index) => {
                        return merge(baseInitialSubmetric, ...parameterConfigsDistribution[index])
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

module.exports = {
    computeInitialConfigs,
}
