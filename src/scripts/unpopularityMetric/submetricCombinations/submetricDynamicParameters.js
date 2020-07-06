const {computeParameterPoints} = require("./parameterPoints")

const computeSubmetricDynamicParameters = (submetricConfigs = {}, submetricIndex) => {
    const submetricDynamicParameters = []

    Object.entries(submetricConfigs).forEach(([parameter, parameterConfig]) => {
        const {count, range} = parameterConfig
        if (typeof parameterConfig === "object" && count > 1) {
            const parameterPoints = computeParameterPoints(parameterConfig)
            const unit = range / (count - 1)
            submetricDynamicParameters.push({submetricIndex, parameter, parameterPoints, unit})
        }
    })

    return submetricDynamicParameters
}

module.exports = {
    computeSubmetricDynamicParameters,
}
