import { Cents } from "../../general"
import { LEVELS_BOUNDS } from "./levelsBounds"
import { JiSymbol } from "./types"

const computeSecondaryCommaZone = (symbol: JiSymbol): [Cents, Cents] => {
    const levelBounds = LEVELS_BOUNDS[ symbol.introducingLevel ]
    const upperBoundIndex = levelBounds.findIndex(bound => bound.cents > symbol.primaryComma.cents)
    const upperBound = levelBounds[ upperBoundIndex ].cents
    const lowerBound = upperBoundIndex === 0 ? 0 as Cents : levelBounds[ upperBoundIndex - 1 ].cents // TODO: or should it be -upperBound?

    return [lowerBound, upperBound]
}

export {
    computeSecondaryCommaZone,
}
