import { IO, Px } from "../../../../general"
import { Bound, Level, LEVELS_BOUNDS } from "../../../../sagittal"
import { LEVEL_BOTTOMS, LEVEL_TOPS } from "./levelHeights"
import { DASH_SIZE, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeLevelBounds = () => {
    const levelBoundElements: IO[] = [] as IO[]

    const levelsBoundsEntries = Object.entries(LEVELS_BOUNDS) as Array<[Level, Bound[]]>
    levelsBoundsEntries.forEach(([level, levelsBounds]: [Level, Bound[]]) => {
        if (level === Level.INSANE) {
            return
        }

        levelsBounds.forEach((levelBound: Bound, index: number) => {
            const { cents } = levelBound

            const topY: Px = LEVEL_TOPS[ level ]
            const bottomY = LEVEL_BOTTOMS[ level ]
            const positionX = computeX(cents)

            const textY = topY - SYMBOL_OFFSET

            levelBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}" />\n` as IO)

            if (level === Level.EXTREME) { // Bound id, not mina label
                levelBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as IO)
                levelBoundElements.push(`  <text fill="black" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as IO)
            }
        })
    })

    return levelBoundElements
}

export {
    visualizeLevelBounds,
}
