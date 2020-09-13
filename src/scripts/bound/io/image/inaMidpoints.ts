import { CentsPosition, difference, Io, Px, sum } from "../../../../general"
import { Level } from "../../../../sagittal"
import { INA_MIDPOINTS } from "../../histories"
import { INA_COLOR } from "./colors"
import { LEVEL_CENTERS } from "./levelHeights"
import { DASH_SIZE, HALF_TICK_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeInaMidpoints = (): Io[] => {
    const inaMidpointElements: Io[] = [] as Io[]

    const inaMidpointEntries = Object.entries(INA_MIDPOINTS) as Array<[Level, CentsPosition[]]>
    inaMidpointEntries.forEach(([level, inaMidpoints]: [Level, CentsPosition[]]): void => {
        const centerY: Px = LEVEL_CENTERS[ level ]
        const topY: Px = difference(centerY, HALF_TICK_SIZE)
        const bottomY: Px = sum(centerY, HALF_TICK_SIZE)

        inaMidpoints.forEach((inaMidpoint: CentsPosition): void => {
            const { name, cents } = inaMidpoint

            const x: Px = computeX(cents)

            inaMidpointElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${INA_COLOR}" x1="${x}" x2="${x}" y1="${topY}" y2="${bottomY}"/>\n` as Io)
            inaMidpointElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="baseline" text-anchor="middle" x="${x}" y="${topY}" font-size="6px" font-family="Helvetica">${name}</text>\n` as Io)
            inaMidpointElements.push(`  <text fill="${INA_COLOR}" alignment-baseline="baseline" text-anchor="middle" x="${x}" y="${topY}" font-size="6px" font-family="Helvetica">${name}</text>\n` as Io)
        })
    })

    return inaMidpointElements
}

export {
    visualizeInaMidpoints,
}
