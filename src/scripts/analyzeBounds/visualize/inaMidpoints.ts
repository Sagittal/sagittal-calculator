import {INA_MIDPOINTS} from "../snappablePositions"
import {INA_COLOR} from "./colors"
import {LEVEL_CENTERS} from "./levelHeights"
import {DASH_SIZE, HALF_TICK_SIZE} from "./sizes"
import {computeX} from "./x"

const visualizeInaMidpoints = () => {
    const inaMidpointElements = []

    Object.entries(INA_MIDPOINTS).forEach(([level, inaMidpoints]: any) => {
        const centerY = LEVEL_CENTERS[level]
        const topY = centerY - HALF_TICK_SIZE
        const bottomY = centerY + HALF_TICK_SIZE

        inaMidpoints.forEach(inaMidpoint => {
            const {name, position} = inaMidpoint

            const x = computeX(position)

            inaMidpointElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${INA_COLOR}" x1="${x}" x2="${x}" y1="${topY}" y2="${bottomY}"/>\n`)
            inaMidpointElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="baseline" text-anchor="middle" x="${x}" y="${topY}" font-size="6px" font-family="Helvetica">${name}</text>\n`)
            inaMidpointElements.push(`  <text fill="${INA_COLOR}" alignment-baseline="baseline" text-anchor="middle" x="${x}" y="${topY}" font-size="6px" font-family="Helvetica">${name}</text>\n`)
        })
    })

    return inaMidpointElements
}

export {
    visualizeInaMidpoints,
}
