const {computeParameterPoints} = require("./parameterPoints")

const computeSubmetricDynamicParameters = (submetricConfigs = {}, submetricIndex) => {
    const submetricDynamicParameters = []

    Object.entries(submetricConfigs).forEach(([parameter, parameterConfig]) => {
        if (typeof parameterConfig === "object" && parameterConfig.count > 1) {
            const parameterPoints = computeParameterPoints(parameterConfig)
            submetricDynamicParameters.push({submetricIndex, parameter, parameterPoints})
        }
    })

    return submetricDynamicParameters
}

module.exports = {
    computeSubmetricDynamicParameters,
}
