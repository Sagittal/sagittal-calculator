const {LEVELS_BOUNDS} = require("../data/levelsBounds")
const {LEVEL_TOPS, LEVEL_BOTTOMS} = require("./levelHeights")
const {computeX} = require("./x")
const {DASH_SIZE} = require("./size")

const visualizeLevelBounds = () => {
    const levelBoundElements = []

    Object.entries(LEVELS_BOUNDS).forEach(([level, levelsBounds]) => {
        if (level === "INSANE") return

        levelsBounds.forEach((levelBound, index) => {
            const {position} = levelBound

            const topY = LEVEL_TOPS[level]
            const bottomY = LEVEL_BOTTOMS[level]
            const positionX = computeX(position)

            levelBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}" />\n`)

            if (level === "EXTREME") { // bound index, not mina label
                levelBoundElements.push(`  <text fill="black" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${topY}" font-size="12px" font-family="Helvetica">${index}</text>`)
            }
        })
    })

    return levelBoundElements
}

module.exports = {
    visualizeLevelBounds,
}
