import {DEFAULT_PRECISION, Io, Px, round, subtract} from "@sagittal/general"
import {JiNotationBoundClass, JiNotationLevelId, JI_NOTATION_LEVELS_BOUND_CLASSES} from "@sagittal/system"
import {JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_TOPS} from "./levelHeights"
import {DASH_SIZE, SAGITTAL_OFFSET} from "./sizes"
import {computeX} from "./x"

const visualizeJiNotationLevelBoundClasses = (): Io[] => {
    const jiNotationLevelBoundClassElements: Io[] = [] as Io[]

    const jiNotationLevelsBoundClasses =
        Object.entries(JI_NOTATION_LEVELS_BOUND_CLASSES) as Array<[JiNotationLevelId, JiNotationBoundClass[]]>
    jiNotationLevelsBoundClasses.forEach(
        ([jiNotationLevel, jiNotationLevelBoundClasses]: [JiNotationLevelId, JiNotationBoundClass[]]): void => {
            if (jiNotationLevel === JiNotationLevelId.INSANE) {
                return
            }

            jiNotationLevelBoundClasses.forEach(({pitch}: JiNotationBoundClass, index: number): void => {
                const topY: Px = round(JI_NOTATION_LEVEL_TOPS[jiNotationLevel], DEFAULT_PRECISION)
                const bottomY: Px = round(JI_NOTATION_LEVEL_BOTTOMS[jiNotationLevel], DEFAULT_PRECISION)
                const positionX: Px = computeX(pitch)

                const textY: Px = round(subtract(topY, SAGITTAL_OFFSET), DEFAULT_PRECISION)

                jiNotationLevelBoundClassElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}" />\n` as Io)

                if (jiNotationLevel === JiNotationLevelId.EXTREME) { // JI notation bound class ID, not mina name
                    jiNotationLevelBoundClassElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as Io)
                    jiNotationLevelBoundClassElements.push(`  <text fill="black" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="12px" font-family="Helvetica">${index}</text>\n` as Io)
                }
            })
        },
    )

    return jiNotationLevelBoundClassElements
}

export {
    visualizeJiNotationLevelBoundClasses,
}
