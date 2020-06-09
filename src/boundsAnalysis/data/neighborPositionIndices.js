const computeNeighborPositionIndices = (position, targetPositions) => {
    let index = 0
    let target = targetPositions[index]
    while (target < position) {
        index++
        target = targetPositions[index]
    }

    return [
        index - 1,
        index,
    ]
}


module.exports = {
    computeNeighborPositionIndices,
}
