import { abs, Cents, difference } from "../../general"
import { computeBoundedSymbolPositions } from "./boundedSymbolPositions"
import { BOUNDS } from "./bounds"
import { computeInaDistance } from "./inaDistance"
import { computePositionSymbolId } from "./positionSymbolId"
import { getSymbol } from "./symbol"
import { Bound, BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel, JiSymbol } from "./types"

const computeLevelBoundedSymbolIdWithDistances = (bound: Bound): BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel => {
    const { cents, levels, id } = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedSymbols: Array<JiSymbol | undefined> = computeBoundedSymbolPositions(cents, level)
                .map(computePositionSymbolId)
                .map(symbolId => symbolId && getSymbol(symbolId))
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols.map(symbol => {
                if (symbol) {
                    const distance: Cents = abs(difference(cents, symbol.primaryComma.cents))

                    return {
                        id: symbol.id,
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

const LEVEL_BOUNDED_SYMBOLS: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel[] = BOUNDS.map(computeLevelBoundedSymbolIdWithDistances)

export {
    computeLevelBoundedSymbolIdWithDistances,
    LEVEL_BOUNDED_SYMBOLS,
}
