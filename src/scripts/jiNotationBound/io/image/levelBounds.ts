import { Io, Px, subtract } from "../../../../general"
import { JiNotationBound, JiNotationLevel, JI_NOTATION_LEVELS_BOUNDS } from "../../../../sagittal"
import { JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_TOPS } from "./levelHeights"
import { DASH_SIZE, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeJiNotationLevelBounds = (): Io[] => {
    const jiNotationLevelBoundElements: Io[] = [] as Io[]

    const jiNotationLevelsBounds =
        Object.entries(JI_NOTATION_LEVELS_BOUNDS) as Array<[JiNotationLevel, JiNotationBound[]]>
    jiNotationLevelsBounds.forEach(
        ([jiNotationLevel, jiNotationLevelBounds]: [JiNotationLevel, JiNotationBound[]]): void => {
            if (jiNotationLevel === JiNotationLevel.INSANE) {
                return
            }

            jiNotationLevelBounds.forEach((jiNotationLevelBound: JiNotationBound, index: number): void => {
                const { cents } = jiNotationLevelBound

                const topY: Px = JI_NOTATION_LEVEL_TOPS[ jiNotationLevel ]
                const bottomY: Px = JI_NOTATION_LEVEL_BOTTOMS[ jiNotationLevel ]
                const positionX: Px = computeX(cents)

                const textY: Px = subtract(topY, SYMBOL_OFFSET)

                jiNotationLevelBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}" />\n` as Io)

                if (jiNotationLevel === JiNotationLevel.EXTREME) { // JI notation bound ID, not mina label
                    jiNotationLevelBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as Io)
                    jiNotationLevelBoundElements.push(`  <text fill="black" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as Io)
                }
            })
        },
    )

    return jiNotationLevelBoundElements
}

export {
    visualizeJiNotationLevelBounds,
}
