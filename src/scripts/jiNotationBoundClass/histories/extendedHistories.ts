import {computeExtensionBase, ExtensionBaseType} from "@sagittal/general"
import {BoundType, JiNotationBoundClass, JiNotationLevelId} from "@sagittal/system"
import {computeBoundedCommaClassPositions} from "../boundedPositions"
import {computeBoundEvents} from "./events"
import {BoundEvent, BoundHistory} from "./types"

const computeExtendedHistories = (
    boundHistory: BoundHistory,
    jiNotationLevel: JiNotationLevelId,
    {pitch}: JiNotationBoundClass,
): BoundHistory[] => {
    const extendedBoundHistories = computeExtensionBase(ExtensionBaseType.ARRAY) as BoundHistory[]

    const boundedCommaClassPositions = computeBoundedCommaClassPositions(pitch, jiNotationLevel)

    const newBoundEvents = [
        ...computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, BoundType.INA_MIDPOINT),
        ...computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, BoundType.COMMA_MEAN),
        ...computeBoundEvents(jiNotationLevel, boundedCommaClassPositions, BoundType.SIZE_CATEGORY_BOUND),
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
