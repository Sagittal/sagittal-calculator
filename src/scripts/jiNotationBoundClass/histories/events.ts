import { isScamonGreater, isScamonLesser, Name } from "../../../general"
import {BoundClass, BoundType, JiNotationBound, JiNotationLevel} from "../../../sagittal"
import { BoundedCommaClassPositions } from "../boundedPositions"
import { BOUND_CLASSES_BY_TYPE } from "./bounds"
import { BoundClassEvent } from "./types"

const computeBoundClassEvents = (
    jiNotationLevel: JiNotationLevel,
    [lesserBoundedCommaClassPosition, greaterBoundedCommaClassPosition]: BoundedCommaClassPositions,
    boundType: BoundType,
): BoundClassEvent[] => {
    const boundClassEvent: BoundClassEvent[] = []

    const levelBoundClasses = BOUND_CLASSES_BY_TYPE[ boundType ][ jiNotationLevel ]

    levelBoundClasses.forEach(({ pitch, name = "" as Name<JiNotationBound> }: JiNotationBound): void => {
        if (
            (!lesserBoundedCommaClassPosition || isScamonGreater(pitch, lesserBoundedCommaClassPosition)) &&
            (!greaterBoundedCommaClassPosition || isScamonLesser(pitch, greaterBoundedCommaClassPosition))
        ) {
            boundClassEvent.push({ jiNotationLevel, boundType, name, pitch })
        }
    })

    return boundClassEvent
}

export {
    computeBoundClassEvents,
}
