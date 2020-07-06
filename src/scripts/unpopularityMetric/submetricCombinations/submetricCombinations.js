const {combineSubmetricsPoints} = require("./combineSubmetricsPoints")
const {computeSubmetricPoints} = require("./submetricPoints")

const computeSubmetricCombinations = ({configs, dynamicParameters}) => {
    const submetricsPoints = configs.map(computeSubmetricPoints)

    return combineSubmetricsPoints({submetricsPoints, dynamicParameters})
}

module.exports = {
    computeSubmetricCombinations,
}
