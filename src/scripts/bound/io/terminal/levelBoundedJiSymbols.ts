import { abs, Cents, computeCentsFromPitch, difference, Maybe } from "../../../../general"
import { Bound, getJiSymbol, getSagittalComma, JiSymbol, JI_BOUNDS } from "../../../../sagittal"
import { computeInaDistance } from "../../analyzedHistory"
import { computeBoundedJiSymbolPositions } from "../../boundedPositions"
import { computePositionJiSymbolId } from "./positionJiSymbolId"
import { BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel } from "./types"

const computeLevelBoundedJiSymbolIdWithDistances = (
    bound: Bound,
): BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel => {
    const { cents, levels, id } = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedSymbols: Array<Maybe<JiSymbol>> = computeBoundedJiSymbolPositions(cents, level)
                .map(computePositionJiSymbolId)
                .map(jiSymbolId => jiSymbolId && getJiSymbol(jiSymbolId))
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols.map(jiSymbol => {
                if (jiSymbol) {
                    const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)
                    const primaryCommaCents = computeCentsFromPitch(primaryComma)
                    const distance: Cents = abs(difference(cents, primaryCommaCents))

                    return {
                        id: jiSymbol.id,
                        distance,
                        inaDistance: computeInaDistance(distance, level),
                    }
                }

                return undefined
            })

            return {
                ...levels,
                [ level ]: levelBoundedSymbolsWithDistance,
            }
        },
        {
            id,
        },
    )
}

const LEVEL_BOUNDED_SYMBOLS: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel[] =
    JI_BOUNDS.map(computeLevelBoundedJiSymbolIdWithDistances)

export {
    computeLevelBoundedJiSymbolIdWithDistances,
    LEVEL_BOUNDED_SYMBOLS,
}
