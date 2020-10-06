import { computeCentsFromPitch, Name } from "../../../general"
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

    bounds.forEach((bound: Bound): void => {
        const cents = computeCentsFromPitch(bound.pitch)
        if (
            (!lesserBoundedSymbolPosition || cents > lesserBoundedSymbolPosition) &&
            (!greaterBoundedSymbolPosition || cents < greaterBoundedSymbolPosition)
        ) {
            boundEvent.push({
                jiNotationLevel,
                boundType: boundType,
                name: bound.name || "" as Name<Bound>,
                cents: cents,
            })
        }
    })

    return boundEvent
}

export {
    computeBoundEvents,
}
