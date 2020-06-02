const calculateNeighborPositions = (position, targetPositions) => {
    let index = 0
    let target = targetPositions[index]
    while (target < position) {
        index++
        target = targetPositions[index]
    }

    return [
        targetPositions[index - 1],
        target,
    ]
}

module.exports = {
    calculateNeighborPositions,
}
