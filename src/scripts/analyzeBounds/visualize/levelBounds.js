const {LEVELS_BOUNDS} = require("../../../notations/ji/levelsBounds")
const {LEVEL_TOPS, LEVEL_BOTTOMS} = require("./levelHeights")
const {computeX} = require("./x")
const {DASH_SIZE, COMMA_OFFSET} = require("./sizes")

const visualizeLevelBounds = () => {
    const levelBoundElements = []

    Object.entries(LEVELS_BOUNDS).forEach(([level, levelsBounds]) => {
        if (level === "INSANE") return

        levelsBounds.forEach((levelBound, index) => {
            const {position} = levelBound

            const topY = LEVEL_TOPS[level]
            const bottomY = LEVEL_BOTTOMS[level]
            const positionX = computeX(position)

            const textY = topY - COMMA_OFFSET

            levelBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}" />\n`)

            if (level === "EXTREME") { // bound id, not mina label
                levelBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n`)
                levelBoundElements.push(`  <text fill="black" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n`)
            }
        })
    })

    return levelBoundElements
}

module.exports = {
    visualizeLevelBounds,
}
