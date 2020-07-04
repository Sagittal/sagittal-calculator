const {combineSubmetricsPoints} = require("./combineSubmetricsPoints")
const {computeSubmetricPoints} = require("./submetricPoints")

const computeSubmetricCombinations = configs => {
    const submetricsPoints = configs.map(submetricConfigs => {
        return computeSubmetricPoints(submetricConfigs)
    })

    return combineSubmetricsPoints(submetricsPoints)
}

module.exports = {
    computeSubmetricCombinations,
}
