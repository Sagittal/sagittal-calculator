import { Io, Px, UNISON } from "../../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS, MAX_SINGLE_SHAFT_POSITION } from "../../../../sagittal"
import { JI_NOTATION_LEVEL_BOTTOMS } from "./levelHeights"
import { computeX } from "./x"

const visualizeJiNotationLevels = (): Io[] => {
    const jiNotationLevelElements: Io[] = []

    JI_NOTATION_LEVELS.forEach((jiNotationLevel: JiNotationLevel): void => {
        const leftEdgeX: Px = computeX(UNISON)
        const rightEdgeX: Px = computeX(MAX_SINGLE_SHAFT_POSITION)
        const jiNotationLevelY: Px = JI_NOTATION_LEVEL_BOTTOMS[ jiNotationLevel ]

        jiNotationLevelElements.push(`  <line stroke="black" x1="${leftEdgeX}" x2="${rightEdgeX}" y1="${jiNotationLevelY}" y2="${jiNotationLevelY}"/>\n` as Io)
    })

    return jiNotationLevelElements
}

export {
    visualizeJiNotationLevels,
}
