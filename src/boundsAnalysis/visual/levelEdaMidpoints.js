const {LEVELS_EDA_MIDPOINTS} = require("../data/snappablePositions")
const {EDA_COLOR} = require("./colors")
const {LEVEL_CENTERS} = require("./levelHeights")
const {DASH_SIZE, HALF_TICK_SIZE, TEXT_OFFSET} = require("./constants")
const {computeX} = require("./x")

const visualizeLevelEdaMidpoints = () => {
    const levelEdaMidpointLines = []

    Object.entries(LEVELS_EDA_MIDPOINTS).forEach(([level, levelEdaMidpoints]) => {
        const y = LEVEL_CENTERS[level]
        const y1 = y - HALF_TICK_SIZE
        const y2 = y + HALF_TICK_SIZE
        const textY = y1 - TEXT_OFFSET

        levelEdaMidpoints.forEach(levelEdaMidpoint => {
            const {name, position} = levelEdaMidpoint

            const x = computeX(position)

            levelEdaMidpointLines.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${EDA_COLOR}" x1="${x}" x2="${x}" y1="${y1}" y2="${y2}"/>`)
            levelEdaMidpointLines.push(`  <text fill="${EDA_COLOR}" text-anchor="middle" x="${x}" y="${textY}" font-size="6px" font-family="Helvetica">${name}</text>\n`)
        })
    })

    return levelEdaMidpointLines
}

module.exports = {
    visualizeLevelEdaMidpoints,
}
