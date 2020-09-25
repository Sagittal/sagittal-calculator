import { Cents, computeCentsFromPitch, Io, Px } from "../../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS, MAX_SYMBOL_CLASS_POSITION } from "../../../../sagittal"
import { JI_NOTATION_LEVEL_BOTTOMS } from "./levelHeights"
import { computeX } from "./x"

const visualizeJiNotationLevels = (): Io[] => {
    const jiNotationLevelElements: Io[] = []

    JI_NOTATION_LEVELS.forEach((jiNotationLevel: JiNotationLevel): void => {
        const leftEdgeX: Px = computeX(0 as Cents)
        const rightEdgeX: Px = computeX(computeCentsFromPitch(MAX_SYMBOL_CLASS_POSITION))
        const jiNotationLevelY: Px = JI_NOTATION_LEVEL_BOTTOMS[ jiNotationLevel ]

        jiNotationLevelElements.push(`  <line stroke="black" x1="${leftEdgeX}" x2="${rightEdgeX}" y1="${jiNotationLevelY}" y2="${jiNotationLevelY}"/>\n` as Io)
    })

    return jiNotationLevelElements
}

export {
    visualizeJiNotationLevels,
}
