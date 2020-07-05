const {computeParameterPoints} = require("./parameterPoints")

const computeSubmetricPoints = (submetricConfigs = {}) => {
    let submetricPoints = [{}]

    Object.entries(submetricConfigs).forEach(([parameter, parameterConfig]) => {
        let extendedSubmetricPoints = []

        let parameterPoints
        if (typeof parameterConfig !== "object") {
            parameterPoints = [parameterConfig]
        } else {
            parameterPoints = computeParameterPoints(parameterConfig)
        }
        if (!parameterPoints.length) return

        submetricPoints.forEach(submetricPoint => {
            parameterPoints.forEach(parameterPoint => {
                extendedSubmetricPoints.push({...submetricPoint, [parameter]: parameterPoint})
            })
        })

        submetricPoints = extendedSubmetricPoints
    })

    return submetricPoints
}

module.exports = {
    computeSubmetricPoints,
}
