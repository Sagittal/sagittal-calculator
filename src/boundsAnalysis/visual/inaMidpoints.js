const {INA_MIDPOINTS} = require("../data/snappablePositions")
const {INA_COLOR} = require("./colors")
const {LEVEL_CENTERS} = require("./levelHeights")
const {DASH_SIZE, HALF_TICK_SIZE, TEXT_OFFSET} = require("./size")
const {computeX} = require("./x")

const visualizeInaMidpoints = () => {
    const inaMidpointElements = []

    Object.entries(INA_MIDPOINTS).forEach(([level, inaMidpoints]) => {
        const centerY = LEVEL_CENTERS[level]
        const topY = centerY - HALF_TICK_SIZE
        const bottomY = centerY + HALF_TICK_SIZE

        const textY = topY - TEXT_OFFSET

        inaMidpoints.forEach(inaMidpoint => {
            const {name, position} = inaMidpoint

            const x = computeX(position)

            inaMidpointElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${INA_COLOR}" x1="${x}" x2="${x}" y1="${topY}" y2="${bottomY}"/>`)
            inaMidpointElements.push(`  <text fill="${INA_COLOR}" text-anchor="middle" x="${x}" y="${textY}" font-size="6px" font-family="Helvetica">${name}</text>\n`)
        })
    })

    return inaMidpointElements
}

module.exports = {
    visualizeInaMidpoints,
}
