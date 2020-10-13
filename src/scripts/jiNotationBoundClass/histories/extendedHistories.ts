import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { BoundType, JiNotationBoundClass, JiNotationLevel } from "../../../sagittal"
import { computeBoundedCommaClassPositions } from "../boundedPositions"
import { computeBoundClassEvents } from "./events"
import { BoundClassEvent, BoundClassHistory } from "./types"

const computeExtendedHistories = (
    boundClassHistory: BoundClassHistory,
    jiNotationLevel: JiNotationLevel,
    { pitch }: JiNotationBoundClass,
): BoundClassHistory[] => {
    const extendedBoundClassHistories = computeExtensionBase(ExtensionBaseType.ARRAY) as BoundClassHistory[]

    const boundedCommaClassPositions = computeBoundedCommaClassPositions(pitch, jiNotationLevel)

    const newBoundClassEvents = [
        ...computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, BoundType.INA_MIDPOINT),
        ...computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, BoundType.COMMA_MEAN),
        ...computeBoundClassEvents(jiNotationLevel, boundedCommaClassPositions, BoundType.SIZE_CATEGORY_BOUND),
    ]

    newBoundClassEvents.forEach((boundClassEvent: BoundClassEvent): void => {
        const extendedBoundClassHistory: BoundClassHistory = boundClassHistory.concat(boundClassEvent)
        extendedBoundClassHistories.push(extendedBoundClassHistory)
    })

    return extendedBoundClassHistories
}

export {
    computeExtendedHistories,
}
