import { LEVELS_BOUNDS } from "./levelsBounds"
import { SagittalSymbol } from "./types"
import { Cents } from "../../utilities/types"

const computeSecondaryCommaZone = (symbol: SagittalSymbol): [Cents, Cents] => {
    const levelBounds = LEVELS_BOUNDS[ symbol.introducingLevel ]
    const upperBoundIndex = levelBounds.findIndex(bound => bound.position > symbol.primaryComma.position)
    const upperBound = levelBounds[ upperBoundIndex ].position
    const lowerBound = upperBoundIndex === 0 ? 0 as Cents : levelBounds[ upperBoundIndex - 1 ].position // TODO: or should it be -upperBound?

    return [lowerBound, upperBound]
}

export {
    computeSecondaryCommaZone,
}
