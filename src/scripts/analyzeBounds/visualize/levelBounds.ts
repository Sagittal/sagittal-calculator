import { LEVELS_BOUNDS } from "../../../notations/ji/levelsBounds"
import { LEVEL_BOTTOMS, LEVEL_TOPS } from "./levelHeights"
import { computeX } from "./x"
import { DASH_SIZE, SYMBOL_OFFSET } from "./sizes"
import { Bound, Level } from "../../../notations/ji/types"
import { Px } from "./types"

const visualizeLevelBounds = () => {
    const levelBoundElements: string[] = [] as string[]

    (Object.entries(LEVELS_BOUNDS) as Array<[Level, Bound[]]>).forEach(([level, levelsBounds]: [Level, Bound[]]) => {
        if (level === Level.INSANE) return

        levelsBounds.forEach((levelBound: Bound, index: number) => {
            const { position } = levelBound

            const topY: Px = LEVEL_TOPS[ level ]
            const bottomY = LEVEL_BOTTOMS[ level ]
            const positionX = computeX(position)

            const textY = topY - SYMBOL_OFFSET

            levelBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}" />\n`)

            if (level === Level.EXTREME) { // bound id, not mina label
                levelBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n`)
                levelBoundElements.push(`  <text fill="black" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n`)
            }
        })
    })

    return levelBoundElements
}

export {
    visualizeLevelBounds,
}
