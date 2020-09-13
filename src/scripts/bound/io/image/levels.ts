import { Cents, Io, Px } from "../../../../general"
import { Level, LEVELS, MAX_SINGLE_SHAFT_CENTS } from "../../../../sagittal"
import { LEVEL_BOTTOMS } from "./levelHeights"
import { computeX } from "./x"

const visualizeLevels = (): Io[] => {
    const levelElements: Io[] = []

    LEVELS.forEach((level: Level): void => {
        const leftEdgeX: Px = computeX(0 as Cents)
        const rightEdgeX: Px = computeX(MAX_SINGLE_SHAFT_CENTS)
        const levelY: Px = LEVEL_BOTTOMS[ level ]

        levelElements.push(`  <line stroke="black" x1="${leftEdgeX}" x2="${rightEdgeX}" y1="${levelY}" y2="${levelY}"/>\n` as Io)
    })

    return levelElements
}

export {
    visualizeLevels,
}
