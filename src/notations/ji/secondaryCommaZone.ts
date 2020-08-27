import { Cents, Max, Min } from "../../general"
import { LEVELS_BOUNDS } from "./levelsBounds"
import { JiSymbol, SecondaryCommaZone } from "./types"

const computeSecondaryCommaZone = (symbol: JiSymbol): SecondaryCommaZone => {
    const levelBounds = LEVELS_BOUNDS[ symbol.introducingLevel ]

    const indexOfBoundJustAboveSymbolAtThisLevel = levelBounds.findIndex(bound => bound.cents > symbol.primaryComma.cents)
    const indexOfBoundJustBelowSymbolAtThisLevel = indexOfBoundJustAboveSymbolAtThisLevel - 1

    const minCents = levelBounds[ indexOfBoundJustBelowSymbolAtThisLevel ]?.cents || 0
    const maxCents = levelBounds[ indexOfBoundJustAboveSymbolAtThisLevel ].cents

    return [minCents as Min<Cents>, maxCents as Max<Cents>]
}

export {
    computeSecondaryCommaZone,
}
