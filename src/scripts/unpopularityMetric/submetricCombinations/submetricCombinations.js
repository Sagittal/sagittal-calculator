const {combineSubmetricsPoints} = require("./combineSubmetricsPoints")
const {computeSubmetricPointsAndDynamicParameters} = require("./submetricPointsAndDynamicParameters")

const computeSubmetricCombinations = configs => {
    let dynamicParameters = []
    const submetricsPoints = configs.map((submetricConfigs, submetricIndex) => {
        const {submetricPoints, submetricDynamicParameters} = computeSubmetricPointsAndDynamicParameters(submetricConfigs, submetricIndex)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)

        return submetricPoints
    })

    return combineSubmetricsPoints({submetricsPoints, dynamicParameters})
}

module.exports = {
    computeSubmetricCombinations,
}
