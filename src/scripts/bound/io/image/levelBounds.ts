import { Io, Px, subtract } from "../../../../general"
import { Bound, Level, LEVELS_BOUNDS } from "../../../../sagittal"
import { LEVEL_BOTTOMS, LEVEL_TOPS } from "./levelHeights"
import { DASH_SIZE, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeLevelBounds = (): Io[] => {
    const levelBoundElements: Io[] = [] as Io[]

    const levelsBoundsEntries = Object.entries(LEVELS_BOUNDS) as Array<[Level, Bound[]]>
    levelsBoundsEntries.forEach(([level, levelsBounds]: [Level, Bound[]]): void => {
        if (level === Level.INSANE) {
            return
        }

        levelsBounds.forEach((levelBound: Bound, index: number): void => {
            const { cents } = levelBound

            const topY: Px = LEVEL_TOPS[ level ]
            const bottomY: Px = LEVEL_BOTTOMS[ level ]
            const positionX: Px = computeX(cents)

            const textY: Px = subtract(topY, SYMBOL_OFFSET)

            levelBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}" />\n` as Io)

            if (level === Level.EXTREME) { // Bound id, not mina label
                levelBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as Io)
                levelBoundElements.push(`  <text fill="black" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as Io)
            }
        })
    })

    return levelBoundElements
}

export {
    visualizeLevelBounds,
}
