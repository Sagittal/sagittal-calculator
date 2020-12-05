import {Io, Px, UNISON} from "@sagittal/general"
import {HALF_APOTOME, JiNotationLevelId, JI_NOTATION_LEVELS} from "@sagittal/system"
import {JI_NOTATION_LEVEL_BOTTOMS} from "./levelHeights"
import {computeX} from "./x"

const visualizeJiNotationLevels = (): Io[] => {
    const jiNotationLevelElements: Io[] = []

    JI_NOTATION_LEVELS.forEach((jiNotationLevel: JiNotationLevelId): void => {
        const leftEdgeX: Px = computeX(UNISON)
        const rightEdgeX: Px = computeX(HALF_APOTOME)
        const jiNotationLevelY: Px = JI_NOTATION_LEVEL_BOTTOMS[jiNotationLevel]

        jiNotationLevelElements.push(`  <line stroke="black" x1="${leftEdgeX}" x2="${rightEdgeX}" y1="${jiNotationLevelY}" y2="${jiNotationLevelY}"/>\n` as Io)
    })

    return jiNotationLevelElements
}

export {
    visualizeJiNotationLevels,
}
