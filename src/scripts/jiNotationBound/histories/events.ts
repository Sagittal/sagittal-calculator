import { isScamonGreater, isScamonLesser, Name } from "../../../general"
import { Bound, BoundType, JiNotationLevel } from "../../../sagittal"
import { BoundedCommaClassPositions } from "../boundedPositions"
import { BOUNDS_BY_TYPE } from "./bounds"
import { BoundEvent } from "./types"

const computeBoundEvents = (
    jiNotationLevel: JiNotationLevel,
    [lesserBoundedCommaClassPosition, greaterBoundedCommaClassPosition]: BoundedCommaClassPositions,
    boundType: BoundType,
): BoundEvent[] => {
    const boundEvent: BoundEvent[] = []

    const bounds = BOUNDS_BY_TYPE[ boundType ][ jiNotationLevel ]

    bounds.forEach(({ pitch, name = "" as Name<Bound> }: Bound): void => {
        if (
            (!lesserBoundedCommaClassPosition || isScamonGreater(pitch, lesserBoundedCommaClassPosition)) &&
            (!greaterBoundedCommaClassPosition || isScamonLesser(pitch, greaterBoundedCommaClassPosition))
        ) {
            boundEvent.push({ jiNotationLevel, boundType, name, pitch })
        }
    })

    return boundEvent
}

export {
    computeBoundEvents,
}
