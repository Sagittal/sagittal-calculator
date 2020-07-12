import { LEVELS_COMMA_MEANS } from "../snappablePositions"
import { DASH_SIZE, HALF_TICK_SIZE } from "./sizes"
import { MEAN_COLOR } from "./colors"
import { LEVEL_CENTERS } from "./levelHeights"
import { unicodeFromAscii } from "../../../notations/asciiUnicode"
import { computeX } from "./x"
import { Level } from "../../../notations/ji/types"
import { SnappablePosition } from "../types"

const visualizeLevelCommaMeans = () => {
    const levelCommaMeanElements: string[] = [] as string[]

    const levelCommaMeansEntries = Object.entries(LEVELS_COMMA_MEANS) as Array<[Level, SnappablePosition[]]>
    levelCommaMeansEntries.forEach(([level, levelCommaMeans]: [Level, SnappablePosition[]]) => {
        if (level === Level.INSANE) return

        const centerY = LEVEL_CENTERS[ level ]
        const topY = centerY - HALF_TICK_SIZE
        const bottomY = centerY + HALF_TICK_SIZE

        levelCommaMeans.forEach(levelCommaMean => {
            const { position, name } = levelCommaMean

            const formattedName = name.split(" ").map(symbolAscii => unicodeFromAscii(symbolAscii)).join("   ")
            const positionX = computeX(position)

            levelCommaMeanElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${MEAN_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}"/>\n`)
            levelCommaMeanElements.push(`  <text fill="white" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="6px" font-family="Helvetica">${name}</text>\n`) // for searchability by ascii
            levelCommaMeanElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n`)
            levelCommaMeanElements.push(`  <text fill="${MEAN_COLOR}" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n`)
        })
    })

    return levelCommaMeanElements
}

export {
    visualizeLevelCommaMeans,
}
