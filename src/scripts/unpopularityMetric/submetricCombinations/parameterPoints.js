const computeParameterPoints = (parameterConfig = {}) => {
    const {
        center,
        range = 0,
        count = 1,
    } = parameterConfig

    if (count === 1) return [center]

    const keys = [...Array(count).keys()]

    const offset = center - range/2

    return keys.map(key => {
        const adjustedKey = key * range/(count - 1)

        return offset + adjustedKey
    })
}

module.exports = {
    computeParameterPoints,
}
