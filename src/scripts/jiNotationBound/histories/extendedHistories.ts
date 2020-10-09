import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { BoundType, JiNotationBound, JiNotationLevel } from "../../../sagittal"
import { computeBoundedSymbolClassPositions } from "../boundedPositions"
import { computeBoundEvents } from "./events"
import { BoundEvent, BoundHistory } from "./types"

const computeExtendedHistories = (
    boundHistory: BoundHistory,
    jiNotationLevel: JiNotationLevel,
    { pitch }: JiNotationBound,
): BoundHistory[] => {
    const extendedBoundHistories = computeExtensionBase(ExtensionBaseType.ARRAY) as BoundHistory[]

    const boundedSymbolClassPositions = computeBoundedSymbolClassPositions(pitch, jiNotationLevel)

    const newBoundEvents = [
        ...computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, BoundType.INA_MIDPOINT),
        ...computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, BoundType.COMMA_MEAN),
        ...computeBoundEvents(jiNotationLevel, boundedSymbolClassPositions, BoundType.SIZE_CATEGORY_BOUND),
    ]

    newBoundEvents.forEach((boundEvent: BoundEvent): void => {
        const extendedBoundHistory: BoundHistory = boundHistory.concat(boundEvent)
        extendedBoundHistories.push(extendedBoundHistory)
    })

    return extendedBoundHistories
}

export {
    computeExtendedHistories,
}
