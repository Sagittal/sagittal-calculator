import { Cents } from "../../general"
import { computeBoundedSymbolPositions } from "./boundedSymbolPositions"
import { BOUNDS } from "./bounds"
import { computeInaDistance } from "./inaDistance"
import { computePositionSymbol } from "./positionSymbol"
import { Bound, BoundedSymbols, SagittalSymbol } from "./types"

const computeLevelBoundedSymbols = (bound: Bound): BoundedSymbols => {
    const { cents, levels, id } = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedSymbols: Array<SagittalSymbol | undefined> = computeBoundedSymbolPositions(cents, level).map(computePositionSymbol)
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols.map(symbol => {
                if (symbol) {
                    const distance: Cents = Math.abs(cents - symbol.primaryComma.cents) as Cents

                    return {
                        ...symbol,
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

const LEVEL_BOUNDED_SYMBOLS: BoundedSymbols[] = BOUNDS.map(computeLevelBoundedSymbols)

export {
    computeLevelBoundedSymbols,
    LEVEL_BOUNDED_SYMBOLS,
}
