import { Cents } from "../../general"
import { computeBoundedSymbolPositions } from "./boundedSymbolPositions"
import { BOUNDS } from "./bounds"
import { computeInaDistance } from "./inaDistance"
import { computePositionSymbolId } from "./positionSymbolId"
import { Bound, BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel, JiSymbol } from "./types"
import { getSymbol } from "./symbol"

const computeLevelBoundedSymbolIdWithDistances = (bound: Bound): BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel => {
    const { cents, levels, id } = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedSymbols: Array<JiSymbol | undefined> = computeBoundedSymbolPositions(cents, level)
                .map(computePositionSymbolId)
                .map(symbolId => symbolId && getSymbol(symbolId))
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols.map(symbol => {
                if (symbol) {
                    const distance: Cents = Math.abs(cents - symbol.primaryComma.cents) as Cents

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
