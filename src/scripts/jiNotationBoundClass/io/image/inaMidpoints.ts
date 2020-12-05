import {add, DEFAULT_PRECISION, Io, Px, round, subtract} from "@sagittal/general"
import {InaMidpoint, JiNotationLevelId} from "@sagittal/system"
import {INA_MIDPOINTS} from "../../histories"
import {JI_NOTATION_LEVEL_CENTERS} from "./levelHeights"
import {INA_MIDPOINT_HEX_COLOR} from "./rankColors"
import {DASH_SIZE, HALF_TICK_SIZE} from "./sizes"
import {computeX} from "./x"

const visualizeInaMidpoints = (): Io[] => {
    const inaMidpointElements: Io[] = [] as Io[]

    const inaMidpointEntries = Object.entries(INA_MIDPOINTS) as Array<[JiNotationLevelId, InaMidpoint[]]>
    inaMidpointEntries.forEach(([jiNotationLevel, inaMidpoints]: [JiNotationLevelId, InaMidpoint[]]): void => {
        const centerY: Px = round(JI_NOTATION_LEVEL_CENTERS[jiNotationLevel], DEFAULT_PRECISION)
        const topY: Px = round(subtract(centerY, HALF_TICK_SIZE), DEFAULT_PRECISION)
        const bottomY: Px = round(add(centerY, HALF_TICK_SIZE), DEFAULT_PRECISION)

        inaMidpoints.forEach(({name, pitch}: InaMidpoint): void => {
            const x: Px = computeX(pitch)

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
