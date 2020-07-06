const computeNextConfigs = (coordinate, dynamicParameters, configs) => {
    const nextConfigs = configs.slice()

    coordinate.forEach((coordinateElement, index) => {
        const {submetricIndex, parameter, parameterPoints, unit} = dynamicParameters[index]

        const center = parameterPoints[coordinateElement]
        const range = unit / 2
        const count = 5

        nextConfigs[submetricIndex][parameter] = { center, range, count }
    })

    return nextConfigs
}

module.exports = {
    computeNextConfigs,
}
