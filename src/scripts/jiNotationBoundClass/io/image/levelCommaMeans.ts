import {BLANK, CommaMean, DEFAULT_PRECISION, Io, Px, round, subtract} from "@sagittal/general"
import {Ascii, computeAccidentalUnicode, JiNotationLevelId, parseAscii} from "@sagittal/system"
import {JI_NOTATION_LEVELS_COMMA_MEANS} from "../../histories"
import {JI_NOTATION_LEVEL_CENTERS} from "./levelHeights"
import {COMMA_MEAN_HEX_COLOR} from "./rankColors"
import {DASH_SIZE, HALF_TICK_SIZE} from "./sizes"
import {computeX} from "./x"

const visualizeJiNotationLevelCommaMeans = (): Io[] => {
    const jiNotationLevelCommaMeanElements: Io[] = [] as Io[]

    const jiNotationLevelCommaMeansEntries =
        Object.entries(JI_NOTATION_LEVELS_COMMA_MEANS) as Array<[JiNotationLevelId, CommaMean[]]>
    jiNotationLevelCommaMeansEntries.forEach((
        [jiNotationLevel, jiNotationLevelCommaMeans]: [JiNotationLevelId, CommaMean[]],
    ): void => {
        if (jiNotationLevel === JiNotationLevelId.INSANE) {
            return
        }

        const centerY: Px = round(JI_NOTATION_LEVEL_CENTERS[jiNotationLevel], DEFAULT_PRECISION)
        const topY: Px = round(subtract(centerY, HALF_TICK_SIZE), DEFAULT_PRECISION)
        const bottomY: Px = round(subtract(centerY, HALF_TICK_SIZE), DEFAULT_PRECISION)

        jiNotationLevelCommaMeans.forEach(({name, pitch}: CommaMean): void => {
            const formattedName = name?.split(" ")
                .map((sagittalString: string): string => {
                    return computeAccidentalUnicode(parseAscii(sagittalString as Ascii))
                }).join("   ") || BLANK
            const positionX: Px = computeX(pitch)

            jiNotationLevelCommaMeanElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${COMMA_MEAN_HEX_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}"/>\n` as Io)
            jiNotationLevelCommaMeanElements.push(`  <text fill="white" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="6px" font-family="Helvetica">${name}</text>\n` as Io) // So they can be searched by ASCII
            jiNotationLevelCommaMeanElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n` as Io)
            jiNotationLevelCommaMeanElements.push(`  <text fill="${COMMA_MEAN_HEX_COLOR}" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n` as Io)
        })
    })

    return jiNotationLevelCommaMeanElements
}

export {
    visualizeJiNotationLevelCommaMeans,
}
