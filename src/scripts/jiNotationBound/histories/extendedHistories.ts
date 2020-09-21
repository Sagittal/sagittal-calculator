import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { BoundType, JiNotationBound, JiNotationLevel } from "../../../sagittal"
import { BoundedSymbolClassPositions, computeBoundedSymbolClassPositions } from "../boundedPositions"
import { computeBoundEvents } from "./events"
import { BoundEvent, BoundHistory } from "./types"

const computeExtendedHistories = (
    boundHistory: BoundHistory,
    jiNotationLevel: JiNotationLevel,
    jiNotationBound: JiNotationBound,
): BoundHistory[] => {
    const extendedBoundHistories: BoundHistory[] = computeExtensionBase(ExtensionBaseType.ARRAY) as BoundHistory[]

    const boundedSymbolClassPositions: BoundedSymbolClassPositions =
        computeBoundedSymbolClassPositions(jiNotationBound.cents, jiNotationLevel)

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
