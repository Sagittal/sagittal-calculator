import { add, computeCentsFromPitch, Io, Px, subtract } from "../../../../general"
import { JiNotationLevel } from "../../../../sagittal"
import { InaMidpoint, INA_MIDPOINTS } from "../../histories"
import { JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { INA_MIDPOINT_HEX_COLOR } from "./rankColors"
import { DASH_SIZE, HALF_TICK_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeInaMidpoints = (): Io[] => {
    const inaMidpointElements: Io[] = [] as Io[]

    const inaMidpointEntries = Object.entries(INA_MIDPOINTS) as Array<[JiNotationLevel, InaMidpoint[]]>
    inaMidpointEntries.forEach(([jiNotationLevel, inaMidpoints]: [JiNotationLevel, InaMidpoint[]]): void => {
        const centerY: Px = JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ]
        const topY: Px = subtract(centerY, HALF_TICK_SIZE)
        const bottomY: Px = add(centerY, HALF_TICK_SIZE)

        inaMidpoints.forEach((inaMidpoint: InaMidpoint): void => {
            const { name } = inaMidpoint
            const cents = computeCentsFromPitch(inaMidpoint)

            const x: Px = computeX(cents)

            inaMidpointElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${INA_MIDPOINT_HEX_COLOR}" x1="${x}" x2="${x}" y1="${topY}" y2="${bottomY}"/>\n` as Io)
            inaMidpointElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="baseline" text-anchor="middle" x="${x}" y="${topY}" font-size="6px" font-family="Helvetica">${name}</text>\n` as Io)
            inaMidpointElements.push(`  <text fill="${INA_MIDPOINT_HEX_COLOR}" alignment-baseline="baseline" text-anchor="middle" x="${x}" y="${topY}" font-size="6px" font-family="Helvetica">${name}</text>\n` as Io)
        })
    })

    return inaMidpointElements
}

export {
    visualizeInaMidpoints,
}
