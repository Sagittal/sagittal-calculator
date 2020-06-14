const {INA_MIDPOINTS} = require("../data/snappablePositions")
const {INA_COLOR} = require("./colors")
const {LEVEL_CENTERS} = require("./levelHeights")
const {DASH_SIZE, HALF_TICK_SIZE, TEXT_OFFSET} = require("./size")
const {computeX} = require("./x")

const visualizeInaMidpoints = () => {
    const inaMidpointLines = []

    Object.entries(INA_MIDPOINTS).forEach(([level, inaMidpoints]) => {
        const y = LEVEL_CENTERS[level]
        const y1 = y - HALF_TICK_SIZE
        const y2 = y + HALF_TICK_SIZE
        const textY = y1 - TEXT_OFFSET

        inaMidpoints.forEach(inaMidpoint => {
            const {name, position} = inaMidpoint

            const x = computeX(position)

            inaMidpointLines.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${INA_COLOR}" x1="${x}" x2="${x}" y1="${y1}" y2="${y2}"/>`)
            inaMidpointLines.push(`  <text fill="${INA_COLOR}" text-anchor="middle" x="${x}" y="${textY}" font-size="6px" font-family="Helvetica">${name}</text>\n`)
        })
    })

    return inaMidpointLines
}

module.exports = {
    visualizeInaMidpoints,
}
