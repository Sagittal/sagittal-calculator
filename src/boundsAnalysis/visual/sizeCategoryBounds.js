const {LEVELS_SIZE_CATEGORY_BOUNDS} = require("../data/snappablePositions")
const {LEVEL_TOPS, LEVEL_BOTTOMS} = require("./levelHeights")
const {computeX} = require("./x")
const {DASH_SIZE} = require("./size")
const {SIZE_COLOR} = require("./colors")

const visualizeSizeCategoryBounds = () => {
    const sizeCategoryBounds = LEVELS_SIZE_CATEGORY_BOUNDS["MEDIUM"] // same at every level

    const sizeCategoryBoundLines = []

    sizeCategoryBounds.forEach(sizeCategoryBound => {
        const {name, position} = sizeCategoryBound

        const y1 = LEVEL_TOPS["INSANE"]
        const y2 = LEVEL_BOTTOMS["MEDIUM"]
        const x = computeX(position)

        sizeCategoryBoundLines.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${SIZE_COLOR}" x1="${x}" x2="${x}" y1="${y1}" y2="${y2}" />\n`)
        sizeCategoryBoundLines.push(`  <text fill="${SIZE_COLOR}" text-anchor="middle" xml:space="preserve" x="${x}" y="${(y1+y2)/2}" font-size="10px" font-family="Helvetica">${name}</text>`)
    })

    return sizeCategoryBoundLines
}

module.exports = {
    visualizeSizeCategoryBounds,
}
