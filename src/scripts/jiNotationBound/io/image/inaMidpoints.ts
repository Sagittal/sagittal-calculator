import { ACCURACY_THRESHOLD, add, computeCentsFromPitch, Io, Px, round, subtract } from "../../../../general"
import { InaMidpoint, JiNotationLevel } from "../../../../sagittal"
import { INA_MIDPOINTS } from "../../histories"
import { JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { INA_MIDPOINT_HEX_COLOR } from "./rankColors"
import { DASH_SIZE, HALF_TICK_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeInaMidpoints = (): Io[] => {
    const inaMidpointElements: Io[] = [] as Io[]

    const inaMidpointEntries = Object.entries(INA_MIDPOINTS) as Array<[JiNotationLevel, InaMidpoint[]]>
    inaMidpointEntries.forEach(([jiNotationLevel, inaMidpoints]: [JiNotationLevel, InaMidpoint[]]): void => {
        const centerY: Px = round(JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ], ACCURACY_THRESHOLD)
        const topY: Px = round(subtract(centerY, HALF_TICK_SIZE), ACCURACY_THRESHOLD)
        const bottomY: Px = round(add(centerY, HALF_TICK_SIZE), ACCURACY_THRESHOLD)

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
