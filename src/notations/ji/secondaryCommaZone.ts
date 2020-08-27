import { Cents, Max, Min } from "../../general"
import { getSagittalComma } from "../getComma"
import { LEVELS_BOUNDS } from "./levelsBounds"
import { JiSymbol, SecondaryCommaZone } from "./types"

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
