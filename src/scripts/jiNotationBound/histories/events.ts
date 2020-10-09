import { isScamonGreater, isScamonLesser, Name } from "../../../general"
import { Bound, BoundType, JiNotationLevel } from "../../../sagittal"
import { BoundedSymbolClassPositions } from "../boundedPositions"
import { BOUNDS_BY_TYPE } from "./bounds"
import { BoundEvent } from "./types"

const computeBoundEvents = (
    jiNotationLevel: JiNotationLevel,
    [lesserBoundedSymbolPosition, greaterBoundedSymbolPosition]: BoundedSymbolClassPositions,
    boundType: BoundType,
): BoundEvent[] => {
    const boundEvent: BoundEvent[] = []

    const bounds = BOUNDS_BY_TYPE[ boundType ][ jiNotationLevel ]

    bounds.forEach(({ pitch, name = "" as Name<Bound> }: Bound): void => {
        if (
            (!lesserBoundedSymbolPosition || isScamonGreater(pitch, lesserBoundedSymbolPosition)) &&
            (!greaterBoundedSymbolPosition || isScamonLesser(pitch, greaterBoundedSymbolPosition))
        ) {
            boundEvent.push({ jiNotationLevel, boundType, name, pitch })
        }
    })

    return boundEvent
}

export {
    computeBoundEvents,
}
