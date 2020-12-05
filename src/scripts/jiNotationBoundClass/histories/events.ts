import {BLANK, isScamonGreater, isScamonLesser, Name} from "@sagittal/general"
import {BoundType, JiNotationBound, JiNotationLevelId} from "@sagittal/system"
import {BoundedCommaClassPositions} from "../boundedPositions"
import {JI_NOTATION_BOUNDS_BY_TYPE} from "./bounds"
import {BoundEvent} from "./types"

const computeBoundEvents = (
    jiNotationLevel: JiNotationLevelId,
    [lesserBoundedCommaClassPosition, greaterBoundedCommaClassPosition]: BoundedCommaClassPositions,
    boundType: BoundType,
): BoundEvent[] => {
    const boundEvent: BoundEvent[] = []

    const levelBounds = JI_NOTATION_BOUNDS_BY_TYPE[boundType][jiNotationLevel]

    levelBounds.forEach(({pitch, name = BLANK as Name<JiNotationBound>}: JiNotationBound): void => {
        if (
            (!lesserBoundedCommaClassPosition || isScamonGreater(pitch, lesserBoundedCommaClassPosition)) &&
            (!greaterBoundedCommaClassPosition || isScamonLesser(pitch, greaterBoundedCommaClassPosition))
        ) {
            boundEvent.push({jiNotationLevel, boundType, name, pitch})
        }
    })

    return boundEvent
}

export {
    computeBoundEvents,
}
