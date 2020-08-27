import { abs, Cents, difference } from "../../general"
import { getSagittalComma } from "../getComma"
import { computeBoundedJiSymbolPositions } from "./boundedJiSymbolPositions"
import { BOUNDS } from "./bounds"
import { computeInaDistance } from "./inaDistance"
import { getJiSymbol } from "./jiSymbol"
import { computePositionJiSymbolId } from "./positionJiSymbolId"
import { Bound, BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel, JiSymbol } from "./types"

const computeLevelBoundedJiSymbolIdWithDistances = (
    bound: Bound,
): BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel => {
    const { cents, levels, id } = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedSymbols: Array<JiSymbol | undefined> = computeBoundedJiSymbolPositions(cents, level)
                .map(computePositionJiSymbolId)
                .map(jiSymbolId => jiSymbolId && getJiSymbol(jiSymbolId))
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols.map(jiSymbol => {
                if (jiSymbol) {
                    const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)
                    const distance: Cents = abs(difference(cents, primaryComma.cents))

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
    BOUNDS.map(computeLevelBoundedJiSymbolIdWithDistances)

export {
    computeLevelBoundedJiSymbolIdWithDistances,
    LEVEL_BOUNDED_SYMBOLS,
}
