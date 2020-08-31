import { Cents, Max, Min } from "../../../general"
import { getSagittalComma } from "../getSagittalComma"
import { LEVELS_BOUNDS } from "./levelsBounds"
import { JiSymbol, SecondaryCommaZone } from "./types"

// TODO: perhaps secondary comma zone should be built-in to the JiSymbol model,
//  and this test would be just to check that they all check out with themselves?
//  sure, but first you'd want to include its capture zones per level at all.
//  then work up to its secondary comma zone
//  okay, but do we want it to be an array of Id<Bound>? that seems right

const computeSecondaryCommaZone = (jiSymbol: JiSymbol): SecondaryCommaZone => {
    const levelBounds = LEVELS_BOUNDS[ jiSymbol.introducingLevel ]

    const indexOfBoundJustAboveSymbolAtThisLevel = levelBounds.findIndex(bound => {
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)

        return bound.cents > primaryComma.cents
    })
    const indexOfBoundJustBelowSymbolAtThisLevel = indexOfBoundJustAboveSymbolAtThisLevel - 1

    const minCents = levelBounds[ indexOfBoundJustBelowSymbolAtThisLevel ]?.cents || 0
    const maxCents = levelBounds[ indexOfBoundJustAboveSymbolAtThisLevel ].cents

    return [minCents as Min<Cents>, maxCents as Max<Cents>]
}

export {
    computeSecondaryCommaZone,
}
