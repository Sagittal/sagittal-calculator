const computeIsPositionBetweenPositions = (position, [positionBelow, positionAbove]) =>
    position >= positionBelow && (position <= positionAbove || !positionAbove)

module.exports = {
    computeIsPositionBetweenPositions,
}
