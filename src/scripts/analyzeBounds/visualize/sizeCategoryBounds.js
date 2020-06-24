const {LEVELS_SIZE_CATEGORY_BOUNDS} = require("../snappablePositions")
const {LEVEL_TOPS, LEVEL_BOTTOMS} = require("./levelHeights")
const {computeX} = require("./x")
const {DASH_SIZE} = require("./sizes")
const {SIZE_COLOR} = require("./colors")

const visualizeSizeCategoryBounds = () => {
    const sizeCategoryBounds = LEVELS_SIZE_CATEGORY_BOUNDS["MEDIUM"] // same at every level

    const sizeCategoryBoundElements = []

    sizeCategoryBounds.forEach(sizeCategoryBound => {
        const {name, position} = sizeCategoryBound

        const topEdgeY = LEVEL_TOPS["INSANE"]
        const bottomEdgeY = LEVEL_BOTTOMS["MEDIUM"]
        const centerY = (topEdgeY + bottomEdgeY) / 2

        const positionX = computeX(position)

        sizeCategoryBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${SIZE_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topEdgeY}" y2="${bottomEdgeY}" />\n`)
        sizeCategoryBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>`)
        sizeCategoryBoundElements.push(`  <text fill="${SIZE_COLOR}" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>`)
    })

    return sizeCategoryBoundElements
}

module.exports = {
    visualizeSizeCategoryBounds,
}
