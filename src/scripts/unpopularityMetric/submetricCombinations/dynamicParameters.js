const {computeSubmetricDynamicParameters} = require("./submetricDynamicParameters")

const computeDynamicParameters = configs => {
    let dynamicParameters = []

    configs.forEach((submetricConfigs, submetricIndex) => {
        const submetricDynamicParameters = computeSubmetricDynamicParameters(submetricConfigs, submetricIndex)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

module.exports = {
    computeDynamicParameters,
}
