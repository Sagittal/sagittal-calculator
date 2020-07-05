const {computeParameterPoints} = require("./parameterPoints")

const computeSubmetricPointsAndDynamicParameters = (submetricConfigs = {}, submetricIndex) => {
    let submetricPoints = [{}]
    const submetricDynamicParameters = []

    Object.entries(submetricConfigs).forEach(([parameter, parameterConfig]) => {
        let extendedSubmetricPoints = []

        let parameterPoints
        if (typeof parameterConfig !== "object") {
            parameterPoints = [parameterConfig]
        } else {
            parameterPoints = computeParameterPoints(parameterConfig)
        }
        if (parameterPoints.length === 0) return
        if (parameterPoints.length > 1) {
            submetricDynamicParameters.push({ submetricIndex, parameter, parameterPoints })
        }

        submetricPoints.forEach(submetricPoint => {
            parameterPoints.forEach(parameterPoint => {
                extendedSubmetricPoints.push({...submetricPoint, [parameter]: parameterPoint})
            })
        })

        submetricPoints = extendedSubmetricPoints
    })

    return {submetricPoints, submetricDynamicParameters}
}

module.exports = {
    computeSubmetricPointsAndDynamicParameters,
}
