import { CentsPosition, difference, IO, Px } from "../../../../general"
import { Level, SymbolLongAscii, unicodeFromAscii } from "../../../../sagittal"
import { LEVELS_COMMA_MEANS } from "../../histories"
import { MEAN_COLOR } from "./colors"
import { LEVEL_CENTERS } from "./levelHeights"
import { DASH_SIZE, HALF_TICK_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeLevelCommaMeans = (): IO[] => {
    const levelCommaMeanElements: IO[] = [] as IO[]

    const levelCommaMeansEntries = Object.entries(LEVELS_COMMA_MEANS) as Array<[Level, CentsPosition[]]>
    levelCommaMeansEntries.forEach(([level, levelCommaMeans]: [Level, CentsPosition[]]) => {
        if (level === Level.INSANE) {
            return
        }

        const centerY: Px = LEVEL_CENTERS[ level ]
        const topY: Px = difference(centerY, HALF_TICK_SIZE)
        const bottomY: Px = difference(centerY, HALF_TICK_SIZE)

        levelCommaMeans.forEach(levelCommaMean => {
            const { cents, name } = levelCommaMean

            const formattedName = name?.split(" ")
                .map(ascii => unicodeFromAscii(ascii as SymbolLongAscii)).join("   ") || ""
            const positionX: Px = computeX(cents)

            levelCommaMeanElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${MEAN_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}"/>\n` as IO)
            levelCommaMeanElements.push(`  <text fill="white" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="6px" font-family="Helvetica">${name}</text>\n` as IO) // For searchability by ascii
            levelCommaMeanElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n` as IO)
            levelCommaMeanElements.push(`  <text fill="${MEAN_COLOR}" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n` as IO)
        })
    })

    return levelCommaMeanElements
}

export {
    visualizeLevelCommaMeans,
}
