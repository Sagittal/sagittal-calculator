import { Position } from "../../../general"
import { Level, unicodeFromAscii } from "../../../notations"
import { LEVELS_COMMA_MEANS } from "../plot"
import { MEAN_COLOR } from "./colors"
import { LEVEL_CENTERS } from "./levelHeights"
import { DASH_SIZE, HALF_TICK_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeLevelCommaMeans = () => {
    const levelCommaMeanElements: string[] = [] as string[]

    const levelCommaMeansEntries = Object.entries(LEVELS_COMMA_MEANS) as Array<[Level, Position[]]>
    levelCommaMeansEntries.forEach(([level, levelCommaMeans]: [Level, Position[]]) => {
        if (level === Level.INSANE) { return }

        const centerY = LEVEL_CENTERS[ level ]
        const topY = centerY - HALF_TICK_SIZE
        const bottomY = centerY + HALF_TICK_SIZE

        levelCommaMeans.forEach(levelCommaMean => {
            const { cents, name } = levelCommaMean

            const formattedName = name.split(" ").map(unicodeFromAscii).join("   ")
            const positionX = computeX(cents)

            levelCommaMeanElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${MEAN_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}"/>\n`)
            levelCommaMeanElements.push(`  <text fill="white" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="6px" font-family="Helvetica">${name}</text>\n`) // For searchability by ascii
            levelCommaMeanElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n`)
            levelCommaMeanElements.push(`  <text fill="${MEAN_COLOR}" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n`)
        })
    })

    return levelCommaMeanElements
}

export {
    visualizeLevelCommaMeans,
}
