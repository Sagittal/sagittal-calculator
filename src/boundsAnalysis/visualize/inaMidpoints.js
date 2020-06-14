const {INA_MIDPOINTS} = require("../data/snappablePositions")
const {INA_COLOR} = require("./colors")
const {LEVEL_CENTERS} = require("./levelHeights")
const {DASH_SIZE, HALF_TICK_SIZE} = require("./sizes")
const {computeX} = require("./x")

const visualizeInaMidpoints = () => {
    const inaMidpointElements = []

    Object.entries(INA_MIDPOINTS).forEach(([level, inaMidpoints]) => {
        const centerY = LEVEL_CENTERS[level]
        const topY = centerY - HALF_TICK_SIZE
        const bottomY = centerY + HALF_TICK_SIZE

        inaMidpoints.forEach(inaMidpoint => {
            const {name, position} = inaMidpoint

            const x = computeX(position)

            inaMidpointElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${INA_COLOR}" x1="${x}" x2="${x}" y1="${topY}" y2="${bottomY}"/>\n`)
            inaMidpointElements.push(`  <text fill="${INA_COLOR}" alignment-baseline="baseline" text-anchor="middle" x="${x}" y="${topY}" font-size="6px" font-family="Helvetica">${name}</text>\n`)
        })
    })

    return inaMidpointElements
}

module.exports = {
    visualizeInaMidpoints,
}
