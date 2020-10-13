import { isScamonGreater, isScamonLesser, Name } from "../../../general"
import { BoundClass, BoundType, JiNotationLevel } from "../../../sagittal"
import { BoundedCommaClassPositions } from "../boundedPositions"
import { JI_NOTATION_BOUND_CLASSES_BY_TYPE } from "./bounds"
import { BoundClassEvent } from "./types"

const computeBoundClassEvents = (
    jiNotationLevel: JiNotationLevel,
    [lesserBoundedCommaClassPosition, greaterBoundedCommaClassPosition]: BoundedCommaClassPositions,
    boundType: BoundType,
): BoundClassEvent[] => {
    const boundClassEvent: BoundClassEvent[] = []

    const jiNotationBoundClasses = JI_NOTATION_BOUND_CLASSES_BY_TYPE[ boundType ][ jiNotationLevel ]

    jiNotationBoundClasses.forEach(({ pitch, name = "" as Name<BoundClass> }: BoundClass): void => {
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
