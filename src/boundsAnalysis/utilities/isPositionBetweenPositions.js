const isPositionBetweenPositions = (position, [positionBelow, positionAbove]) =>
    position >= positionBelow && (position <= positionAbove || !positionAbove)

module.exports = {
    isPositionBetweenPositions,
}
