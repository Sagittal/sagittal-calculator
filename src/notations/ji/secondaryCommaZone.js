const {LEVELS_BOUNDS} = require("./levelsBounds")

const computeSecondaryCommaZone = symbol => {
    const levelBounds = LEVELS_BOUNDS[symbol.introducingLevel]
    const upperBoundIndex = levelBounds.findIndex(bound => bound.position > symbol.primaryComma.position)
    const upperBound = levelBounds[upperBoundIndex].position
    const lowerBound = upperBoundIndex === 0 ? 0 : levelBounds[upperBoundIndex - 1].position // TODO: or should it be -upperBound?

    return [lowerBound, upperBound]
}

module.exports = {
    computeSecondaryCommaZone,
}
