const combineSubmetricsPoints = submetricsPoints => {
    let submetricCombinations = [ [] ]

    submetricsPoints.forEach(submetricPoints => {
        let extendedPoints = []

        submetricCombinations.forEach(submetricCombination => {
            submetricPoints.forEach(submetricPoint => {
                extendedPoints.push([ ...submetricCombination, submetricPoint ])
            })
        })

        submetricCombinations = extendedPoints
    })

    return submetricCombinations
}

module.exports = {
    combineSubmetricsPoints,
}
